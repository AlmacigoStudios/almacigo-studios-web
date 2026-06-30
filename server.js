const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// In-memory lead storage (swap for a real DB in production)
const leads = [];

app.post('/api/leads', (req, res) => {
  const { name, business, phone, email, need, message } = req.body;

  if (!name || !business || !phone || !email || !need) {
    return res.status(400).json({ ok: false, error: 'Campos requeridos incompletos.' });
  }

  const lead = {
    id: Date.now(),
    name,
    business,
    phone,
    email,
    need,
    message: message || '',
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);

  console.log(`[LEAD] ${lead.createdAt} — ${name} | ${business} | ${need}`);

  res.status(201).json({ ok: true, message: `Gracias ${name}, recibimos tu solicitud. Te respondemos en menos de 24 horas.` });
});

// Admin-only endpoint — requiere ADMIN_SECRET en el entorno
app.get('/api/leads', (req, res) => {
  const secret = req.headers['x-admin-secret'];
  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret || !secret || secret !== adminSecret) {
    return res.status(401).json({ ok: false, error: 'No autorizado.' });
  }
  res.json({ ok: true, total: leads.length, leads });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'almacigo-studios.html'));
});

app.listen(PORT, () => {
  console.log(`Almácigo Studios corriendo en http://localhost:${PORT}`);
});
