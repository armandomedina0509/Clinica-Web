import { SITE } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 py-10">
      <div className="container-content flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href={SITE.phoneHref} className="hover:text-paper transition-colors focus-ring">
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-paper transition-colors focus-ring">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
