import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site-data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicameridiano.mx"),
  title: {
    default: `${SITE.name} — Clínica privada en CDMX | Agenda tu cita`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Clínica privada en Ciudad de México con especialistas certificados en medicina interna, cardiología, pediatría, ginecología, dermatología y traumatología. Agenda tu cita en línea o por WhatsApp.",
  keywords: [
    "clínica privada CDMX",
    "citas médicas en línea",
    "especialistas médicos Ciudad de México",
    "cardiología CDMX",
    "pediatría CDMX",
    "urgencias médicas",
  ],
  openGraph: {
    title: `${SITE.name} — Clínica privada en CDMX`,
    description:
      "Agenda tu cita con especialistas certificados. Atención de urgencias las 24 horas.",
    url: "https://www.clinicameridiano.mx",
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body
        className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
