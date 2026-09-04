import Image from "next/image";
import { SITE } from "@/lib/site";

const badgeClasses =
  "flex h-[52px] w-full items-center justify-center rounded-full border border-maroon-800/15 bg-white px-7 shadow-[0_4px_14px_-6px_rgba(58,13,13,0.2)] transition-transform hover:scale-[1.02] sm:w-auto";

export function OrderPlatforms() {
  return (
    <section id="order" className="flex w-full flex-col items-center gap-6 bg-cream-100 px-5 py-12 md:gap-8 md:px-16 md:py-16">
      <div className="flex max-w-[560px] flex-col items-center gap-2 text-center md:gap-3">
        <span className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase md:text-[13px] md:tracking-[0.18em]">
          Order Now
        </span>
        <h2 className="font-display text-[28px] font-semibold text-maroon-800 md:text-[38px]">
          However You&rsquo;d Like It
        </h2>
      </div>

      <div className="flex w-full max-w-[560px] flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
        <a href={SITE.uberEatsUrl} target="_blank" rel="noopener noreferrer" className={badgeClasses}>
          <Image
            src="/images/logo-ubereats.png"
            alt="Order on Uber Eats"
            width={120}
            height={45}
            className="h-[26px] w-auto"
          />
        </a>

        <a href={SITE.doorDashUrl} target="_blank" rel="noopener noreferrer" className={badgeClasses}>
          <Image
            src="/images/logo-doordash.png"
            alt="Order on DoorDash"
            width={120}
            height={45}
            className="h-[26px] w-auto"
          />
        </a>
      </div>
    </section>
  );
}
