import { DeviceIcon, FlameIcon, LeafIcon, UtensilsIcon } from "./Icons";
import { FEATURES } from "@/lib/site";

const ICONS = [LeafIcon, FlameIcon, UtensilsIcon, DeviceIcon];

export function WhyUs() {
  return (
    <section id="why-us" className="flex w-full flex-col items-center gap-9 bg-maroon-900 px-5 py-14 md:gap-16 md:px-16 md:py-[100px]">
      <div className="flex max-w-[600px] flex-col items-center gap-3 text-center md:gap-4">
        <span className="text-xs font-bold tracking-[0.16em] text-peach-400 uppercase md:text-[13px] md:tracking-[0.18em]">
          Why Dosa Hut Sunshine Coast
        </span>
        <h2 className="font-display text-[28px] font-semibold text-cream-0 md:text-[42px]">
          Fresh Ingredients, Honest Flavours
        </h2>
      </div>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {FEATURES.map((feature, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={feature.title}
              className="flex flex-col gap-3.5 rounded-[18px] border border-cream-50/14 bg-cream-50/5 p-6 md:gap-4.5 md:rounded-[20px] md:p-8.5"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] border border-orange-500/40 bg-orange-500/15 md:h-14 md:w-14 md:rounded-2xl">
                <Icon size={22} color="#F2A574" />
              </div>
              <span className="font-display text-lg font-semibold text-cream-0 md:text-xl">
                {feature.title}
              </span>
              <p className="text-sm leading-relaxed text-cream-50/70">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
