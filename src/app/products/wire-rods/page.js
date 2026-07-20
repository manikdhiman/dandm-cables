import ProductCard from '@/components/products/ProductCard';

export default function WireRodsPage() {
  const wireRods = [
    { 
      title: "Alloy Rods", 
      slug: "alloy-rods", 
      imageSrc: "/products/alloy-rods.webp", 
      desc: "High mechanical strength aluminium alloy continuous cast rods engineered for high-tensile wire drawing applications." 
    },
    { 
      title: "EC Grade Rods", 
      slug: "ec-grade-rods", 
      imageSrc: "/products/ec-grade-rods.webp", 
      desc: "Electrical Conductor grade high-purity (≥99.5%) aluminium wire rods designed for optimal conductivity." 
    },
  ];

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-24">
      <section className="bg-brand-navy py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,204,0.12),transparent_60%)]" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">CONTINUOUS CASTING RAW MATERIALS</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Aluminium Wire Rods</h1>
          <div className="h-1 w-16 bg-brand-teal mx-auto my-4 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            High-purity continuous cast aluminium wire rods manufactured with strict chemical purity standards.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wireRods.map((item, idx) => (
            <ProductCard 
              key={idx}
              title={item.title}
              category="Continuous Cast Series"
              imageSrc={item.imageSrc}
              slug={`/products/wire-rods/${item.slug}`}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}