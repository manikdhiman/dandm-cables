import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Link2, Target, Zap, ArrowRight } from 'lucide-react';

export default function Hero() {
  const highlights = [
    { title: "PREMIUM QUALITY", icon: <ShieldCheck className="w-5 h-5 text-brand-teal" /> },
    { title: "BUILT FOR DURABILITY", icon: <Link2 className="w-5 h-5 text-brand-teal" /> },
    { title: "ENGINEERED PRECISION", icon: <Target className="w-5 h-5 text-brand-teal" /> },
    { title: "POWERING PROGRESS", icon: <Zap className="w-5 h-5 text-brand-teal" /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-brand-ice/20 py-12 lg:py-20 overflow-hidden w-full">
      
      {/* Container constraints aligned to the exact same grid as Navbar */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* 📝 LEFT COLUMN: Live Typography & CTAs (Spans 6 Columns) */}
        <div className="lg:col-span-6 space-y-8 text-left z-10">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block bg-brand-teal/10 w-fit px-3 py-1 rounded-md border border-brand-teal/20">
              STRENGTH. RELIABILITY. PERFORMANCE.
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-brand-navy tracking-tight uppercase leading-[1.05]">
              Building the <span className="text-brand-teal">Infrastructure</span> of Tomorrow
            </h1>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed max-w-xl font-normal pt-2">
              High-quality wires and cables engineered for durability, safety, and unmatched performance across national power grid networks.
            </p>
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-200">
            {highlights.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="p-2 bg-white rounded-xl border border-gray-200 shadow-sm w-fit">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-brand-navy tracking-wider uppercase block leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <Link
              href="/products/conductors"
              className="inline-flex items-center gap-2 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-brand-teal transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Explore Products
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </Link>
          </div>

        </div>

        {/* 🖼️ RIGHT COLUMN: Cable Display Showcase Image (Spans 6 Columns) */}
        <div className="lg:col-span-6 relative flex items-center justify-center w-full">
          <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-white group">
            <Image
              src="/products/hero-cables.png"
              alt="D&M Cables Product Lineup"
              fill
              className="object-cover object-right group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
            />
          </div>
        </div>

      </div>
    </section>
  );
}