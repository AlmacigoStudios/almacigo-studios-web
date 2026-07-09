const ALLOWED_ORIGIN = 'https://almacigostudios.com';

function corsHeaders(origin) {
  const allowed = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-admin-secret',
  };
}

export async function onRequestPost(context) {
  const origin = context.request.headers.get('Origin') || '';
  try {
    const body = await context.request.json();
    const { name, business, phone, email, need, message } = body;

    if (!name || !business || !phone || !email || !need) {
      return Response.json(
        { ok: false, error: 'Campos requeridos incompletos.' },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const lead = {
      id: Date.now(),
      name, business, phone, email, need,
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    if (!context.env.LEADS_KV) {
      console.error('[ERROR] LEADS_KV no está vinculado en Cloudflare.');
      return Response.json(
        { ok: false, error: 'Error de configuración del servidor.' },
        { status: 500, headers: corsHeaders(origin) }
      );
    }

    await context.env.LEADS_KV.put(`lead:${lead.id}`, JSON.stringify(lead));
    console.log(`[LEAD] ${lead.createdAt} — ${name} | ${business} | ${need}`);

    if (context.env.SHEETS_WEBHOOK_URL) {
      context.waitUntil(
        fetch(context.env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        }).catch((err) => console.error('[SHEETS]', err))
      );
    } else {
      console.error('[ERROR] SHEETS_WEBHOOK_URL no está configurado.');
    }

    return Response.json(
      { ok: true, message: `Gracias ${name}, recibimos tu solicitud. Te respondemos en menos de 24 horas.` },
      { status: 201, headers: corsHeaders(origin) }
    );
  } catch (err) {
    console.error('[ERROR]', err);
    return Response.json(
      { ok: false, error: 'Error interno. Intenta de nuevo.' },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}

export async function onRequestGet(context) {
  const origin = context.request.headers.get('Origin') || '';
  const secret = context.request.headers.get('x-admin-secret');

  if (!secret || secret !== context.env.ADMIN_SECRET) {
    return Response.json(
      { ok: false, error: 'No autorizado.' },
      { status: 401, headers: corsHeaders(origin) }
    );
  }

  if (!context.env.LEADS_KV) {
    return Response.json(
      { ok: false, error: 'KV no configurado.' },
      { status: 500, headers: corsHeaders(origin) }
    );
  }

  const list = await context.env.LEADS_KV.list({ prefix: 'lead:' });
  const leads = await Promise.all(
    list.keys.map(async (k) => {
      const val = await context.env.LEADS_KV.get(k.name);
      return val ? JSON.parse(val) : null;
    })
  );

  const sorted = leads
    .filter(Boolean)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return Response.json(
    { ok: true, total: sorted.length, leads: sorted },
    { headers: corsHeaders(origin) }
  );
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}
