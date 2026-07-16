"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Elemento firma del sitio: una línea de "signos vitales" que se dibuja
 * una sola vez al entrar en el viewport. Se usa con moderación (1–2 veces)
 * como divisor entre secciones clave, evocando el trazo de un monitor
 * clínico sin caer en el cliché de un ECG completo y decorativo.
 */
export default function VitalLine({ tone = "pine" }: { tone?: "pine" | "paper" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stroke = tone === "pine" ? "#2F6F62" : "#FAF9F5";

  return (
    <div ref={ref} className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14"
      >
        <motion.path
          d="M0,30 L280,30 L320,30 L345,8 L370,52 L395,30 L440,30 L1200,30"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
