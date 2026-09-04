import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dosa Hut Sunshine Coast | Authentic Indian Flavours",
  description:
    "Authentic South Indian favourites, biryanis, curries, dosas and more at Dosa Hut Sunshine Coast. Order online for pickup or delivery, 5 Lutana Street, Buddina QLD 4575.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream-50 text-ink-900">{children}</body>
    </html>
  );
}
