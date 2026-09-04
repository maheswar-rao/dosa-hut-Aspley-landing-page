"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon, CloseIcon, MenuIcon } from "./Icons";
import { NAV_LINKS, SITE } from "@/lib/site";

const ORDER_PLATFORMS = [
  { label: "Order Direct", href: SITE.orderUrl, logo: null },
  { label: "Uber Eats", href: SITE.uberEatsUrl, logo: "/images/logo-ubereats.png" },
  { label: "DoorDash", href: SITE.doorDashUrl, logo: "/images/logo-doordash.png" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 w-full bg-maroon-900">
      <div className="flex items-center justify-between px-5 py-4 md:px-16">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Dosa Hut logo"
            width={280}
            height={117}
            className="h-11 w-auto md:h-16"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-[15px] font-semibold tracking-wide text-cream-50 uppercase hover:text-peach-400"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setOrderOpen((v) => !v)}
              className="font-heading inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-[15px] font-semibold tracking-wide text-cream-0 transition-colors hover:bg-orange-600"
            >
              ORDER ONLINE
              <ChevronRightIcon size={13} className={`transition-transform ${orderOpen ? "-rotate-90" : "rotate-90"}`} />
            </button>

            {orderOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close order menu"
                  onClick={() => setOrderOpen(false)}
                  className="fixed inset-0 z-10 cursor-default"
                />
                <div className="absolute top-full right-0 z-20 mt-2 flex w-56 flex-col gap-1 rounded-2xl border border-maroon-800/10 bg-cream-0 p-2.5 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.35)]">
                  {ORDER_PLATFORMS.map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOrderOpen(false)}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-maroon-800 hover:bg-cream-100"
                    >
                      {platform.logo ? (
                        <Image src={platform.logo} alt="" width={80} height={30} className="h-4 w-auto" />
                      ) : (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                      )}
                      {platform.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
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
        <div className="mx-5 mb-4 flex flex-col gap-1 rounded-2xl border border-cream-50/15 bg-maroon-950/95 p-4 backdrop-blur-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading rounded-lg px-3 py-2.5 text-[15px] font-semibold tracking-wide text-cream-50 uppercase hover:bg-cream-50/10"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex flex-col gap-1 rounded-2xl bg-cream-0 p-2">
            <span className="font-heading px-3 pt-1.5 pb-0.5 text-[11px] font-semibold tracking-[0.1em] text-maroon-800/50 uppercase">
              Order Online
            </span>
            {ORDER_PLATFORMS.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-maroon-800 hover:bg-cream-100"
              >
                {platform.logo ? (
                  <Image src={platform.logo} alt="" width={80} height={30} className="h-4 w-auto" />
                ) : (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                )}
                {platform.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
