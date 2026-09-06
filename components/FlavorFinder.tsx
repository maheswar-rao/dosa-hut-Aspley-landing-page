"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { categorySlug, DISHES, SITE, type Dish } from "@/lib/site";

type CategoryKey = "Dosas" | "Biryanis" | "Curries";

type DishTag = {
  spice: string;
  diet: string;
  isVeg: boolean;
};

type Step = {
  label: string;
  options: string[];
};

type CategoryConfig = {
  tabLabel: string;
  discoverHeading: string; // dynamic sub-title shown while this tab is active
  dishCategories: string[]; // real categories from lib/site.ts to pull dishes from
  steps: [Step, Step]; // exactly 2 questions: spice, then diet
  vegDietLabel: string; // whichever diet option means "vegetarian" for this category
  tags: Record<string, DishTag>; // keyed by real dish name
};

// Every tag below is a best-effort characterisation of a real, already-priced
// and photographed menu item (see lib/site.ts) — no dish, price, or image is
// invented here, only which quiz bucket each real dish falls into, and
// isVeg is the strict, factual dietary classification used to guarantee a
// vegetarian selection never surfaces a meat dish.
const CATEGORIES: Record<CategoryKey, CategoryConfig> = {
  Dosas: {
    tabLabel: "Dosas",
    discoverHeading: "Discover Your Perfect Dosa",
    dishCategories: ["Dosa"],
    steps: [
      { label: "Spice Level", options: ["Mild", "Medium", "Spicy"] },
      { label: "Diet", options: ["Vegetarian", "Non-Veg / Meat"] },
    ],
    vegDietLabel: "Vegetarian",
    tags: {
      "Masala Dosa": { spice: "Mild", diet: "Vegetarian", isVeg: true },
      "Onion Dosa": { spice: "Mild", diet: "Vegetarian", isVeg: true },
      "Paneer Dosa": { spice: "Mild", diet: "Vegetarian", isVeg: true },
    },
  },
  Biryanis: {
    tabLabel: "Biryanis",
    discoverHeading: "Discover Your Perfect Biryani",
    dishCategories: ["Biryani & More"],
    steps: [
      { label: "Flavor Profile", options: ["Mild Aromatic", "Extra Spicy & Rich"] },
      { label: "Diet", options: ["Pure Veg / Paneer", "Chicken / Mutton"] },
    ],
    vegDietLabel: "Pure Veg / Paneer",
    tags: {
      "Vegetarian Dum Biryani": { spice: "Mild Aromatic", diet: "Pure Veg / Paneer", isVeg: true },
      "Chicken Dum Biryani": { spice: "Mild Aromatic", diet: "Chicken / Mutton", isVeg: false },
      "Chicken 65 Biryani": { spice: "Extra Spicy & Rich", diet: "Chicken / Mutton", isVeg: false },
    },
  },
  Curries: {
    tabLabel: "Curries",
    discoverHeading: "Discover Your Perfect Curry",
    dishCategories: ["Vegetarian Curries", "Chicken Curries", "Goat & Lamb Curry"],
    steps: [
      { label: "Heat Level", options: ["Mild", "Medium", "Hot"] },
      { label: "Diet", options: ["Vegetarian", "Chicken / Lamb / Goat"] },
    ],
    vegDietLabel: "Vegetarian",
    tags: {
      "Paneer Butter Masala": { spice: "Mild", diet: "Vegetarian", isVeg: true },
      "Butter Chicken": { spice: "Mild", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Chicken Tikka Masala": { spice: "Medium", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Chicken Madras": { spice: "Hot", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Goat Curry": { spice: "Hot", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Goat Karahi": { spice: "Hot", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Lamb Rogan Josh": { spice: "Hot", diet: "Chicken / Lamb / Goat", isVeg: false },
      "Dal Makhani": { spice: "Mild", diet: "Vegetarian", isVeg: true },
      "Palak Paneer": { spice: "Medium", diet: "Vegetarian", isVeg: true },
    },
  },
};

const TAB_ORDER: CategoryKey[] = ["Dosas", "Biryanis", "Curries"];

function dishesForCategory(config: CategoryConfig): Dish[] {
  return DISHES.filter((d) => config.dishCategories.includes(d.category) && config.tags[d.name]);
}

// Graceful fallback so a real recommendation always appears, even for
// combinations the actual menu doesn't have an exact match for (e.g. this
// menu has no non-vegetarian dosa) — it never invents a dish, it just widens
// the match instead of returning nothing.
//
// Critically: when the user asks for Vegetarian, the pool is filtered to
// isVeg dishes BEFORE any fallback tier runs, so no widening step can ever
// hand back a meat dish to a vegetarian selection. The reverse (a non-veg
// seeker occasionally seeing a veg dish, only when the menu truly has no
// matching meat option in that category) is the one allowed asymmetry.
function findMatches(config: CategoryConfig, spice: string, diet: string): Dish[] {
  const wantsVeg = diet === config.vegDietLabel;
  const pool = dishesForCategory(config).filter((d) => !wantsVeg || config.tags[d.name].isVeg);

  const exact = pool.filter((d) => {
    const t = config.tags[d.name];
    return t.spice === spice && t.diet === diet;
  });
  if (exact.length >= 2) return exact.slice(0, 2);

  const dietOnly = pool.filter((d) => config.tags[d.name].diet === diet);
  if (dietOnly.length >= 2) return dietOnly.slice(0, 2);

  return pool.slice(0, 2);
}

export function FlavorFinder() {
  const [category, setCategory] = useState<CategoryKey>("Dosas");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const config = CATEGORIES[category];

  function switchCategory(key: CategoryKey) {
    setCategory(key);
    setStep(0);
    setAnswers([]);
  }

  function pick(value: string) {
    setAnswers((prev) => [...prev, value]);
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  const results = useMemo(() => {
    if (answers.length < 2) return null;
    return findMatches(config, answers[0], answers[1]);
  }, [config, answers]);

  const done = step >= 2 && results;
  const wantsVeg = answers[1] === config.vegDietLabel;
  const crossedToVeg = done && !wantsVeg && results!.some((d) => config.tags[d.name].isVeg);

  return (
    <section className="flex w-full flex-col items-center gap-6 bg-cream-50 px-5 py-10 md:gap-10 md:px-16 md:py-16">
      <div className="flex max-w-[620px] flex-col items-center gap-3 text-center md:gap-4">
        <h2 className="font-display text-[28px] font-semibold text-maroon-800 md:text-[42px]">
          Craving Finder
        </h2>
        <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase md:text-base">
          Answer 2 Questions, Get Your Perfect Meal
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        {TAB_ORDER.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => switchCategory(key)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition-colors ${
              category === key
                ? "border-orange-500 bg-orange-500 text-cream-0"
                : "border-maroon-800/20 bg-cream-0 text-maroon-700 hover:border-maroon-800/40"
            }`}
          >
            {CATEGORIES[key].tabLabel}
          </button>
        ))}
      </div>

      <span className="font-display text-xl font-semibold text-maroon-900 md:text-2xl">
        {config.discoverHeading}
      </span>

      <div className="flex w-full max-w-[720px] flex-col items-center gap-6 rounded-[22px] border border-maroon-800/10 bg-cream-0 p-6 shadow-[0_18px_36px_-24px_rgba(58,13,13,0.3)] md:p-10">
        {!done && (
          <>
            <div className="flex items-center gap-2">
              {config.steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    i <= step ? "bg-orange-500" : "bg-maroon-800/10"
                  }`}
                />
              ))}
            </div>

            <span className="font-display text-xl font-semibold text-maroon-900 md:text-2xl">
              {config.steps[step].label}
            </span>

            <div className="flex w-full flex-wrap items-center justify-center gap-3">
              {config.steps[step].options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => pick(option)}
                  className="rounded-full border border-maroon-800/20 bg-cream-50 px-6 py-3 text-sm font-bold tracking-wide text-maroon-700 uppercase transition-colors hover:border-orange-500 hover:text-orange-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {done && results && (
          <>
            <span className="font-display text-xl font-semibold text-maroon-900 md:text-2xl">
              Perfect Picks For You
            </span>

            {crossedToVeg && (
              <p className="-mt-3 text-center text-[13px] text-ink-600 italic">
                We don&rsquo;t have a matching {answers[1]?.toLowerCase()} option here &mdash; here are our
                closest picks instead.
              </p>
            )}

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
              {results.map((dish) => {
                const tag = config.tags[dish.name];
                return (
                  <div
                    key={dish.name}
                    className="flex h-full flex-col gap-3 overflow-hidden rounded-[18px] border border-maroon-800/10 bg-cream-50"
                  >
                    <div className="relative h-[160px] w-full shrink-0">
                      {dish.image ? (
                        <Image
                          src={dish.image}
                          alt={dish.alt ?? dish.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 340px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-maroon-800">
                          <span className="font-display px-4 text-center text-lg font-semibold text-cream-50/90">
                            {dish.name}
                          </span>
                        </div>
                      )}
                      <span
                        className={`absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase shadow-sm ${
                          tag.isVeg ? "bg-cream-0 text-green-700" : "bg-cream-0 text-maroon-800"
                        }`}
                      >
                        <span
                          className={`h-[7px] w-[7px] rounded-full border ${
                            tag.isVeg ? "border-green-700 bg-green-700" : "border-maroon-800 bg-maroon-800"
                          }`}
                        />
                        {tag.isVeg ? "Veg" : "Non-Veg"}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4">
                      <div className="flex flex-1 flex-col gap-1.5">
                        <span className="text-[11px] font-bold tracking-[0.14em] text-orange-500 uppercase">
                          {dish.category}
                        </span>
                        <span className="font-display text-lg font-semibold text-maroon-900">{dish.name}</span>
                        <p className="line-clamp-2 min-h-[36px] text-[13px] leading-snug text-ink-600">
                          {dish.alt ?? ""}
                        </p>
                        <span className="text-[11px] font-semibold text-ink-600">
                          {tag.spice} &middot; {tag.diet}
                        </span>
                        <span className="text-base font-bold text-maroon-800">{dish.price}</span>
                      </div>
                      <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
                        <Button
                          href={SITE.orderUrl}
                          size="md"
                          full
                          className="sm:flex-1 !gap-1.5 !px-3 !py-2.5 !text-[12.5px] whitespace-nowrap"
                        >
                          ORDER THIS
                          <ArrowRightIcon size={13} />
                        </Button>
                        <a
                          href={`#menu-${categorySlug(dish.category)}`}
                          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-maroon-800/25 px-3 py-2.5 text-[12.5px] font-bold tracking-wide text-maroon-800 transition-colors hover:border-maroon-800 sm:flex-1"
                        >
                          VIEW IN MENU
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={reset}
              className="text-sm font-bold tracking-wide text-maroon-700 underline underline-offset-4 hover:text-orange-500"
            >
              Start Over
            </button>
          </>
        )}
      </div>
    </section>
  );
}
