"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";

export default function UrgencyBanner() {
  return (
    <section id="urgencias" className="bg-ink text-paper py-16 md:py-20">
      <div className="container-content flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="eyebrow text-amber mb-3">Atención inmediata</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            ¿Necesitas atención inmediata?
          </h2>
          <p className="font-body text-paper/75 mt-3">
            Nuestra línea de urgencias está disponible las 24 horas, los 365
            días del año. No esperes si la situación lo requiere.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-amber text-ink px-8 py-4 font-body font-semibold text-lg hover:bg-amber-dark transition-colors focus-ring shrink-0"
        >
          <span aria-hidden="true">☎</span>
          Llamar ahora
        </motion.a>
      </div>
    </section>
  );
}
