import Link from 'next/link';

export default function ProductsPage() {
  const fullCatalog = [
    {
      title: "Aluminium Wire Rods",
      grade: "EC Grade (Electrical Conductor) & Alloy Grades",
      purity: "99.7% minimum aluminium purity content",
      standards: "IS 5484, ASTM B233 specs compliance",
      sizes: "9.5mm, 12.5mm, 15mm options",
      applications: "Wire drawing, overhead conductor manufacturing, cable armoring."
    },
    {
      title: "Overhead Conductors (ACSR / AAC / AAAC)",
      grade: "Aluminium Conductors Steel Reinforced / Alloy configurations",
      purity: "High mechanical tensile strength steel core + EC grade wire strands",
      standards: "IS 398 (Part 1, 2, 4 & 5) Bureau of Indian Standards approved",
      sizes: "Configurations like Squirrel, Weasel, Rabbit, Dog, Panther, Zebra",
      applications: "Primary rural power lines, cross-country transmission grids, high-tension distribution lines."
    },
    {
      title: "Aerial Bunched Cables (AB Cables)",
      grade: "XLPE / PVC Insulated Self-Supporting Overhead Lines",
      purity: "Cross-linked polyethylene weather-resistant carbon shielding insulation",
      standards: "IS 14255 certification certified lines",
      sizes: "Standard multi-core cross sections (e.g., 3x50 + 1x35 mm² etc.)",
      applications: "Anti-theft electricity deployment grids, heavily forested spaces, high-safety municipal networks."
    }
  ];

  return (
    <main className="min-h-screen bg-brand-ice/30 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">TECHNICAL SPECIFICATIONS</span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Our Certified Industrial Catalog
          </h1>
          <p className="text-sm text-brand-gray leading-relaxed">
            Every batch passes strict metallurgical testing and cross-examination to ensure peak electrical conductivity metrics and physical structural durability standards.
          </p>
        </div>

        {/* Detailed Catalog Table Sheets Layout */}
        <div className="space-y-8">
          {fullCatalog.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md shadow-brand-navy/5 flex flex-col justify-between"
            >
              {/* Card Title Header */}
              <div className="border-b border-gray-100 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center gap-3">
                  <span className="text-brand-teal">⚙️</span> {product.title}
                </h2>
                <Link 
                  href="/contact" 
                  className="bg-brand-ice text-brand-teal hover:bg-brand-teal hover:text-white text-xs font-bold px-4 py-2 rounded-xl transition inline-block text-center whitespace-nowrap"
                >
                  Get RFQ for this item
                </Link>
              </div>

              {/* Grid List Matrix of technical specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm mb-6">
                <div className="border-b border-gray-50 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">Material Grade</span>
                  <p className="text-brand-navy font-medium mt-0.5">{product.grade}</p>
                </div>
                <div className="border-b border-gray-50 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">Purity & Formulation</span>
                  <p className="text-brand-navy font-medium mt-0.5">{product.purity}</p>
                </div>
                <div className="border-b border-gray-50 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">Bureau Standards Compliance</span>
                  <p className="text-brand-navy font-semibold text-brand-teal mt-0.5">{product.standards}</p>
                </div>
                <div className="border-b border-gray-50 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">Available Dimensional Sizes</span>
                  <p className="text-brand-navy font-medium mt-0.5">{product.sizes}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">Primary Engineering Applications</span>
                <p className="text-sm text-brand-gray mt-1 leading-relaxed">{product.applications}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}