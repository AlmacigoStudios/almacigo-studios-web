import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almácigo Studios | Tu comercio local, ahora digital",
  description:
    "Ayudamos a negocios dominicanos a tener presencia digital profesional, atraer más clientes y trabajar con más orden usando herramientas modernas.",
  keywords: "digitalización, negocios dominicanos, República Dominicana, presencia digital, WhatsApp Business, Google Business",
  openGraph: {
    title: "Almácigo Studios | Tu comercio local, ahora digital",
    description:
      "Ayudamos a negocios dominicanos a tener presencia digital profesional y atraer más clientes.",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
