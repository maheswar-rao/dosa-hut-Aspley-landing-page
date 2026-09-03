import Image from "next/image";
import { Button } from "./Button";
import { ChevronRightIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import { HOURS, SITE } from "@/lib/site";

export function Location() {
  return (
    <section id="location" className="flex w-full justify-center bg-cream-100 px-5 py-14 md:px-16 md:py-[110px]">
      <div className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-6 md:gap-6.5">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase md:text-[13px] md:tracking-[0.18em]">
              Visit Us
            </span>
            <h2 className="font-display text-[32px] font-semibold text-maroon-800 md:text-[44px]">
              Dosa Hut Aspley
            </h2>
          </div>

          <a
            href={SITE.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 md:gap-3.5"
          >
            <PinIcon size={18} color="#E8622C" className="mt-0.5 shrink-0" />
            <span className="text-[15px] leading-relaxed text-ink-900 md:text-[16.5px]">
              {SITE.addressLine1}, {SITE.addressLine2}
            </span>
          </a>

          <a href={SITE.phoneHref} className="flex items-center gap-2.5 md:gap-3.5">
            <PhoneIcon size={18} color="#E8622C" className="shrink-0" />
            <span className="text-[15px] text-ink-900 md:text-[16.5px]">{SITE.phoneDisplay}</span>
          </a>

          <div className="rounded-2xl border border-maroon-800/10 bg-cream-0 px-5.5 py-5 md:px-6.5">
            <div className="mb-1.5 flex items-center gap-2.5">
              <ClockIcon size={17} color="#3A0D0D" />
              <span className="text-sm font-bold text-maroon-800">Opening Hours</span>
            </div>
            {HOURS.map((row, i) => (
              <div
                key={row.day}
                className={`flex justify-between py-3 text-sm ${
                  i < HOURS.length - 1 ? "border-b border-maroon-800/10" : ""
                }`}
              >
                <span className="text-ink-600">{row.day}</span>
                <span className="font-semibold">{row.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-1 flex flex-col gap-3.5 sm:flex-row sm:items-center md:mt-2">
            <Button href={SITE.directionsUrl} variant="outline-dark" size="md" full className="sm:w-auto">
              GET DIRECTIONS
              <ChevronRightIcon size={15} />
            </Button>
            <Button href={SITE.orderUrl} size="md" full className="sm:w-auto">
              ORDER ONLINE
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] shadow-[0_24px_48px_-24px_rgba(58,13,13,0.35)] md:h-[300px]">
            <Image
              src="/images/venue-banquet.jpg"
              alt="Dosa Hut banquet hall set up for an event"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="relative h-[160px] w-full overflow-hidden rounded-[22px] border border-maroon-800/10 bg-cream-200 md:h-[200px]">
            <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none" className="absolute inset-0">
              <line x1="0" y1="40" x2="500" y2="40" stroke="#DFC8A6" strokeWidth={1.5} />
              <line x1="0" y1="100" x2="500" y2="100" stroke="#DFC8A6" strokeWidth={1.5} />
              <line x1="0" y1="160" x2="500" y2="160" stroke="#DFC8A6" strokeWidth={1.5} />
              <line x1="100" y1="0" x2="100" y2="200" stroke="#DFC8A6" strokeWidth={1.5} />
              <line x1="250" y1="0" x2="250" y2="200" stroke="#DFC8A6" strokeWidth={1.5} />
              <line x1="380" y1="0" x2="380" y2="200" stroke="#DFC8A6" strokeWidth={1.5} />
            </svg>
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-3/5 flex-col items-center gap-1.5">
              <PinIcon size={30} color="#E8622C" />
              <span className="rounded-full bg-cream-0 px-3 py-1 text-[11px] font-bold text-maroon-800 shadow-[0_4px_10px_rgba(58,13,13,0.15)] md:px-3.5 md:py-1.5 md:text-[12.5px]">
                Dosa Hut Aspley
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
