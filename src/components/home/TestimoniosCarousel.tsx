import type { ComponentChildren } from "preact";
import { useRef, useState } from "preact/hooks";

interface Props {
  total: number;
  children?: ComponentChildren;
}

export default function TestimoniosCarousel({ total, children }: Props) {
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPage = (p: number) => setPage(((p % total) + total) % total);

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
        Testimonio {page + 1} de {total}
      </p>

      <button
        type="button"
        onClick={() => goPage(page - 1)}
        aria-label="Testimonio anterior"
        class="text-ink/30 hover:text-ink absolute top-10 -left-2 z-10 p-2 transition-colors md:-left-12 md:top-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-6"
          aria-hidden="true"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goPage(page + 1)}
        aria-label="Siguiente testimonio"
        class="text-ink/30 hover:text-ink absolute top-10 -right-2 z-10 p-2 transition-colors md:-right-12 md:top-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-6"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div
        class="overflow-hidden pt-3 -mt-3"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {children}
        </div>
      </div>

      <div class="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goPage(i)}
            aria-label={`Ir al testimonio ${i + 1}`}
            class={`h-2.5 rounded-full transition-all duration-300 ${
              i === page ? "bg-love w-6" : "bg-ink/20 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
