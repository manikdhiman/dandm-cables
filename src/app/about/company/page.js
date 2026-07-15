"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Zap, 
  Cpu, 
  Activity, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Eye 
} from "lucide-react";

export default function CompanyPage() {
  const [visionTab, setVisionTab] = useState("mission");

  const coreSolutions = [
    {
      title: "Urban Infrastructure Development",
      desc: "Engineered solutions for high-density metropolitan distribution networks.",
      icon: <Building2 className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Rural Electrification Initiatives",
      desc: "Dependable, high-tensile conductors designed for challenging cross-country links.",
      icon: <Zap className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Industrial Power Supply Systems",
      desc: "Heavy-duty transmission architectures tailored for factories and smelting facilities.",
      icon: <Cpu className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Renewable & Sustainable Projects",
      desc: "Optimized grid integration frameworks built for green energy distribution.",
      icon: <Activity className="w-6 h-6 text-brand-teal" />
    }
  ];

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-24">
      
      {/* 🏛️ Section 1: Top Hero Banner */}
      <section className="relative bg-brand-navy py-20 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,204,0.12),transparent_60%)]" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">OPERATIONAL PROFILE</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">About the Company</h1>
          <div className="h-1 w-16 bg-brand-teal mx-auto my-4 rounded-full" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-20">
        
        {/* 📜 Section 2: Executive Narrative Block */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-brand-teal via-brand-navy to-brand-teal w-full" />
          
          <div className="p-8 md:p-12 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Text Narrative Stack */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">QUALITY YOU CAN TRUST</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                    Powering Progress Since 2005
                  </h2>
                </div>
                
                <div className="h-px bg-gray-100 w-full" />

                <div className="text-sm sm:text-base text-brand-gray leading-relaxed space-y-4 font-normal">
                  <p>
                    Since 2005, <strong className="text-brand-navy font-semibold">D and M Cables Pvt. Ltd.</strong> has been powering progress and shaping the future of energy infrastructure. What began as a vision to deliver uncompromising quality and reliability has evolved into a trusted and respected name in the power and cable industry.
                  </p>
                  <p>
                    We specialize in manufacturing premium-quality aluminium rods, conductors, and comprehensive cable solutions designed to meet the dynamic needs of modern power transmission and distribution systems. With advanced manufacturing facilities, cutting-edge machinery, and fully equipped testing laboratories, we ensure that every product embodies precision, durability, safety, and superior performance.
                  </p>
                  <p>
                    At D and M Cables, quality is not merely a benchmark—it is our foundation. Our products consistently meet and exceed national and international standards, delivering dependable performance even under the most demanding conditions.
                  </p>
                </div>
              </div>

              {/* Right Side: Heavy Production Complex Asset Frame Placeholder */}
              <div className="lg:col-span-5 w-full aspect-[4/3] bg-gradient-to-tr from-brand-ice via-slate-100 to-slate-200 rounded-3xl border border-gray-200/80 shadow-lg flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy/5 opacity-40 mix-blend-multiply" />
                <span className="text-5xl mb-3 relative z-10 select-none opacity-40">🏭</span>
                <div className="relative z-10 space-y-0.5">
                  <p className="font-black text-xs text-brand-navy uppercase tracking-widest">SONIPAT CASTING PLANT</p>
                  <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Heavy Asset Manufacturing Complex</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🎯 Section 3: State-Driven Mission & Vision Switcher Frame */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 overflow-hidden p-8 md:p-12 space-y-8">
          <div className="flex justify-center border-b border-gray-100 pb-6">
            <div className="bg-brand-ice/60 p-1.5 rounded-2xl border border-gray-100 flex gap-2">
              <button
                onClick={() => setVisionTab("mission")}
                className={`px-6 py-3 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 ${
                  visionTab === "mission" ? "bg-brand-navy text-white shadow-md" : "text-brand-gray hover:text-brand-navy"
                }`}
              >
                <Compass size={16} /> Our Mission
              </button>
              <button
                onClick={() => setVisionTab("vision")}
                className={`px-6 py-3 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 ${
                  visionTab === "vision" ? "bg-brand-navy text-white shadow-md" : "text-brand-gray hover:text-brand-navy"
                }`}
              >
                <Eye size={16} /> Our Vision
              </button>
            </div>
          </div>

          {/* Tab Canvas Content Box */}
          <div className="min-h-32 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-4">
            {visionTab === "mission" ? (
              <>
                <p className="text-base sm:text-lg text-brand-navy font-bold leading-relaxed">
                  "To provide innovative, reliable, and cost-effective cable solutions that power India’s growth while maintaining the highest standards of quality, safety, and environmental responsibility."
                </p>
              </>
            ) : (
              <>
                <p className="text-base sm:text-lg text-brand-navy font-bold leading-relaxed">
                  "To establish ourselves as a premier global benchmark in heavy metallurgical systems, pioneering grid connectivity engineering loops powered by modern technology assets."
                </p>
              </>
            )}

            {/* Metrics Footer Banner Ribbons */}
            <div className="pt-6 flex items-center gap-8 justify-center w-full border-t border-gray-50 mt-4 text-xs sm:text-sm font-bold text-brand-navy">
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-brand-teal" /> 20+ Years Experience
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-teal" /> 100+ Happy Clients
              </div>
            </div>
          </div>
        </section>

        {/* 🗺️ Section 4: Customer-Centric Value Propositions Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-black text-brand-navy tracking-tight leading-snug">
              Driven by customer-centric values, we provide tailored and cost-effective solutions that support:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:border-brand-teal/30 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="bg-brand-ice w-12 h-12 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-brand-navy text-sm sm:text-base leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-gray leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <Link href="/contact" className="text-[11px] font-bold uppercase tracking-wider text-brand-teal hover:text-brand-navy transition flex items-center gap-1 mt-6">
                  Contact Us <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 🚀 Section 5: Heavy Bottom Redirection Call to Action Banner */}
        <section className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,168,204,0.1),transparent_40%)]" />
          <div className="space-y-1 text-center sm:text-left relative z-10">
            <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">DRIVEN BY EXCELLENCE</span>
            <h4 className="text-xl font-black tracking-tight">Ready to Power Your Growth?</h4>
            <p className="text-xs text-gray-400 max-w-xl">
              Our unwavering commitment to innovation, reliability, and sustainability enables us to contribute meaningfully to the nation’s growing energy demands while aligning with global standards.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 relative z-10 shrink-0">
            <Link 
              href="/products/conductors" 
              className="bg-white text-brand-navy text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-brand-teal hover:text-white transition-all duration-300 shadow-md"
            >
              Our Products
            </Link>
            <Link 
              href="/contact" 
              className="bg-brand-teal text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}