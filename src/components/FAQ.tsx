import { FAQS } from "@/lib/site-data";
import SpecialtyFAQ from "./SpecialtyFAQ";

export default function FAQ() {
  return (
    <section id="preguntas" className="py-20 md:py-28 bg-paper">
      <div className="container-content max-w-3xl">
        <p className="eyebrow text-pine mb-4">Preguntas frecuentes</p>
        <h2 className="font-display text-ink text-3xl md:text-4xl tracking-tight mb-10">
          Lo que más nos preguntan
        </h2>

        <SpecialtyFAQ faqs={FAQS} />
      </div>
    </section>
  );
}
