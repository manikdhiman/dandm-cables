import Link from 'next/link';

export default function ValueProp() {
  const points = [
    { title: "Client-Centric Approach", desc: "Custom aluminum alloy formulations tailored to client drawing specifications." },
    { title: "Proven Track Record", desc: "Decades of stable supply chain fulfillment for state electricity boards and private enterprises." },
    { title: "Commitment to Excellence", desc: "Rigorous laboratory testing ensuring all products carry genuine ISI and ISO certifications." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text & Trust Points */}
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">ABOUT D&M CABLES</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
            Your Trusted Partner for <br />
            <span className="text-brand-teal">Sustainable Industrial Growth</span>
          </h2>
          <p className="text-base text-brand-gray leading-relaxed">
            At D&M Cables, we combine metallurgical expertise, state-of-the-art continuous casting manufacturing infrastructure, and strict quality control protocols to unlock new efficiencies for electrical transmission networks.
          </p>

          {/* Key Checklist Elements */}
          <div className="space-y-4 pt-2">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">{point.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-gray mt-0.5">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link 
              href="/about" 
              className="bg-brand-teal text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-brand-navy transition duration-300 inline-block shadow-sm"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Frame with Floating Badge */}
        <div className="relative">
          {/* Main Structural Image Box Container */}
          <div className="w-full h-[450px] bg-gradient-to-tr from-brand-navy to-slate-800 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center text-white relative shadow-lg">
            <div className="text-center p-6 space-y-2 opacity-60">
              <span className="text-4xl">🏗️</span>
              <p className="font-semibold text-sm">[Manufacturing Factory Image Placeholder]</p>
            </div>
          </div>

          {/* Floating White Experience Card (Matching the UI design template) */}
          <div className="absolute bottom-6 right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[220px] transform hover:scale-105 transition-transform duration-300">
            <span className="text-3xl sm:text-4xl font-black text-brand-teal block tracking-tight">
              15+
            </span>
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mt-1">
              Years of Experience
            </span>
            <span className="text-[11px] text-brand-gray mt-1 block leading-normal">
              Delivering industrial value and building lasting grid partnerships.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}