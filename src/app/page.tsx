import Image from "next/image";
import {
  Globe,
  MessageSquare,
  Share2,
  Bot,
  BarChart3,
  MapPin,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  FileText,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_BASE = "https://wa.me/18294994879";
const WA_LINK = `${WA_BASE}?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios`;
const WA_DIAGNOSTICO = `${WA_BASE}?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20gratis`;

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#contacto", label: "Contacto" },
];

const servicios = [
  {
    icon: MapPin,
    titulo: "Google Business",
    desc: "Tu negocio aparece cuando alguien busca en Google Maps o en el buscador. Más visibilidad, más clientes.",
  },
  {
    icon: Globe,
    titulo: "Sitios web modernos",
    desc: "Páginas claras, rápidas y bien diseñadas que convierten visitas en clientes reales.",
  },
  {
    icon: MessageSquare,
    titulo: "WhatsApp Business",
    desc: "Configuración profesional para responder más rápido, organizar consultas y no perder ningún cliente.",
  },
  {
    icon: Share2,
    titulo: "Redes sociales",
    desc: "Perfiles y contenido con imagen seria y moderna. Tu marca se ve igual de bien en todos lados.",
  },
  {
    icon: Bot,
    titulo: "IA para negocios",
    desc: "Herramientas para automatizar tareas repetitivas y ahorrar horas de trabajo operativo cada semana.",
  },
  {
    icon: BarChart3,
    titulo: "Publicidad local",
    desc: "Campañas simples y medibles para atraer clientes que están cerca de tu negocio.",
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    desc: "Revisamos cómo está tu negocio hoy y dónde se está perdiendo oportunidad.",
  },
  {
    numero: "02",
    titulo: "Plan claro",
    desc: "Te decimos qué hacer primero, qué importa de verdad y qué no hace falta.",
  },
  {
    numero: "03",
    titulo: "Implementación",
    desc: "Diseñamos tu presencia digital y configuramos los sistemas básicos.",
  },
  {
    numero: "04",
    titulo: "Seguimiento",
    desc: "Ajustamos, medimos y mantenemos todo funcionando de forma ordenada.",
  },
];

const casos = [
  {
    nombre: "Panadería La Esperanza",
    resultado: "+150% clientes nuevos",
    detalle: "Mejor orden en mensajes y pedidos desde WhatsApp Business.",
    Icon: TrendingUp,
  },
  {
    nombre: "Ferretería Central",
    resultado: "+200% tráfico web",
    detalle: "Más consultas desde Google Maps y búsquedas locales.",
    Icon: Globe,
  },
  {
    nombre: "Restaurante El Sabor",
    resultado: "+180% reservas",
    detalle: "Menos dependencia de llamadas, más reservas por Instagram y web.",
    Icon: Users,
  },
];

