import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { OrderPlatforms } from "@/components/OrderPlatforms";
import { FoodShowcase } from "@/components/FoodShowcase";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Location } from "@/components/Location";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <TrustStrip />
      <OrderPlatforms />
      <FoodShowcase />
      <Gallery />
      <WhyUs />
      <Location />
      <CtaBanner />
      <Footer />
    </main>
  );
}
