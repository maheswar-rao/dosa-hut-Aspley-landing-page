"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { categorySlug, DISHES, DISH_CATEGORIES, SITE } from "@/lib/site";

export function FoodShowcase() {
  const [active, setActive] = useState<(typeof DISH_CATEGORIES)[number]>(DISH_CATEGORIES[0]);
  const visibleDishes = DISHES.filter((dish) => dish.category === active);

  useEffect(() => {
    function applyHash() {
      const hash = window.location.hash.replace("#menu-", "");
      const match = DISH_CATEGORIES.find((category) => categorySlug(category) === hash);
      if (match) {
        setActive(match);
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
      }
    }
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="menu" className="flex w-full flex-col items-center gap-6 px-5 py-10 md:gap-9 md:px-16 md:py-16">
      <div className="flex max-w-[620px] flex-col items-center gap-3 text-center md:gap-4">
        <span className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase md:text-[13px] md:tracking-[0.18em]">
          What To Order
        </span>
        <h2 className="font-display text-[34px] font-semibold text-maroon-800 md:text-[46px]">
          Sunshine Coast Favourites
        </h2>
      </div>

      <div className="flex w-full items-center gap-2.5 overflow-x-auto pb-1 md:w-auto md:flex-wrap md:justify-center md:overflow-visible">
        {DISH_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`shrink-0 rounded-full border px-4.5 py-2.5 text-[13px] font-bold whitespace-nowrap transition-colors md:px-6 md:py-3 md:text-sm ${
              category === active
                ? "border-maroon-800 bg-maroon-800 text-cream-50"
                : "border-maroon-800/20 text-maroon-700 hover:border-maroon-800/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {visibleDishes.map((dish) => (
          <div
            key={dish.name}
            className="overflow-hidden rounded-[22px] border border-maroon-800/[0.06] bg-cream-0 shadow-[0_18px_34px_-20px_rgba(58,13,13,0.28)]"
          >
            <div className="relative h-[150px] w-full md:h-[170px]">
              {dish.image ? (
                <Image
                  src={dish.image}
                  alt={dish.alt ?? dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-maroon-800 to-maroon-900">
                  <span className="font-display text-2xl font-semibold text-cream-50/90">
                    {dish.name}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 px-5 pt-4 pb-5">
              <span className="text-[11px] font-bold tracking-[0.14em] text-orange-500 uppercase">
                {dish.category}
              </span>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-xl font-semibold text-ink-900 md:text-[23px]">
                  {dish.name}
                </span>
                <span className="shrink-0 text-base font-bold text-maroon-800 md:text-lg">
                  {dish.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-[1200px] flex-col items-center gap-4 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-[#FBEADD] to-[#F7DFC9] p-5 md:flex-row md:gap-7 md:rounded-[22px] md:px-7.5 md:py-5.5">
        <div className="flex w-full items-center gap-4">
          <div className="relative h-[92px] w-[72px] shrink-0 overflow-hidden rounded-xl shadow-[0_10px_18px_-10px_rgba(58,13,13,0.4)] md:h-[120px] md:w-24">
            <Image
              src="/images/dish-masala-chai.jpg"
              alt="A glass of steaming masala chai"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg font-semibold text-maroon-800 md:text-[22px]">
              Finish With a Cup of Chai
            </span>
            <p className="text-[13px] leading-snug text-ink-600 md:text-[14.5px]">
              Our signature masala chai &mdash; slow-brewed and served hot, the
              way every good meal at Dosa Hut ends.
            </p>
          </div>
        </div>
        <Button href={SITE.orderUrl} variant="outline-dark" size="md" full className="md:w-auto md:shrink-0">
          ORDER ONLINE
        </Button>
      </div>

      <Button href={SITE.menuPdfUrl} variant="outline-dark" size="md" external>
        DOWNLOAD FULL MENU (PDF)
      </Button>
    </section>
  );
}
