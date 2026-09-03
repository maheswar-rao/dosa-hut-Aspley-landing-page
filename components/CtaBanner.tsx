import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative flex w-full flex-col items-center gap-5 overflow-hidden bg-maroon-800 px-6 py-16 text-center md:gap-7 md:py-[100px]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[260px] w-[400px] -translate-x-1/2 rounded-full bg-orange-500/35 blur-3xl md:-top-36 md:h-[400px] md:w-[640px]" />

      <span className="relative text-xs font-bold tracking-[0.16em] text-peach-400 uppercase md:text-[13px] md:tracking-[0.18em]">
        Hungry Yet?
      </span>
      <h2 className="relative font-display text-[34px] font-semibold text-cream-0 md:text-[52px]">
        Craving Dosa Hut?
      </h2>
      <p className="relative max-w-[480px] text-sm text-cream-50/80 md:text-[17px]">
        Order your favourite Indian dishes from Dosa Hut Aspley today &mdash;
        ready for pickup or delivered to your door.
      </p>
      <Button href={SITE.orderUrl} size="lg" className="relative mt-2 px-11! py-5!">
        ORDER ONLINE
        <ArrowRightIcon size={17} />
      </Button>
    </section>
  );
}
