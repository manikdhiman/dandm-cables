export default function BrandTrust() {
  // These represent the industrial B2B clients or state boards D&M serves
  const partners = [
    { name: "State Grid Corp", logo: "⚡" },
    { name: "NTPC India", logo: "🔥" },
    { name: "Tata Power", logo: "🔷" },
    { name: "Reliance Infra", logo: "⭕" },
    { name: "L&T Heavy Eng", logo: "🏗️" },
  ];

  return (
    <section className="bg-white border-t border-b border-gray-100 py-10 my-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-widest text-brand-gray uppercase mb-8">
          TRUSTED BY LEADING INDUSTRIAL BRANDS & UTILITY NETWORKS
        </p>
        
        {/* Responsive Flex/Grid Container for Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-70 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 font-bold text-lg text-brand-navy tracking-tight select-none">
              <span className="text-xl">{partner.logo}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}