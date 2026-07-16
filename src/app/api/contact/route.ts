import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface AppointmentPayload {
  nombre?: string;
  telefono?: string;
  correo?: string;
  especialidad?: string;
  fecha?: string;
  mensaje?: string;
}

export async function POST(req: NextRequest) {
  let data: AppointmentPayload;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const { nombre, telefono, correo, especialidad, fecha, mensaje } = data;

  if (!nombre || !telefono || !correo || !especialidad) {
    return NextResponse.json({ error: "missing-fields" }, { status: 400 });
  }

  // Si no hay credenciales SMTP configuradas (por ejemplo en desarrollo local),
  // registramos la solicitud en el servidor en lugar de fallar el envío.
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.log("[contact] SMTP no configurado. Solicitud recibida:", data);
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: correo,
      subject: `Nueva solicitud de cita — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Teléfono: ${telefono}`,
        `Correo: ${correo}`,
        `Especialidad requerida: ${especialidad}`,
        `Fecha preferida: ${fecha || "No especificada"}`,
        `Mensaje: ${mensaje || "—"}`,
      ].join("\n"),
      html: `
        <h2>Nueva solicitud de cita</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Especialidad requerida:</strong> ${escapeHtml(especialidad)}</p>
        <p><strong>Fecha preferida:</strong> ${escapeHtml(fecha || "No especificada")}</p>
        <p><strong>Mensaje:</strong><br/>${escapeHtml(mensaje || "—")}</p>
      `,
    });

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("[contact] Error al enviar correo:", err);
    return NextResponse.json({ error: "send-failed" }, { status: 500 });
  }
}

const SITE_NAME = "Clínica Meridiano";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
