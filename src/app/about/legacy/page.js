import Link from "next/link";
import { ArrowRight, Trophy, ShieldCheck, Milestone, Landmark, Quote } from "lucide-react";

export default function LegacyPage() {
  // 👥 The 3-Column Executive Directorate Directory Array
  const executiveTeam = [
    { 
      name: "Mr. M. C. Aggarwal", 
      role: "Chairman & Managing Director", 
      bio: "Founding visionary who established the group's foundational tenets of absolute quality, structural trust, and clear corporate execution in the early 1970s." 
    },
    { 
      name: "Mr. Amit Aggarwal", 
      role: "Director", 
      bio: "Pioneered the corporate shift into heavy industrial manufacturing, establishing the core continuous casting aluminium wire rod lines in 2005." 
    },
    { 
      name: "Mr. Tushar Gupta", 
      role: "Director", 
      bio: "Grandson of the founder; expanded operations into Government utility grids, Low Tension (LT) power cables, and certified overhead conductors." 
    }
  ];

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-32">
      
      {/* 🏛️ Section 1: Editorial Header Block */}
      <section className="relative bg-brand-navy pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,204,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-brand-ice/20 to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-4 py-1.5 rounded-full inline-block border border-brand-teal/20">
            CHRONOLOGICAL TIMELINE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Introduction of Legacy
          </h1>
          <div className="h-1 w-20 bg-brand-teal mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Review the historical progression of our group from its early commercial roots into a state-of-the-art multi-generational manufacturing asset ecosystem powering national utility grids.
          </p>
        </div>
      </section>

      {/* 🧭 Section 2: Fixed Non-Overlapping Chronological Track */}
      <div className="max-w-6xl mx-auto px-6 mt-20 relative">
        
        {/* Central visual line that anchors the layout track exclusively on desktop screens */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-teal/40 via-gray-200 to-transparent z-0" />

        {/* Outer Wrapper holds vertical padding breaks cleanly */}
        <div className="space-y-24 relative z-10">

          {/* ==================== CARD ROW 1: 1970s ==================== */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            
            {/* 🎯 Desktop Anchor Center Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-xl items-center justify-center text-brand-navy font-black text-xs z-30 select-none">
              1970
            </div>

            {/* Mobile-Only Badge Header Indicator */}
            <div className="lg:hidden flex w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-md items-center justify-center text-brand-navy font-black text-xs mb-[-12px]">
              1970
            </div>

            {/* Left Frame Side: Image Box Framework */}
            <div className="w-full aspect-[4/3] bg-gradient-to-tr from-brand-ice via-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center p-6 group transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute inset-0 bg-brand-navy/5 opacity-40 mix-blend-multiply" />
              <Landmark className="w-12 h-12 text-brand-navy/30 mb-3 group-hover:scale-110 transition duration-300" />
              <div className="relative z-10 space-y-0.5">
                <p className="font-black text-sm text-brand-navy uppercase tracking-widest">MR. M. C. AGGARWAL</p>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Chairman & Managing Director Portrait</p>
              </div>
            </div>

            {/* Right Frame Side: Safe Text Block Panel Container */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 space-y-4 w-full">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-md tracking-wide">
                  EARLY 1970s
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded">
                  Corporate Genesis
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight leading-tight">
                  The Visionary Genesis & Core Foundations
                </h3>
                <h5 className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  The Entrepreneurial Inception of Our Founder
                </h5>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                The corporate history of our group begins with the inspiring journey of our Chairman & Managing Director, <strong className="text-brand-navy font-semibold">Mr. M. C. Aggarwal</strong>, who entered the competitive world of business in the early 1970s. Starting at a very young age with limited capital but immense strategic drive, he began trading basic food commodities such as namkeen and biscuits on a modest scale. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                What seemed like a humble distributed market setup soon transformed into a remarkable entrepreneurial triumph driven by his unwavering determination, visionary approach, and relentless pursuit of excellence.
              </p>

              <div className="bg-brand-ice/50 border-l-4 border-brand-teal p-4 rounded-r-xl relative mt-4">
                <Quote className="w-8 h-8 text-brand-teal/10 absolute top-2 right-2 rotate-180" />
                <p className="text-xs sm:text-sm font-bold italic text-brand-navy leading-relaxed">
                  "Everywhere lies a business opportunity — one must identify it, plan with clarity, and execute with defined goals."
                </p>
              </div>
            </div>
          </div>

          {/* ==================== CARD ROW 2: 2005 ==================== */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            
            {/* 🎯 Desktop Anchor Center Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-xl items-center justify-center text-brand-navy font-black text-xs z-30 select-none">
              2005
            </div>

            {/* Mobile-Only Badge Header Indicator */}
            <div className="lg:hidden flex w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-md items-center justify-center text-brand-navy font-black text-xs mb-[-12px]">
              2005
            </div>

            {/* Left Frame Side: Text Block Panel (Flipped cleanly for presentation asymmetry) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 space-y-4 w-full lg:order-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-md tracking-wide">
                  YEAR 2005
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">
                  Industrial Pivot
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight leading-tight">
                  Diversification Into Metallurgical Infrastructure
                </h3>
                <h5 className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  Launching the 'D and M' Brand Identity
                </h5>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                After more than three decades of continuous commercial success across standard trading markets, a definitive new chapter began in the year 2005. Backed by the profound wisdom and domain experience of their father, his second-youngest son <strong className="text-brand-navy font-semibold">Mr. Amit Aggarwal</strong> joined the business house as Director. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Equipped with a modern, dynamic industrial outlook, Mr. Amit Aggarwal spearheaded the strategic diversification of the business group into heavy metal operations—specifically high-purity aluminium rod manufacturing under the newly coined brand name <strong className="text-brand-teal font-bold">"D and M"</strong>. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Meanwhile, his youngest son <strong className="text-brand-navy font-semibold">Mr. Manu Aggarwal</strong> embarked on his own highly impactful parallel track, scaling the upstream aluminium ingots manufacturing domain. This turning point rapidly established the group as a highly trusted, reliable industrial hallmark.
              </p>
            </div>

            {/* Right Frame Side: Image Box Framework */}
            <div className="w-full aspect-[4/3] bg-gradient-to-tr from-brand-ice via-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center p-6 group transition-all duration-300 hover:shadow-2xl lg:order-2 relative">
              <div className="absolute inset-0 bg-brand-navy/5 opacity-40 mix-blend-multiply" />
              <Trophy className="w-12 h-12 text-brand-navy/30 mb-3 group-hover:scale-110 transition duration-300" />
              <div className="relative z-10 space-y-0.5">
                <p className="font-black text-sm text-brand-navy uppercase tracking-widest">PRODUCTION COMPLEX</p>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Continuous Casting Line Foundry</p>
              </div>
            </div>
          </div>

          {/* ==================== CARD ROW 3: 2018 ==================== */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            
            {/* 🎯 Desktop Anchor Center Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-xl items-center justify-center text-brand-navy font-black text-xs z-30 select-none">
              2018
            </div>

            {/* Mobile-Only Badge Header Indicator */}
            <div className="lg:hidden flex w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-md items-center justify-center text-brand-navy font-black text-xs mb-[-12px]">
              2018
            </div>

            {/* Left Frame Side: Image Box Framework */}
            <div className="w-full aspect-[4/3] bg-gradient-to-tr from-brand-ice via-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center p-6 group transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute inset-0 bg-brand-navy/5 opacity-40 mix-blend-multiply" />
              <ShieldCheck className="w-12 h-12 text-brand-navy/30 mb-3 group-hover:scale-110 transition duration-300" />
              <div className="relative z-10 space-y-0.5">
                <p className="font-black text-sm text-brand-navy uppercase tracking-widest">GRID ENGINEERING ASSETS</p>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Low Tension (LT) Cable Production Line</p>
              </div>
            </div>

            {/* Right Frame Side: Safe Text Block Panel Container */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 space-y-4 w-full">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-md tracking-wide">
                  YEAR 2018
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-purple-50 text-purple-600 border border-purple-100 px-2 py-0.5 rounded">
                  Grid Integration
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight leading-tight">
                  Downstream Grid Expansion & Power Systems
                </h3>
                <h5 className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  Mr. Tushar Gupta Drives Utility Grid Registrations
                </h5>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Continuing this rich family legacy of engineering innovation and technical growth, <strong className="text-brand-navy font-semibold">Mr. Tushar Gupta</strong>, Director (and grandson of Mr. M. C. Aggarwal), formally stepped into corporate operations in 2018. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Armed with a clear vision to completely modernize and expand the company's manufacturing footprint, he focused heavily on product innovation, strategic foresight, and execution excellence. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Under his proactive leadership, D and M successfully scaled its operations into specialized downstream asset production: Low Tension (LT) Cables and industrial Overhead Conductors. By capturing major regulatory supply approvals with crucial Government utilities, the enterprise secured remarkable compounded growth inside a tight five-year window.
              </p>
            </div>
          </div>

          {/* ==================== CARD ROW 4: PRESENT ==================== */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            
            {/* 🎯 Desktop Anchor Center Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-xl items-center justify-center text-brand-navy font-black text-xs z-30 select-none">
              2026
            </div>

            {/* Mobile-Only Badge Header Indicator */}
            <div className="lg:hidden flex w-12 h-12 rounded-full bg-white border-4 border-brand-teal shadow-md items-center justify-center text-brand-navy font-black text-xs mb-[-12px]">
              2026
            </div>

            {/* Left Frame Side: Text Block Panel (Flipped cleanly for presentation asymmetry) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 space-y-4 w-full lg:order-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-md tracking-wide">
                  CURRENT HORIZON
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-50 text-cyan-600 border border-cyan-100 px-2 py-0.5 rounded">
                  Next-Gen Innovation
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight leading-tight">
                  Next-Gen High Tension Infrastructure Innovation
                </h3>
                <h5 className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  Advanced Technology Deployment by Mr. Pratham Gupta
                </h5>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Today, the corporate house is aggressively exploring the highly technical frontier of High Tension (HT) cables using state-of-the-art modern manufacturing mechanisms. <strong className="text-brand-navy font-semibold">Mr. Pratham Gupta</strong>, the younger brother of Mr. Tushar Gupta, is actively making his technical presence felt across the power ecosystem. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                By adopting advanced metallurgical innovations and global quality verification standards, his fresh perspective and dynamic operational approach are establishing new corporate milestones that are carrying the company to greater heights. 
              </p>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">
                Guided by definition, structural determination, and an uncompromising commitment to laboratory excellence, Mr. Pratham Gupta is propelling D and M Cables a step ahead—towards a future powered by smart tech.
              </p>
            </div>

            {/* Right Frame Side: Image Box Framework */}
            <div className="w-full aspect-[4/3] bg-gradient-to-tr from-brand-ice via-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center p-6 group transition-all duration-300 hover:shadow-2xl lg:order-2 relative">
              <div className="absolute inset-0 bg-brand-navy/5 opacity-40 mix-blend-multiply" />
              <Milestone className="w-12 h-12 text-brand-navy/30 mb-3 group-hover:scale-110 transition duration-300" />
              <div className="relative z-10 space-y-0.5">
                <p className="font-black text-sm text-brand-navy uppercase tracking-widest">HIGH TENSION LAB</p>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Advanced Electrical Test Framework</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 👥 Section 3: Executive Directorate Board */}
      <div className="max-w-6xl mx-auto px-6 mt-32">
        <section className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">GUIDING WITH VISION</span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">Our Executive Leaders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col group hover:border-brand-teal/30 transition duration-300">
                <div className="w-full h-72 bg-gradient-to-b from-slate-50 to-slate-200 flex flex-col items-center justify-center text-brand-gray relative">
                  <span className="text-6xl opacity-20 group-hover:scale-105 transition duration-500 select-none">👤</span>
                  <div className="absolute bottom-4 left-4 bg-brand-navy text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded uppercase">
                    Board Directorate Member
                  </div>
                </div>
                <div className="p-6 bg-white border-t border-gray-50 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-black text-brand-navy text-base group-hover:text-brand-teal transition">{leader.name}</h4>
                    <p className="text-xs text-brand-gray font-medium mt-0.5">{leader.role}</p>
                  </div>
                  <p className="text-xs text-brand-gray leading-relaxed pt-3 border-t border-gray-50 text-left font-normal">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 🚀 Section 4: Navigation Redirect Banner Bar */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-brand-navy rounded-3xl p-8 md:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,168,204,0.1),transparent_40%)]" />
          <div className="space-y-1 text-center sm:text-left relative z-10">
            <h4 className="text-lg font-black tracking-tight">Looking for Operational Capacity Parameters?</h4>
            <p className="text-xs text-gray-400">Review infrastructure, machinery benchmarks, and workforce metrics at Sonipat.</p>
          </div>
          <Link 
            href="/about/company" 
            className="bg-brand-teal text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-md flex items-center gap-2 group whitespace-nowrap shrink-0 relative z-10"
          >
            About The Company 
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </Link>
        </div>
      </div>

    </main>
  );
}