import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content & Headline */}
        <div className="space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-brand-ice text-brand-teal px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            ⚡ Leading Aluminum & Cable Manufacturer
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-tight">
            Innovating Today, <br />
            <span className="text-brand-teal">Powering Tomorrow</span>
          </h1>
          
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            D & M Cables delivers high-performance aluminum ingots, wire rods, and conductors engineered for maximum efficiency. Empowering industrial grids with certified reliability since 2005.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link 
              href="/products" 
              className="bg-brand-navy text-white text-center font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-teal transition duration-300 shadow-md shadow-brand-navy/10"
            >
              Explore Products
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-brand-navy/20 text-brand-navy text-center font-semibold px-8 py-3 rounded-xl hover:border-brand-teal hover:text-brand-teal transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Right Side: Structural Graphic Showcase */}
        <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-brand-ice to-gray-200/50 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center">
          {/* Temporary visual placeholder text until you drop real cable/factory pictures in */}
          <div className="text-center p-8 space-y-2">
            <span className="text-5xl">🏭</span>
            <p className="font-bold text-brand-navy text-lg">Infrastructure Showcase</p>
            <p className="text-xs text-brand-gray max-w-xs">
              [Place your manufacturing plant image or high-quality product roll mockup here in public/assets/]
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}