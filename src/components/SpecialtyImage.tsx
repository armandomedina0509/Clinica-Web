"use client";

import { useState } from "react";
import Image from "next/image";

interface SpecialtyImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Muestra la imagen de la especialidad. Si el archivo aún no fue colocado
 * por el usuario en /public/images/especialidades, cae en un fondo con las
 * iniciales en lugar de un ícono de imagen rota.
 */
export default function SpecialtyImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: SpecialtyImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initials = alt
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`flex items-center justify-center bg-pine-light text-pine-dark font-display text-3xl ${className}`}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
