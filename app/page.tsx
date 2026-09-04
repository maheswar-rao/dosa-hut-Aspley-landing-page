import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FoodShowcase } from "@/components/FoodShowcase";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Catering } from "@/components/Catering";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <FoodShowcase />
      <Gallery />
      <WhyUs />
      <Catering />
      <Location />
      <Footer />
    </main>
  );
}
