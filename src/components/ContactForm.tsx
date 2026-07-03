"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors";

const inputStyle = {
  borderColor: "rgba(31,92,62,0.2)",
  color: "var(--carbon)",
  background: "var(--crema)",
  outline: "none",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const get = (id: string) =>
      (form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value.trim() ?? "";

    const payload = {
      name: get("name"),
      business: get("business"),
      phone: get("phone"),
      email: get("email"),
      need: get("need"),
      message: get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setMsg(data.message);
        form.reset();
      } else {
        setStatus("error");
        setMsg(data.error ?? "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMsg("Error de conexión. Escríbenos por WhatsApp si el problema persiste.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={40} style={{ color: "var(--verde)" }} />
        <p className="font-semibold" style={{ color: "var(--carbon)" }}>
          {msg}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <div>
        <label htmlFor="cf-name" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
          Nombre *
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="cf-business" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
          Nombre del negocio *
        </label>
        <input
          id="cf-business"
          name="business"
          type="text"
          required
          placeholder="Nombre del negocio"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
            Teléfono *
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(809) 000-0000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
            Correo *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@correo.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-need" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
          ¿Qué necesitas mejorar? *
        </label>
        <select
          id="cf-need"
          name="need"
          required
          defaultValue=""
          className={inputClass}
          style={inputStyle}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option>Website</option>
          <option>Redes sociales</option>
          <option>Google Business</option>
          <option>IA para automatizar</option>
          <option>No sé, necesito orientación</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold mb-1" style={{ color: "var(--carbon)" }}>
          Cuéntanos más (opcional)
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={3}
          placeholder="Cuéntanos un poco más sobre tu negocio…"
          className={inputClass}
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      {status === "error" && (
        <p className="text-xs px-3 py-2 rounded-lg" style={{ background: "#FEE2E2", color: "#DC2626" }}>
          {msg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none mt-1"
        style={{ background: "var(--verde)", color: "white" }}
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}
