"use client";

import { motion } from "framer-motion";
import VitalLine from "./VitalLine";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-paper">
      <div className="container-content grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-8 items-start">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-pine mb-5"
          >
            Clínica privada — CDMX
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-ink text-[2.6rem] leading-[1.05] md:text-6xl md:leading-[1.02] tracking-tight"
          >
            Atención médica que se agenda en minutos, no en llamadas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-stone text-lg mt-6 max-w-xl"
          >
            Especialistas certificados, instalaciones privadas y un proceso de
            cita diseñado para que llegues a tu consulta sin fricción alguna.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-ink text-paper px-7 py-3.5 font-body font-medium hover:bg-ink-light transition-colors focus-ring"
            >
              Solicitar una cita
            </a>
            <a
              href="https://wa.me/525587654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line text-ink px-7 py-3.5 font-body font-medium hover:border-pine hover:text-pine transition-colors focus-ring"
            >
              Escribir por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-ink text-paper rounded-2xl p-8 md:mt-4"
        >
          <p className="eyebrow text-pine-light mb-3">Por qué elegirnos</p>
          <ul className="space-y-4 font-body text-sm">
            <li className="flex gap-3">
              <span className="text-pine-light">—</span>
              Confirmación de cita en menos de 24 horas hábiles.
            </li>
            <li className="flex gap-3">
              <span className="text-pine-light">—</span>
              Especialistas certificados por el Consejo Mexicano correspondiente.
            </li>
            <li className="flex gap-3">
              <span className="text-pine-light">—</span>
              Instalaciones privadas, sin salas de espera saturadas.
            </li>
            <li className="flex gap-3">
              <span className="text-pine-light">—</span>
              Atención de urgencias todos los días del año.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24">
        <VitalLine tone="pine" />
      </div>
    </section>
  );
}
