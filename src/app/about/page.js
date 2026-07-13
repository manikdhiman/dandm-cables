export default function AboutPage() {
  const milestones = [
    { year: "2005", title: "Foundation", desc: "Commenced trading and distribution operations in metallurgical sectors." },
    { year: "2013", title: "Incorporation", desc: "Officially incorporated as D And M Cables Pvt. Ltd., establishing dedicated manufacturing." },
    { year: "2018", title: "Grid Alignment", desc: "Achieved full vendor registration parameters with major State Electricity Boards." },
    { year: "Present", title: "Scale", desc: "Operating high-output continuous casting manufacturing lines in Sonipat, Haryana." }
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Section 1: Hero Intro split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">OUR CORPORATE ID</span>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Powering Infrastructure <br />With Certified Reliability
            </h1>
            <p className="text-sm text-brand-gray leading-relaxed">
              D And M Cables Private Limited is a premier manufacturing enterprise registered under the Ministry of Corporate Affairs. From our state-of-the-art production lines, we specialize in processing raw aluminum into critical electrical infrastructure components.
            </p>
          </div>
          <div className="bg-brand-ice p-8 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
            <h3 className="font-bold text-brand-navy">Compliance & Verification</h3>
            <ul className="space-y-2.5 text-sm text-brand-gray">
              <li className="flex gap-2 text-xs"><span className="text-brand-teal">✔</span> <strong>CIN:</strong> U31902DL2013PTC255812</li>
              <li className="flex gap-2 text-xs"><span className="text-brand-teal">✔</span> <strong>RoC:</strong> Registered at RoC-Delhi</li>
              <li className="flex gap-2 text-xs"><span className="text-brand-teal">✔</span> <strong>Standards:</strong> Bureau of Indian Standards (BIS) ISI Marked</li>
              <li className="flex gap-2 text-xs"><span className="text-brand-teal">✔</span> <strong>Management:</strong> ISO 9001 Quality System Certified</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Core Corporate Timeline (Matching premium template flow) */}
        <div className="space-y-10">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">Our Strategic Journey</h2>
            <p className="text-xs sm:text-sm text-brand-gray mt-2">A decade of continuous adaptation and manufacturing scaling.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, index) => (
              <div key={index} className="bg-brand-ice/50 border border-gray-100/80 p-6 rounded-2xl hover:shadow-md transition">
                <span className="text-xl sm:text-2xl font-black text-brand-teal block">{item.year}</span>
                <h4 className="font-bold text-brand-navy text-sm sm:text-base mt-2">{item.title}</h4>
                <p className="text-xs text-brand-gray mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Manufacturing Infrastructure Callout */}
        <div className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-lg">
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">PRODUCTION INFRASTRUCTURE</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Strategic Sonipat Plant Location</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our central manufacturing base is strategically positioned at **Village Assawarpur, GT Road, Rai, Sonipat, Haryana**. This facility houses precision continuous casting machine assets, extrusion setups, and heavy-duty wire-drawing lines capable of meeting large-scale public grid tenders and immediate industrial procurement orders.
            </p>
          </div>
          <div className="hidden lg:block absolute right-12 bottom-0 top-0 my-auto h-16 w-16 text-6xl opacity-20 select-none">
            🏭
          </div>
        </div>

      </div>
    </main>
  );
}