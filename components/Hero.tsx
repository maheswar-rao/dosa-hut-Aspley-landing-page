import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon, PinIcon } from "./Icons";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative h-[660px] w-full overflow-hidden bg-maroon-900 md:h-[780px]">
      <Image
        src="/images/hero-food.jpg"
        alt="A spread of Indian curries, tandoori chicken, naan and rice"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/75 via-maroon-950/55 to-maroon-950/85" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[880px] flex-col items-center justify-center gap-5 px-6 text-center md:gap-7">
        <span className="inline-flex items-center rounded-full border border-cream-50/30 bg-cream-50/10 px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-peach-400 uppercase backdrop-blur-sm md:px-5 md:text-[13px] md:tracking-[0.18em]">
          Sunshine Coast
        </span>

        <h1 className="font-sans text-[22px] leading-[1.08] font-extrabold tracking-tight whitespace-nowrap text-cream-0 uppercase sm:text-[30px] md:text-[60px]">
          Come Hungry. Leave Happy.
        </h1>

        <p className="max-w-[560px] text-[15px] leading-relaxed text-cream-50/85 md:text-lg">
          Nearly two decades of passion, flavour, and excellence &mdash; over 90
          dosa varieties alongside biryanis, tandoori grills, curries, and
          street-side chaat, made fresh and served warm right here in Buddina.
        </p>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-2">
          <Button href={SITE.orderUrl} full className="sm:w-auto">
            ORDER ONLINE
            <ArrowRightIcon />
          </Button>
          <Button href="#menu" variant="outline" external={false} full className="sm:w-auto">
            VIEW MENU
          </Button>
        </div>

        <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-cream-50/20 bg-cream-50/10 px-4 py-3 md:mt-4 md:w-fit">
          <PinIcon size={16} color="#F2A574" className="shrink-0" />
          <span className="min-w-0 text-left text-[13px] leading-snug text-cream-50/90 md:text-sm">
            <span className="font-semibold text-cream-0 md:mr-2">Dosa Hut Sunshine Coast</span>
            <span className="hidden md:inline">·</span>{" "}
            {SITE.addressFull}
          </span>
        </div>
      </div>
    </section>
  );
}
