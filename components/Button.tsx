import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-bold tracking-wide transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-cream-0 border border-orange-500 shadow-[0_12px_28px_-8px_rgba(232,98,44,0.55)] hover:bg-orange-600",
  outline:
    "bg-transparent text-cream-50 border border-cream-50/50 hover:border-cream-50",
  "outline-dark":
    "bg-transparent text-maroon-800 border border-maroon-800/25 hover:border-maroon-800",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-[13.5px]",
  lg: "px-9 py-[18px] text-[15px]",
};

export function Button({
  href,
  variant = "primary",
  size = "lg",
  children,
  className = "",
  external = true,
  full = false,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  external?: boolean;
  full?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${full ? "w-full" : ""} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
