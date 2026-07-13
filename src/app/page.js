import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ValueProp from "@/components/sections/ValueProp";
import BrandTrust from "@/components/sections/BrandTrust";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-ice/40 pb-20">
      <Hero />
      <QuickStats />
      <ProductsGrid />
      <ValueProp />
      <BrandTrust />
    </main>
  );
}