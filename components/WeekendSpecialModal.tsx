"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { CloseIcon } from "./Icons";
import { DISHES, SITE } from "@/lib/site";

// Real menu item — Fri–Sun is also this restaurant's actual longer trading
// window (see HOURS in lib/site.ts), so "weekend only" reflects a real
// pattern rather than an invented promotion. No discount/strikethrough price
// is shown since there is no real weekend discount in the menu data.
const FEATURED_DISH = DISHES.find((d) => d.name === "Chicken Dum Biryani")!;

export function WeekendSpecialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [entered, setEntered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => {
      cancelAnimationFrame(id);
      setEntered(false);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = imageWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -12, y: px * 12 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-md transition-opacity duration-300 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/12 bg-maroon-950 shadow-[0_0_120px_40px_rgba(241,90,39,0.3)] transition-all duration-300"
        style={{
          transform: entered ? "scale(1)" : "scale(0.9)",
          opacity: entered ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close weekend special"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-cream-0 transition-colors hover:bg-black/50"
        >
          <CloseIcon size={16} />
        </button>

        <div className="flex flex-col items-center gap-5 px-7 pt-9 pb-8 text-center">
          <span className="text-xs font-bold tracking-[0.22em] text-peach-400 uppercase">
            Chef&rsquo;s Weekend Secret
          </span>

          <div
            ref={imageWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[220px] w-[220px]"
            style={{ perspective: "800px" }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-full border-2 border-orange-500/40 shadow-[0_25px_45px_-10px_rgba(0,0,0,0.85)] transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <Image
                src={FEATURED_DISH.image!}
                alt={FEATURED_DISH.alt ?? FEATURED_DISH.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>

            <span
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold tracking-[0.14em] text-cream-0 uppercase whitespace-nowrap"
              style={{ animation: "pulse-glow 1.8s ease-in-out infinite" }}
            >
              Limited Portions Only
            </span>
          </div>

          <div className="mt-2 flex flex-col items-center gap-2">
            <h2 className="font-display text-2xl font-semibold text-cream-0">{FEATURED_DISH.name}</h2>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold tracking-wide text-cream-50/90 uppercase">
                Fri &ndash; Sun Only
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold tracking-wide text-cream-50/90 uppercase">
                Chef Special
              </span>
            </div>

            <span className="mt-1 font-display text-3xl font-bold text-orange-400">{FEATURED_DISH.price}</span>
          </div>

          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-full bg-orange-500 px-7 py-4 text-[15px] font-bold tracking-wide text-cream-0 transition-colors hover:bg-orange-600"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[350%]" />
            ORDER ONLINE
          </a>
        </div>
      </div>
    </div>
  );
}
