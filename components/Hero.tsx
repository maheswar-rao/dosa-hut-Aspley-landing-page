"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { DISHES, SITE, type Dish } from "@/lib/site";

// 12 real, photographed dishes spread across all 7 categories for the orbit.
const PLANET_NAMES = [
  "Masala Dosa",
  "Paneer Dosa",
  "Chicken 65 Biryani",
  "Chicken Dum Biryani",
  "Paneer Tikka",
  "Tandoori Chicken (Half)",
  "Paneer Butter Masala",
  "Palak Paneer",
  "Butter Chicken",
  "Chicken Madras",
  "Chilli Chicken",
  "Goat Curry",
];

const PLANETS: Dish[] = PLANET_NAMES.map((name) => DISHES.find((d) => d.name === name)!);

const ROTATION_MS = 60000; // one full 360° orbit every 60s
const DISH_SIZE = 136; // px — the requested 130-140px "medium-large" plate size

// Elliptical orbit — verified via clearance script against the measured
// 560×385px text block AND against dish-to-dish spacing at the new, bigger
// 136px plate size. The requested radius range (460-500 × 230-260) collides
// on both counts at this dish size: dish centers land inside the text
// rectangle at several angles, and adjacent plates overlap each other
// (max ~142px center-to-center gap vs. the 136px needed to not touch).
// 600×300 is the smallest ellipse that clears the text block on every angle
// AND keeps every adjacent pair of 136px plates from overlapping (~170px
// center-to-center gap).
const ORBIT_RADIUS_X = 600;
const ORBIT_RADIUS_Y = 300;

// The orbit ring only fits cleanly at wide desktop widths — the bigger radius
// needed above means a viewport has to be at least ~1400px wide for the ring
// not to clip off the edges of the section, so the enable threshold moved up
// from 1024px. Below that it's hidden in favour of the plain text hero.
function useOrbitEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    function update() {
      setEnabled(window.innerWidth >= 1400);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return enabled;
}

export function Hero() {
  const orbitEnabled = useOrbitEnabled();
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<Dish | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    if (!orbitEnabled) return;
    function tick(ts: number) {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;
      if (!paused) {
        setAngle((a) => (a + (dt / ROTATION_MS) * 360) % 360);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, orbitEnabled]);

  return (
    <section
      id="top"
      className="relative flex h-[660px] w-full flex-col items-center justify-center overflow-hidden bg-cream-50 md:h-[780px]"
    >
      {/* Experimental background photo — low opacity so it reads as texture,
          not a competing image, behind the text and orbiting dishes. Easy to
          remove (just this one block) if it doesn't work out. */}
      <Image
        src="/images/hero-food.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.24]"
      />
      <div className="pointer-events-none absolute inset-0 bg-maroon-100/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,90,39,0.12),transparent_60%)]" />

      {/* Orbit ring — desktop only, see useOrbitEnabled for why */}
      {orbitEnabled && (
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          {PLANETS.map((dish, i) => {
            const baseDeg = (360 / PLANETS.length) * i;
            const deg = ((baseDeg + angle) * Math.PI) / 180;
            const x = ORBIT_RADIUS_X * Math.cos(deg);
            const y = ORBIT_RADIUS_Y * Math.sin(deg);
            const isActive = active?.name === dish.name;

            return (
              <div
                key={dish.name}
                className="pointer-events-auto absolute top-1/2 left-1/2"
                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                onMouseEnter={() => {
                  setPaused(true);
                  setActive(dish);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setActive(null);
                }}
              >
                {/* Ground shadow — nested inside the same orbiting wrapper so
                    it tracks the dish through the rotation; expands and
                    darkens on hover alongside the dish's own scale-up. */}
                <div
                  aria-hidden
                  className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-500 ease-out"
                  style={{
                    bottom: isActive ? -20 : -16,
                    width: isActive ? 128 : 104,
                    height: isActive ? 20 : 16,
                    background: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)",
                    opacity: isActive ? 1 : 0.7,
                    filter: "blur(5px)",
                  }}
                />

                <a
                  href={SITE.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order ${dish.name} online`}
                  style={{ height: DISH_SIZE, width: DISH_SIZE }}
                  className={`relative block overflow-hidden rounded-full border-2 border-maroon-800/15 shadow-[0_10px_24px_-8px_rgba(58,13,13,0.35)] transition-all duration-500 ease-out ${
                    isActive ? "scale-[1.3] border-orange-500 drop-shadow-2xl" : "scale-100"
                  }`}
                >
                  {dish.image ? (
                    <Image
                      src={dish.image}
                      alt={dish.alt ?? dish.name}
                      fill
                      sizes={`${DISH_SIZE}px`}
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-maroon-800">
                      <span className="font-display px-1 text-center text-xs font-semibold text-cream-50/90">
                        {dish.name}
                      </span>
                    </div>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* Sun — fixed center anchor */}
      <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-center gap-4 px-6 text-center md:gap-5">
        <div
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            active ? "h-[30px] opacity-100" : "h-0 opacity-0"
          }`}
        >
          {active && (
            <>
              <span className="text-[10px] font-bold tracking-[0.16em] text-orange-500 uppercase">
                {active.category}
              </span>
              <span className="font-display text-lg font-semibold text-maroon-900">{active.name}</span>
            </>
          )}
        </div>

        <h1 className="font-heading text-[15px] leading-[1.15] font-bold tracking-tight whitespace-nowrap text-maroon-900 uppercase sm:text-[22px] md:text-[42px]">
          India, Served with a Sunshine Coast Soul.
        </h1>

        <p className="max-w-[560px] text-[15px] leading-relaxed text-ink-600 md:text-lg">
          Where coastal relaxation meets authentic Indian heat. Sizzling
          tandoori grills, rich slow-cooked curries, street-side chaats, and
          iconic crispy dosas &mdash; crafted fresh right here in Buddina.
        </p>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-2">
          <Button href={SITE.orderUrl} full className="sm:w-auto">
            ORDER ONLINE
            <ArrowRightIcon />
          </Button>
          <Button href="#menu" variant="outline-dark" external={false} full className="sm:w-auto">
            VIEW MENU
          </Button>
        </div>
      </div>
    </section>
  );
}
