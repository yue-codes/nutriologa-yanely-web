import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

interface Enlace {
  href: string;
  texto: string;
}

interface Props {
  enlaces: Enlace[];
  whatsappHref: string;
  currentPath: string;
}

export default function MobileNav({
  enlaces,
  whatsappHref,
  currentPath,
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div class="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={
          open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
        class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          class={`bg-ink h-0.5 w-6 rounded-full transition-transform duration-300 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          class={`bg-ink h-0.5 w-6 rounded-full transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          class={`bg-ink h-0.5 w-6 rounded-full transition-transform duration-300 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {mounted &&
        createPortal(
          <div
            class={`bg-cream fixed inset-x-0 top-20 bottom-0 z-30 transition-opacity duration-300 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!open}
          >
            <nav class="flex h-full flex-col items-center justify-center gap-7">
              {enlaces.map((enlace, i) => (
                <a
                  key={enlace.href}
                  href={enlace.href}
                  tabIndex={open ? 0 : -1}
                  class={`font-heading text-3xl font-semibold transition-all duration-300 ${
                    currentPath === enlace.href
                      ? "text-primary"
                      : "text-ink hover:text-primary"
                  } ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                  style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
                >
                  {enlace.texto}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                class={`bg-love text-cream font-body mt-3 inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:opacity-90 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open
                    ? `${enlaces.length * 60 + 80}ms`
                    : "0ms",
                }}
              >
                Agenda tu cita
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
