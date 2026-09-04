import { Navbar } from "./Navbar";
import { Button } from "./Button";
import { HeroBackground } from "./HeroBackground";
import { ArrowRightIcon, PinIcon } from "./Icons";
import { SITE } from "@/lib/site";

const HERO_SLIDES = [
  {
    src: "/images/hero-food.jpg",
    alt: "A spread of Indian curries, tandoori chicken, naan and rice",
    position: "object-[60%_40%]",
  },
  {
    src: "/images/venue-banquet.jpg",
    alt: "Dosa Hut banquet hall set up for an event",
    position: "object-center",
  },
  {
    src: "/images/gallery-multicuisine.jpg",
    alt: "A spread of multi-cuisine dishes on a wooden table",
    position: "object-center",
  },
  {
    src: "/images/gallery-evening.jpg",
    alt: "Warmly lit restaurant dining area in the evening",
    position: "object-center",
  },
  {
    src: "/images/gallery-lounge.jpg",
    alt: "Relaxed lounge and bar seating area",
    position: "object-center",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative h-[620px] w-full overflow-hidden bg-maroon-900 md:h-[780px]">
      <HeroBackground slides={HERO_SLIDES} />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-maroon-950/70 to-maroon-950/95 md:bg-gradient-to-r md:from-maroon-950/95 md:via-maroon-900/50 md:to-maroon-900/10" />

      <Navbar />

      <div className="absolute inset-x-5 bottom-8 flex flex-col gap-4 md:inset-x-16 md:top-0 md:bottom-0 md:max-w-[640px] md:justify-center md:gap-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rotate-45 bg-orange-500" />
          <span className="text-xs font-bold tracking-[0.16em] text-peach-400 uppercase md:text-[13px] md:tracking-[0.18em]">
            Dosa Hut Sunshine Coast
          </span>
        </div>

        <h1 className="font-display text-[42px] leading-[1.1] font-semibold text-cream-0 md:text-[66px] md:leading-[1.08]">
          Authentic Indian Flavours on the Sunshine Coast
        </h1>

        <p className="max-w-[520px] text-[15px] leading-relaxed text-cream-50/85 md:text-lg">
          Experience delicious South Indian favourites, biryanis, curries, dosas
          and more &mdash; made fresh, served warm, right here in Buddina.
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

        <div className="mt-2 flex items-start gap-2.5 rounded-2xl border border-cream-50/20 bg-cream-50/10 px-4 py-3 md:mt-4 md:w-fit md:items-center">
          <PinIcon size={16} color="#F2A574" className="mt-0.5 shrink-0 md:mt-0" />
          <span className="min-w-0 text-[13px] leading-snug text-cream-50/90 md:text-sm">
            <span className="font-semibold text-cream-0 md:mr-2">Dosa Hut Sunshine Coast</span>
            <span className="hidden md:inline">·</span>{" "}
            {SITE.addressFull}
          </span>
        </div>
      </div>
    </section>
  );
}
