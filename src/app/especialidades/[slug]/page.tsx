import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE, SPECIALTIES } from "@/lib/site-data";
import VitalLine from "@/components/VitalLine";
import SpecialtyFAQ from "@/components/SpecialtyFAQ";
import SpecialtyImage from "@/components/SpecialtyImage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.id === slug);
  if (!specialty) return {};

  return {
    title: `${specialty.name} — ${SITE.name}`,
    description: specialty.description,
    openGraph: {
      title: `${specialty.name} — ${SITE.name}`,
      description: specialty.description,
    },
  };
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.id === slug);

  if (!specialty) {
    notFound();
  }

  const otherSpecialties = SPECIALTIES.filter((s) => s.id !== specialty.id).slice(0, 3);

  return (
    <>
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-paper">
        <div className="container-content max-w-3xl">
          <Link
            href="/especialidades"
            className="font-body text-sm text-pine hover:text-pine-dark transition-colors focus-ring inline-flex items-center gap-1.5 mb-8"
          >
            <span aria-hidden="true">←</span>
            Todas las especialidades
          </Link>

          <p className="eyebrow text-pine mb-4">Especialidad</p>
          <h1 className="font-display text-ink text-4xl md:text-5xl tracking-tight mb-6">
            {specialty.name}
          </h1>
          <p className="font-body text-stone text-lg leading-relaxed">
            {specialty.intro}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/#contacto"
              className="inline-flex items-center rounded-full bg-ink text-paper px-7 py-3.5 font-body font-medium hover:bg-ink-light transition-colors focus-ring"
            >
              Agendar cita en {specialty.name.toLowerCase()}
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line text-ink px-7 py-3.5 font-body font-medium hover:border-pine hover:text-pine transition-colors focus-ring"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="pb-4 bg-paper">
        <div className="container-content max-w-3xl">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-pine-light/40">
            <SpecialtyImage src={specialty.image} alt={specialty.name} sizes="(min-width: 768px) 768px, 100vw" priority />
          </div>
        </div>
      </section>

      <div className="bg-paper">
        <VitalLine tone="pine" />
      </div>

      <section className="py-16 md:py-20 bg-paper">
        <div className="container-content max-w-3xl grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-ink text-2xl tracking-tight mb-4">
              Motivos de consulta comunes
            </h2>
            <ul className="space-y-2.5 font-body text-stone text-sm">
              {specialty.conditions.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <span className="text-pine" aria-hidden="true">
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-ink text-2xl tracking-tight mb-4">
              Qué incluye la atención
            </h2>
            <ul className="space-y-2.5 font-body text-stone text-sm">
              {specialty.services.map((s) => (
                <li key={s} className="flex gap-2.5">
                  <span className="text-pine" aria-hidden="true">
                    —
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-pine-light/40">
        <div className="container-content max-w-3xl">
          <h2 className="font-display text-ink text-2xl tracking-tight mb-8">
            Preguntas sobre {specialty.name.toLowerCase()}
          </h2>
          <SpecialtyFAQ faqs={specialty.faqs} />
        </div>
      </section>

      {otherSpecialties.length > 0 && (
        <section className="py-16 md:py-20 bg-paper">
          <div className="container-content">
            <h2 className="font-display text-ink text-2xl tracking-tight mb-8">
              Otras especialidades
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherSpecialties.map((s) => (
                <Link
                  key={s.id}
                  href={`/especialidades/${s.id}`}
                  className="group border border-line rounded-xl p-6 hover:border-pine hover:bg-pine-light/20 transition-colors focus-ring"
                >
                  <h3 className="font-display text-lg text-ink mb-1.5 group-hover:text-pine-dark transition-colors">
                    {s.name}
                  </h3>
                  <p className="font-body text-stone text-sm leading-relaxed">
                    {s.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
