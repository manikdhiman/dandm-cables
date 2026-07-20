import ProductCard from '@/components/products/ProductCard';

export default function ConductorsPage() {
  const conductors = [
    { title: "AA Conductors", slug: "aa-conductors", imageSrc: "/products/aaconductors.webp", desc: "All Aluminium Conductors designed for short span urban distribution lines with high corrosion resistance." },
    { title: "AAAC Conductors", slug: "aaac-conductors", imageSrc: "/products/aaac-conductors.webp", desc: "All Aluminium Alloy Conductors providing higher mechanical strength and conductivity balance for long spans." },
    { title: "ACSR Conductors", slug: "acsr-conductors", imageSrc: "/products/acsr-conductors.webp", desc: "Aluminium Conductor Steel Reinforced lines engineered with steel cores for cross-country transmission grids." },
    { title: "AL-59 Conductors", slug: "al-59-conductors", imageSrc: "/products/AL-59-Conductor.webp", desc: "High-strength alloy conductors offering optimized ampacity and reduced line loss across heavy grid loads." },
    { title: "HTLS Conductors", slug: "htls-conductors", imageSrc: "/products/hlts-conductor.webp", desc: "High-Temperature Low-Sag conductors designed to re-conductor existing transmission lines for high power capacity." },
  ];

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-24">
      <section className="bg-brand-navy py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,204,0.12),transparent_60%)]" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">OVERHEAD LINE ASSETS</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Overhead Conductors</h1>
          <div className="h-1 w-16 bg-brand-teal mx-auto my-4 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            High-tensile aluminium conductors engineered for State Electricity Boards, PGCIL, and turn-key EPC grid projects.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conductors.map((item, idx) => (
            <ProductCard 
              key={idx}
              title={item.title}
              category="Conductor Series"
              imageSrc={item.imageSrc}
              slug={`/products/conductors/${item.slug}`}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}