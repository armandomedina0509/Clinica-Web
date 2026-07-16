import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SPECIALTIES } from "@/lib/site-data";
import VitalLine from "@/components/VitalLine";
import SpecialtyImage from "@/components/SpecialtyImage";

export const metadata: Metadata = {
  title: "Especialidades médicas",
  description:
    "Conoce todas las especialidades médicas disponibles en Clínica Meridiano: medicina interna, cardiología, pediatría, ginecología, dermatología y traumatología.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-14 md:pb-16 bg-paper">
        <div className="container-content max-w-2xl">
          <p className="eyebrow text-pine mb-4">Especialidades</p>
          <h1 className="font-display text-ink text-4xl md:text-5xl tracking-tight mb-6">
            Un especialista para cada etapa de tu salud.
          </h1>
          <p className="font-body text-stone text-lg leading-relaxed">
            Cada especialidad en {SITE.name} cuenta con un espacio propio,
            sin salas de espera saturadas ni traslados innecesarios. Elige la
            que necesitas para ver a detalle qué atendemos y cómo agendar.
          </p>
        </div>
      </section>

      <div className="bg-paper">
        <VitalLine tone="pine" />
      </div>

      <section className="py-16 md:py-20 bg-paper">
        <div className="container-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.map((s) => (
              <Link
                key={s.id}
                href={`/especialidades/${s.id}`}
                className="group flex flex-col h-full border border-line rounded-xl overflow-hidden hover:border-pine transition-colors focus-ring"
              >
                <div className="relative w-full aspect-[4/3] bg-pine-light/40">
                  <SpecialtyImage
                    src={s.image}
                    alt={s.name}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-7 group-hover:bg-pine-light/20 transition-colors">
                  <h2 className="font-display text-xl text-ink mb-2 group-hover:text-pine-dark transition-colors">
                    {s.name}
                  </h2>
                  <p className="font-body text-stone text-sm leading-relaxed flex-1">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
                    {s.conditions.slice(0, 3).map((c) => (
                      <li
                        key={c}
                        className="font-body text-xs text-stone flex gap-2 items-start"
                      >
                        <span className="text-pine mt-0.5" aria-hidden="true">
                          —
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <span className="font-body text-sm text-pine font-medium mt-5 inline-flex items-center gap-1.5">
                    Ver especialidad
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink text-paper">
        <div className="container-content flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="eyebrow text-pine-light mb-3">¿No sabes con quién agendar?</p>
            <h2 className="font-display text-3xl tracking-tight">
              Medicina interna es un buen punto de partida.
            </h2>
            <p className="font-body text-paper/75 mt-3">
              Si no estás seguro de qué especialista necesitas, agenda con
              medicina interna y te canalizamos con el especialista adecuado.
            </p>
          </div>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-full bg-paper text-ink px-8 py-4 font-body font-semibold hover:bg-pine-light transition-colors focus-ring shrink-0"
          >
            Agendar una cita
          </Link>
        </div>
      </section>
    </>
  );
}
