"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./Icons";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <div className="flex items-center justify-between px-5 py-5 md:px-16 md:py-6">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Dosa Hut logo"
            width={280}
            height={117}
            className="h-10 w-auto rounded-md md:h-14"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-11 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-semibold text-cream-50 hover:text-peach-400"
            >
              {link.label}
            </a>
          ))}
          <Button href={SITE.orderUrl} size="md">
            ORDER ONLINE
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/25 bg-cream-50/10 text-cream-50 md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-5 flex flex-col gap-1 rounded-2xl border border-cream-50/15 bg-maroon-950/95 p-4 backdrop-blur-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-cream-50 hover:bg-cream-50/10"
            >
              {link.label}
            </a>
          ))}
          <Button href={SITE.orderUrl} className="mt-2" full>
            ORDER ONLINE
          </Button>
        </div>
      )}
    </div>
  );
}
