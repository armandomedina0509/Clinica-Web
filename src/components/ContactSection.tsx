"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";
import { SPECIALTIES } from "@/lib/site-data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-pine-light/40">
      <div className="container-content grid lg:grid-cols-[1fr_0.85fr] gap-12">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-paper rounded-2xl border border-line p-7 md:p-10"
        >
          <p className="eyebrow text-pine mb-3">Solicitar cita</p>
          <h2 className="font-display text-ink text-3xl tracking-tight mb-8">
            Cuéntanos qué necesitas
          </h2>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" name="nombre" required autoComplete="name" />
            <Field
              label="Teléfono"
              name="telefono"
              type="tel"
              required
              autoComplete="tel"
            />
            <Field
              label="Correo"
              name="correo"
              type="email"
              required
              autoComplete="email"
              className="sm:col-span-2"
            />

            <label className="flex flex-col gap-1.5 text-sm font-body text-ink sm:col-span-2">
              Especialidad requerida
              <select
                name="especialidad"
                required
                defaultValue=""
                className="border border-line rounded-lg px-4 py-3 bg-paper focus-ring"
              >
                <option value="" disabled>
                  Selecciona una especialidad
                </option>
                {SPECIALTIES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="No estoy seguro/a">No estoy seguro/a</option>
              </select>
            </label>

            <Field
              label="Fecha preferida"
              name="fecha"
              type="date"
              className="sm:col-span-2"
            />

            <label className="flex flex-col gap-1.5 text-sm font-body text-ink sm:col-span-2">
              Mensaje
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos brevemente el motivo de tu consulta"
                className="border border-line rounded-lg px-4 py-3 bg-paper focus-ring resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="sm:col-span-2 mt-2 inline-flex justify-center items-center rounded-full bg-ink text-paper px-7 py-3.5 font-body font-medium hover:bg-ink-light transition-colors focus-ring disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {status === "success" && (
              <p className="sm:col-span-2 text-pine text-sm font-body">
                Solicitud enviada. Te contactaremos en menos de 24 horas hábiles.
              </p>
            )}
            {status === "error" && (
              <p className="sm:col-span-2 text-red-600 text-sm font-body">
                No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}
          </form>
        </motion.div>

        {/* Información de contacto + mapa */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-ink text-paper rounded-2xl p-7 md:p-8">
            <p className="eyebrow text-pine-light mb-5">Información de contacto</p>
            <dl className="space-y-4 font-body text-sm">
              <Info label="Teléfono" value={SITE.phone} href={SITE.phoneHref} />
              <Info label="WhatsApp" value={SITE.whatsapp} href={SITE.whatsappHref} />
              <Info label="Correo" value={SITE.email} href={`mailto:${SITE.email}`} />
              <Info label="Dirección" value={SITE.address} />
              <div>
                <dt className="text-paper/60 mb-1">Horarios</dt>
                <dd className="space-y-0.5">
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-paper/80">{h.time}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl overflow-hidden border border-line h-64 md:flex-1">
            <iframe
              title="Ubicación de la clínica en Google Maps"
              src={SITE.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-body text-ink ${className}`}>
      {label}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="border border-line rounded-lg px-4 py-3 bg-paper focus-ring"
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="text-paper/60 mb-0.5">{label}</dt>
      <dd>
        {href ? (
          <a href={href} className="hover:text-pine-light transition-colors focus-ring">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
