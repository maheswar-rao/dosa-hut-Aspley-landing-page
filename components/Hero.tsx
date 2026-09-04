import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon, PinIcon } from "./Icons";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative h-[640px] w-full overflow-hidden bg-maroon-900 md:h-[760px]">
      <Image
        src="/images/hero-food.jpg"
        alt="A spread of Indian curries, tandoori chicken, naan and rice"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-maroon-950/70 to-maroon-950/95 md:bg-gradient-to-r md:from-maroon-950/95 md:via-maroon-900/55 md:to-maroon-900/15" />

      <div className="absolute inset-x-5 bottom-8 flex flex-col gap-4 md:inset-x-16 md:top-0 md:bottom-0 md:max-w-[640px] md:justify-center md:gap-6">
        <h1 className="font-display text-[42px] leading-[1.1] font-semibold text-cream-0 md:text-[64px] md:leading-[1.08]">
          Authentic Indian Flavours on the Sunshine Coast
        </h1>

        <p className="max-w-[540px] text-[15px] leading-relaxed text-cream-50/85 md:text-lg">
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
