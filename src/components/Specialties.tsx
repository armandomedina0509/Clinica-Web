"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SPECIALTIES } from "@/lib/site-data";
import SpecialtyImage from "./SpecialtyImage";

export default function Specialties() {
  const preview = SPECIALTIES.slice(0, 3);

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-paper">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="eyebrow text-pine mb-4">Especialidades</p>
            <h2 className="font-display text-ink text-3xl md:text-4xl tracking-tight max-w-2xl">
              Un equipo médico para cada etapa de tu salud.
            </h2>
          </div>
          <Link
            href="/especialidades"
            className="shrink-0 inline-flex items-center gap-1.5 font-body text-sm font-medium text-pine hover:text-pine-dark transition-colors focus-ring"
          >
            Ver todas las especialidades
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {preview.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/especialidades/${s.id}`}
                className="group flex flex-col h-full border border-line rounded-xl overflow-hidden hover:border-pine transition-colors focus-ring"
              >
                <div className="relative w-full aspect-[4/3] bg-pine-light/40">
                  <SpecialtyImage src={s.image} alt={s.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-col flex-1 p-6 group-hover:bg-pine-light/20 transition-colors">
                  <h3 className="font-display text-xl text-ink mb-2 group-hover:text-pine-dark transition-colors">
                    {s.name}
                  </h3>
                  <p className="font-body text-stone text-sm leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <span className="font-body text-sm text-pine font-medium mt-4 inline-flex items-center gap-1.5">
                    Ver más
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
