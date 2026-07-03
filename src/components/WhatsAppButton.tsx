"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/18294994879?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-white font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl group"
      style={{ background: "#25D366" }}
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}
