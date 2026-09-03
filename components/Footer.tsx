import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./Icons";
import { SITE } from "@/lib/site";

const EXPLORE_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#why-us" },
  { label: "Gallery", href: "#why-us" },
  { label: "Careers", href: SITE.mainSiteUrl },
];

const SOCIALS = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-10 bg-maroon-950 px-5 pt-12 pb-7 md:gap-14 md:px-16 md:pt-20 md:pb-9">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-9 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
        <div className="flex flex-col gap-4 md:gap-5">
          <Image
            src="/images/logo.png"
            alt="Dosa Hut logo"
            width={280}
            height={117}
            className="h-11 w-auto self-start md:h-[50px]"
          />
          <p className="max-w-[280px] text-sm leading-relaxed text-cream-50/60">
            Authentic South Indian &amp; multi-cuisine favourites, freshly made
            for Aspley.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/30 text-cream-50 hover:border-cream-50"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-3.5">
          <span className="text-[13px] font-bold tracking-[0.1em] text-cream-50/40 uppercase">
            Explore
          </span>
          {EXPLORE_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-col gap-3.5">
          <span className="text-[13px] font-bold tracking-[0.1em] text-cream-50/40 uppercase">
            Order
          </span>
          <a href={SITE.orderUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
            Order Online
          </a>
          <a href={SITE.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
            Catering
          </a>
          <a href={SITE.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
            Feedback
          </a>
        </nav>

        <nav className="flex flex-col gap-3.5">
          <span className="text-[13px] font-bold tracking-[0.1em] text-cream-50/40 uppercase">
            Visit
          </span>
          <span className="text-sm font-medium text-cream-50/70">
            {SITE.addressLine1},
            <br />
            {SITE.addressLine2}
          </span>
          <a href={SITE.phoneHref} className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cream-50/70 hover:text-cream-50">
            Get Directions
          </a>
        </nav>
      </div>

      <div className="mx-auto h-px w-full max-w-[1200px] bg-cream-50/10" />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="text-[13px] text-cream-50/45">
          &copy; {new Date().getFullYear()} Dosa Hut Multi Cuisine Restaurant. All rights reserved.
        </span>
        <div className="flex justify-center gap-7 md:justify-start">
          <a href={SITE.mainSiteUrl} className="text-[13px] font-medium text-cream-50/70 hover:text-cream-50">
            Privacy
          </a>
          <a href={SITE.mainSiteUrl} className="text-[13px] font-medium text-cream-50/70 hover:text-cream-50">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
