import ProductCard from '@/components/products/ProductCard';

export default function CablesPage() {
  const cables = [
    { 
      title: "LT Aerial Bunched Cable (AB Cable)", 
      slug: "lt-aerial-bunched", 
      imageSrc: "/products/lt-ab-cables.webp", 
      desc: "Insulated power distribution cables designed to prevent power theft and maintain safety across dense urban and rural areas." 
    },
    { 
      title: "LT PVC Power Cables", 
      slug: "lt-pvc-power", 
      imageSrc: "/products/lt-pvc-cables.webp", 
      desc: "Polyvinyl Chloride insulated low-tension cables engineered for industrial power circuits and commercial installations." 
    },
    { 
      title: "LT XLPE Power Cables", 
      slug: "lt-xlpe-power", 
      imageSrc: "/products/lt-xlpe-cables.webp", // Fixed filename here!
      desc: "Cross-linked Polyethylene insulated cables offering superior thermal withstand capacity and high dielectric strength." 
    },
  ];

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-24">
      <section className="bg-brand-navy py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,204,0.12),transparent_60%)]" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">INSULATED POWER LINES</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Power & AB Cables</h1>
          <div className="h-1 w-16 bg-brand-teal mx-auto my-4 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Certified Low Tension power cables engineered for low transmission losses and long operational lifespans.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cables.map((item, idx) => (
            <ProductCard 
              key={idx}
              title={item.title}
              category="Power Cable Series"
              imageSrc={item.imageSrc}
              slug={`/products/cables/${item.slug}`}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}