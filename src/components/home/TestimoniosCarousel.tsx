import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

// debe coincidir con los anchos de slide (w-[...]) usados en
// TestimoniosPreview.astro para cada breakpoint
const MOBILE = { perPage: 1, slideWidth: 85 };
const DESKTOP = { perPage: 3, slideWidth: 28 };
const DESKTOP_QUERY = "(min-width: 768px)";

interface Props {
  total: number;
  children?: ComponentChildren;
}

export default function TestimoniosCarousel({ total, children }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const { perPage, slideWidth } = isDesktop ? DESKTOP : MOBILE;
  const pageCount = Math.ceil(total / perPage);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goPage = (p: number) =>
    setPage(((p % pageCount) + pageCount) % pageCount);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) goPage(page + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPage(page - 1);
    if (e.key === "ArrowRight") goPage(page + 1);
  };

  return (
    <div class="relative" onKeyDown={onKeyDown} tabIndex={0}>
      <p class="sr-only" aria-live="polite">
        Página {page + 1} de {pageCount}
      </p>

      <div
        class="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * perPage * slideWidth}%)` }}
        >
          {children}
        </div>
      </div>

      <div class="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goPage(i)}
            aria-label={`Ir a la página ${i + 1}`}
            class={`h-2.5 rounded-full transition-all duration-300 ${
              i === page ? "bg-love w-6" : "bg-ink/20 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
