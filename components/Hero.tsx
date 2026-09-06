"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { DISHES, SITE, type Dish } from "@/lib/site";

const PLANET_NAMES = [
  "Masala Dosa",
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

const ROTATION_MS = 60000;
const DISH_SIZE = 128;

// Medium Ellipse Radius
const ORBIT_RADIUS_X = 550; 
const ORBIT_RADIUS_Y = 200;

function useOrbitEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    function update() {
      setEnabled(window.innerWidth >= 1300);
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

  const handleMouseEnter = (dish: Dish) => {
    setPaused(true);
    setActive(dish);
  };

  const handleMouseLeave = () => {
    setPaused(false);
    setActive(null);
  };

  return (
    <section
      id="top"
      className="relative flex h-[660px] w-full flex-col items-center justify-center overflow-hidden bg-cream-50 md:h-[780px]"
    >
      {/* Light premium radial gradient — replaces the busy food-photo collage */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, #FFF7F4 0%, #F9ECE4 55%, #F2DDD0 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,90,39,0.12),transparent_60%)]" />

      {/* Orbiting Dishes */}
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
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                onMouseEnter={() => handleMouseEnter(dish)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Shadow */}
                <div
                  aria-hidden
                  className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ease-out"
                  style={{
                    bottom: isActive ? -20 : -16,
                    width: isActive ? 120 : 96,
                    height: isActive ? 20 : 16,
                    background:
                      "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)",
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
                  className={`relative block overflow-hidden rounded-full border-2 border-maroon-800/15 shadow-[0_10px_24px_-8px_rgba(58,13,13,0.35)] transition-all duration-300 ease-out ${
                    isActive
                      ? "scale-125 border-orange-500 drop-shadow-2xl"
                      : "scale-100"
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

      {/* Main Center Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center gap-4 px-4 text-center">
        {/* Slightly Larger Tagline */}
        <h1 className="font-heading text-base font-bold tracking-tight text-maroon-900 uppercase sm:text-xl md:text-[35px] whitespace-nowrap">
          India, Served with a Sunshine Coast Soul.
        </h1>

        {/* Description Text */}
        <p className="max-w-[500px] text-xs leading-relaxed text-ink-600 sm:text-sm md:text-base">
          Where coastal relaxation meets authentic Indian heat. Sizzling
          tandoori grills, rich slow-cooked curries, street-side chaats, and
          iconic crispy dosas &mdash; crafted fresh right here in Buddina.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={SITE.orderUrl} full className="sm:w-auto">
            ORDER ONLINE
            <ArrowRightIcon />
          </Button>
          <Button href="#weekend-specials" variant="outline-dark" external={false} full className="sm:w-auto">
            🔥 WEEKEND SPECIAL
          </Button>
        </div>
      </div>
    </section>
  );
}
