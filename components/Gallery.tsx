import Image from "next/image";
import { GALLERY } from "@/lib/site";

// Desktop bento layout: big tile left (rows 1-2), two small tiles top right,
// one wide tile bottom right.
const desktopSpan = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

const mobileHeight = ["h-[220px]", "h-[150px]", "h-[150px]", "h-[180px]"];

export function Gallery() {
  return (
    <section className="flex w-full flex-col items-center gap-6 px-5 pb-10 md:gap-9 md:px-16 md:pb-16">
      <div className="flex max-w-[620px] flex-col items-center gap-3 text-center md:gap-4">
        <span className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase md:text-[13px] md:tracking-[0.18em]">
          The Experience
        </span>
        <h2 className="font-display text-[30px] font-semibold text-maroon-800 md:text-[44px]">
          More Than Just a Meal
        </h2>
        <p className="text-sm leading-relaxed text-ink-600 md:text-base">
          Cosy evenings, easy weekend lunches and a menu that goes well beyond
          the dosa.
        </p>
      </div>

      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-4 md:h-[560px] md:grid-cols-4 md:grid-rows-2 md:gap-5">
        {GALLERY.map((item, i) => (
          <div
            key={item.label}
            className={`relative overflow-hidden rounded-[20px] shadow-[0_16px_30px_-18px_rgba(58,13,13,0.3)] md:rounded-[22px] ${desktopSpan[i]} ${
              i === 0 || i === 3 ? "col-span-2" : ""
            } ${mobileHeight[i]} md:h-auto`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 to-transparent" />
            <span className="absolute bottom-3 left-3.5 text-[10.5px] font-bold tracking-[0.04em] text-cream-0 uppercase md:bottom-5 md:left-6 md:text-[13px] md:tracking-[0.06em]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
