import Link from 'next/link';

export default function ProductsGrid() {
  const categories = [
    {
      title: "Aluminium Wire Rods",
      desc: "High-purity EC grade and Alloy rods manufactured for optimal conductivity and drawing applications.",
      icon: "⭕",
      specs: ["EC Grade (99.7%)", "Alloy 6201 / 1350", "9.5mm / 12mm diameters"]
    },
    {
      title: "Overhead Conductors",
      desc: "ACSR, AAC, and AAAC configurations engineered to withstand high mechanical tension and environmental stress.",
      icon: "⚡",
      specs: ["ACSR (Rabbit/Dog/Panther)", "All Aluminium Alloy (AAAC)", "IS-398 Certified"]
    },
    {
      title: "Power & AB Cables",
      desc: "Aerial Bunched Cables and XLPE insulated low voltage lines designed for safe, anti-theft power distribution.",
      icon: "🔌",
      specs: ["XLPE / PVC Insulation", "Anti-Theft AB Designs", "Industrial & Rural Grids"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-2">WHAT WE MANUFACTURE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Engineering Solutions that <br />Drive <span className="text-brand-teal">Real Performance</span>
          </h2>
        </div>
        <Link href="/products" className="text-sm font-bold text-brand-teal hover:text-brand-navy transition flex items-center gap-2 group whitespace-nowrap">
          View Full Catalog <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-teal/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-ice flex items-center justify-center text-xl mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed mb-6">{item.desc}</p>
              
              {/* Core Spec Pill Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="text-xs font-medium bg-brand-ice/70 text-brand-navy/80 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <Link href={`/products`} className="text-xs font-bold uppercase tracking-wider text-brand-teal group-hover:text-brand-navy transition mt-auto block">
              Technical Specifications →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}