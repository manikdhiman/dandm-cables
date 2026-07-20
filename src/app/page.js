import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ValueProp from "@/components/sections/ValueProp";
import BrandTrust from "@/components/sections/BrandTrust";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full min-h-screen">
      <Hero />
      <QuickStats />
      <ProductsGrid />
      <ValueProp />
      <BrandTrust />
    </main>
  );
}