const paquetes = [
  {
    imagen: "/images/cuatro-ojos.png",
    nombre: "Cuatro Ojos",
    subtitulo: "🐦 Ave endémica · 17–18 cm",
    precio: "RD$4,500",
    periodo: "/mes",
    descripcion: "Para negocios que quieren empezar desde cero.",
    items: [
      "Google Business Profile",
      "Instagram + Facebook Business",
      "4 publicaciones mensuales",
      "Reporte básico",
    ],
    highlight: false,
  },
  {
    imagen: "/images/cigua-palmera.png",
    nombre: "Cigua Palmera",
    subtitulo: "🐦 Ave nacional de RD · 18–20 cm",
    precio: "RD$9,500",
    periodo: "/mes",
    descripcion: "Para negocios que quieren crecer con sistema.",
    items: [
      "Todo lo del paquete Cuatro Ojos",
      "10 publicaciones mensuales",
      "2 reels mensuales",
      "WhatsApp Business",
      "Gestión de reseñas Google",
      "Reporte mensual con recomendaciones",
    ],
    highlight: true,
  },
  {
    imagen: "/images/cotorra.png",
    nombre: "Cotorra",
    subtitulo: "🐦 Ave endémica · 25–30 cm",
    precio: "RD$5,500/mes",
    periodo: " + RD$27,500 Inicial (por web)",
    descripcion: "Para negocios que quieren página web y verse más formales.",
    items: [
      "Página web de 5 páginas",
      "Dominio y hosting primer año",
      "Integración WhatsApp y Google Maps",
      "SEO local básico",
      "6 publicaciones mensuales",
      "Mantenimiento mensual",
    ],
    highlight: false,
  },
  {
    imagen: "/images/cua.png",
    nombre: "Cuá",
    subtitulo: "🐦 Ave endémica · ~30 cm · la más grande",
    precio: "RD$24,500",
    periodo: "/mes",
    descripcion: "Para negocios que quieren escalar con sistema completo.",
    items: [
      "Todo del paquete Cotorra activo",
      "14 publicaciones mensuales",
      "4 reels mensuales",
      "Chatbot WhatsApp",
      "1 campaña mensual de anuncios",
      "1 hora de asesoría estratégica",
      "Reporte mensual detallado",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Nosotros hacemos el trabajo técnico y te lo explicamos en palabras simples. Tu trabajo es hacer crecer tu negocio, el nuestro es que la tecnología trabaje para ti.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Depende del paquete, pero la base puede comenzar en pocos días con un diagnóstico claro. Los primeros resultados medibles suelen aparecer en 30 a 60 días.",
  },
  {
    q: "¿Es muy complicado para el dueño del negocio?",
    a: "Para nada. Nuestra propuesta está pensada para que el dueño del negocio no tenga que complicarse. Tú apruebas, nosotros ejecutamos.",
  },
  {
    q: "Ya tengo Instagram, ¿para qué necesito esto?",
    a: "¿Ese Instagram te trae clientes? La diferencia entre tener una cuenta y tener un sistema que funciona es enorme. Ahí es donde entramos nosotros.",
  },
  {
    q: "¿No es lo mismo que contratar a un sobrino que sabe de redes?",
    a: "Hay una gran diferencia entre ayuda casual y un sistema con estrategia y constancia. Nosotros entregamos resultados medibles, no promesas.",
  },
];

const tiposNegocio = [
  "Restaurantes", "Salones de belleza", "Ferreterías", "Colmados",
  "Farmacias", "Clínicas", "Talleres", "Boutiques",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Comercio local en República Dominicana"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(31,92,62,0.82) 55%, rgba(17,24,39,0.75) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Tu comercio local,{" "}
              <span className="text-gradient-gold">ahora digital</span>{" "}
              y profesional.
            </h1>
            <p className="text-lg text-white/72 leading-relaxed mb-8 max-w-lg">
              Ayudamos a negocios dominicanos a tener presencia digital seria,
              atraer más clientes y trabajar con más orden.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--dorado)", color: "var(--carbon)" }}
              >
                Agendar diagnóstico gratis
                <ArrowRight size={15} />
              </a>
              <a
                href="#paquetes"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10 transition-all duration-200"
              >
                Ver paquetes
              </a>
            </div>
          </div>

          {/* Stats flotantes */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {[
              { valor: "+50", label: "comercios digitalizados" },
              { valor: "30 días", label: "promedio de implementación" },
              { valor: "100%", label: "enfoque local RD" },
            ].map((s, i) => (
              <div
                key={i}
                className="float rounded-2xl px-6 py-4 text-white w-56"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(14px)",
                  animationDelay: `${i * 0.9}s`,
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--dorado)" }}
                >
                  {s.valor}
                </div>
                <div className="text-sm text-white/65 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </section>

      {/* ── TIPOS DE NEGOCIO ── */}
      <section
        className="py-5 border-y"
        style={{ borderColor: "rgba(31,92,62,0.12)", background: "var(--crema)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--gris)" }}
            >
              Trabajamos con
            </span>
            {tiposNegocio.map((t) => (
              <span key={t} className="text-sm font-medium" style={{ color: "var(--verde)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-24" style={{ background: "var(--crema)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(31,92,62,0.08)",
                color: "var(--verde)",
                border: "1px solid rgba(31,92,62,0.2)",
              }}
            >
              Servicios
            </Badge>
            <h2
              className="text-4xl font-black mb-4"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
            >
              Pensados para el{" "}
              <span className="text-gradient-gold">mercado local</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--gris)" }}>
              Sin tecnicismos innecesarios. Explicamos todo en palabras simples
              y lo implementamos contigo paso a paso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                style={{ background: "white", borderColor: "rgba(31,92,62,0.1)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(31,92,62,0.08)" }}
                >
                  <s.icon size={20} style={{ color: "var(--verde)" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
                >
                  {s.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section id="proceso" className="py-24" style={{ background: "var(--verde)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(201,168,76,0.15)",
                color: "#E8C878",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Proceso
            </Badge>
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Fácil de entender,{" "}
              <span className="text-gradient-gold">difícil de ignorar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((p, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-6xl font-black mb-4 leading-none opacity-40"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--dorado)" }}
                >
                  {p.numero}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {p.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
                {i < proceso.length - 1 && (
                  <ChevronRight
                    size={18}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block opacity-40"
                    style={{ color: "var(--dorado)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO ── */}
      <section id="casos" className="py-24" style={{ background: "var(--carbon)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(201,168,76,0.12)",
                color: "#E8C878",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Resultados reales
            </Badge>
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Lo que cambia cuando{" "}
              <span className="text-gradient-gold">tienes un sistema</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {casos.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <c.Icon size={18} style={{ color: "var(--dorado)" }} />
                </div>
                <div
                  className="text-3xl font-black mb-1"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--dorado)" }}
                >
                  {c.resultado}
                </div>
                <div className="font-semibold text-white mb-2">{c.nombre}</div>
                <p className="text-sm text-white/50">{c.detalle}</p>
                <div className="flex mt-4 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      fill="var(--dorado)"
                      style={{ color: "var(--dorado)" }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section id="paquetes" className="py-24" style={{ background: "var(--crema)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(31,92,62,0.08)",
                color: "var(--verde)",
                border: "1px solid rgba(31,92,62,0.2)",
              }}
            >
              Paquetes
            </Badge>
            <h2
              className="text-4xl font-black mb-3"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
            >
              Cada plan lleva el nombre de un{" "}
              <span className="text-gradient-gold">ave endémica dominicana</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--gris)" }}>
              Ordenadas de menor a mayor según el nivel de servicio. Empieza donde quieras,
              escala cuando estés listo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paquetes.map((p, i) => (
              <div
                key={i}
                className="relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: "white",
                  borderColor: p.highlight ? "var(--dorado)" : "rgba(31,92,62,0.1)",
                  boxShadow: p.highlight ? "0 0 0 2px var(--dorado)" : undefined,
                }}
              >
                {p.highlight && (
                  <div
                    className="text-center text-xs font-bold uppercase tracking-widest py-1.5"
                    style={{ background: "var(--dorado)", color: "var(--carbon)" }}
                  >
                    Más popular
                  </div>
                )}

                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: "rgba(31,92,62,0.04)" }}
                >
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-md"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs mb-1" style={{ color: "var(--gris)" }}>
                    {p.subtitulo}
                  </p>
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
                  >
                    {p.nombre}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: "var(--gris)" }}>
                    {p.descripcion}
                  </p>
                  <div className="mb-4">
                    <span
                      className="text-2xl font-black"
                      style={{ fontFamily: "var(--font-outfit)", color: "var(--dorado)" }}
                    >
                      {p.precio}
                    </span>
                    <span className="text-xs ml-1" style={{ color: "var(--gris)" }}>
                      {p.periodo}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          size={13}
                          className="shrink-0 mt-0.5"
                          style={{ color: "var(--verde-medio, #52B788)" }}
                        />
                        <span style={{ color: "var(--carbon)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WA_BASE}?text=Hola%2C%20me%20interesa%20el%20paquete%20${encodeURIComponent(p.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] block"
                    style={{
                      background: p.highlight ? "var(--dorado)" : "var(--verde)",
                      color: p.highlight ? "var(--carbon)" : "white",
                    }}
                  >
                    Empezar con {p.nombre}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(31,92,62,0.08)",
                color: "var(--verde)",
                border: "1px solid rgba(31,92,62,0.2)",
              }}
            >
              Preguntas frecuentes
            </Badge>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
            >
              Respuestas directas, sin rodeos
            </h2>
          </div>

          <Accordion className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                className="border rounded-xl px-5 overflow-hidden"
                style={{ borderColor: "rgba(31,92,62,0.12)" }}
              >
                <AccordionTrigger
                  className="text-sm font-semibold text-left py-4 hover:no-underline"
                  style={{ color: "var(--carbon)" }}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed pb-4"
                  style={{ color: "var(--gris)" }}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section
        id="contacto"
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--crema)" }}
      >
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-6 pointer-events-none"
          style={{ background: "var(--verde)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-6 pointer-events-none"
          style={{ background: "var(--dorado)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-xs font-semibold uppercase tracking-wide px-3 py-1"
              style={{
                background: "rgba(31,92,62,0.08)",
                color: "var(--verde)",
                border: "1px solid rgba(31,92,62,0.2)",
              }}
            >
              Contacto
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
            >
              Cuéntanos de tu negocio.{" "}
              <span className="text-gradient-gold">Empezamos hoy.</span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "var(--gris)" }}>
              Elige cómo prefieres contactarnos. Sin compromiso, sin tecnicismos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Opción rápida: WhatsApp */}
            <div
              className="p-8 rounded-2xl text-white flex flex-col"
              style={{ background: "var(--verde)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(201,168,76,0.2)" }}
              >
                <Zap size={20} style={{ color: "var(--dorado)" }} />
              </div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#E8C878" }}
              >
                Opción rápida
              </p>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                WhatsApp directo
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-8 flex-1">
                Escríbenos ahora mismo. Respondemos en menos de 24 horas, normalmente mucho antes. La forma más directa de empezar.
              </p>
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--dorado)", color: "var(--carbon)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.12 1.527 5.847L.057 23.882l6.187-1.463A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.034-1.387l-.36-.214-3.731.882.898-3.63-.234-.373A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                Agendar por WhatsApp
              </a>
              <p className="text-xs mt-3 text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                Respuesta en menos de 24h
              </p>
            </div>

            {/* Opción formulario */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "white",
                border: "1px solid rgba(31,92,62,0.1)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(31,92,62,0.07)" }}
              >
                <FileText size={20} style={{ color: "var(--verde)" }} />
              </div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--gris)" }}
              >
                Formulario
              </p>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--carbon)" }}
              >
                Envíanos tu solicitud
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--gris)" }}>
                Cuéntanos de tu negocio. Te respondemos con un plan personalizado en máximo 3 días.
              </p>
              <ContactForm />
              <p className="text-xs mt-3 text-center" style={{ color: "var(--gris)" }}>
                Respuesta en máximo 3 días
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12" style={{ background: "var(--carbon)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Almácigo Studios"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <span
                  className="font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Almácigo Studios
                </span>
              </div>
            </div>

            <div>
              <h4
                className="font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--dorado)" }}
              >
                Navegación
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--dorado)" }}
              >
                Contacto
              </h4>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block mb-2 hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                +1 (829) 499-4879
              </a>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                República Dominicana
              </p>
            </div>
          </div>

          <div
            className="border-t pt-6 flex justify-center"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2026 Almácigo Studios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
