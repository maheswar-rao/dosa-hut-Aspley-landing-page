import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { SITE } from "@/lib/site";

export function Catering() {
  return (
    <section id="catering" className="flex w-full justify-center bg-cream-50 px-5 py-10 md:px-16 md:py-16">
      <div className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center md:gap-5">
        <span className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase md:text-[13px] md:tracking-[0.18em]">
          Catering
        </span>
        <h2 className="font-display text-[30px] font-semibold text-maroon-800 md:text-[44px]">
          Great Food for Your Next Event
        </h2>
        <p className="max-w-[560px] text-sm leading-relaxed text-ink-600 md:text-base">
          From house parties to weddings and corporate events, we bring
          biryanis, butter chicken, dosas, and more &mdash; freshly made,
          never compromising quality for quantity.
        </p>
        <Button href={SITE.cateringUrl} size="md" className="mt-2">
          ENQUIRE ABOUT CATERING
          <ArrowRightIcon size={15} />
        </Button>
      </div>
    </section>
  );
}
