import { Button } from "./Button";
import { SITE } from "@/lib/site";

const PLATFORMS = [
  { label: "Order Direct", href: SITE.orderUrl },
  { label: "TapTouch", href: SITE.tapTouchUrl },
  { label: "Uber Eats", href: SITE.uberEatsUrl },
  { label: "DoorDash", href: SITE.doorDashUrl },
];

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

      <div className="grid w-full max-w-[720px] grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center">
        {PLATFORMS.map((platform) => (
          <Button
            key={platform.label}
            href={platform.href}
            variant="outline-dark"
            size="md"
            full
            className="md:w-auto"
          >
            {platform.label.toUpperCase()}
          </Button>
        ))}
      </div>
    </section>
  );
}
