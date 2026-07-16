"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site-data";

const LINKS = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/#contacto", label: "Agendar cita" },
  { href: "/#urgencias", label: "Urgencias" },
  { href: "/#preguntas", label: "Preguntas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-display text-xl md:text-2xl text-ink tracking-tight focus-ring">
          {SITE.name}
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-light">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-pine transition-colors focus-ring">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-pine text-paper px-5 py-2.5 text-sm font-body font-medium hover:bg-pine-dark transition-colors focus-ring"
        >
          Agendar cita
        </Link>
        <a
          href={SITE.phoneHref}
          className="md:hidden inline-flex items-center rounded-full bg-pine text-paper px-4 py-2 text-sm font-body font-medium focus-ring"
        >
          Llamar
        </a>
      </nav>
    </header>
  );
}
