"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const aboutItems = [
    { name: "Introduction of Legacy", slug: "legacy" },
    { name: "About the Company", slug: "company" },
  ];

  const productItems = [
    { name: "Aluminium Wire Rods", slug: "wire-rods" },
    { name: "Overhead Conductors", slug: "conductors" },
    { name: "Power & AB Cables", slug: "cables" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="text-2xl font-black tracking-tight text-brand-navy">
          D&M <span className="text-brand-teal">CABLES</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/80">
          <Link href="/" className="hover:text-brand-teal transition">Home</Link>
          
          {/* 🎯 Dropdown 1: ABOUT US */}
          <div 
            className="relative py-6 group cursor-pointer"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <span className="hover:text-brand-teal text-brand-navy transition flex items-center gap-1.5 select-none font-medium">
              About Us 
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 stroke-[2.5] text-brand-navy/60 group-hover:text-brand-teal ${
                  isAboutOpen ? "rotate-180" : ""
                }`} 
              />
            </span>

            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl rounded-2xl p-3 w-60 flex flex-col gap-1 transition-all duration-300 z-50 ${
                isAboutOpen 
                  ? "opacity-100 scale-100 translate-y-0 visible" 
                  : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              {aboutItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={`/about/${item.slug}`}
                  className="hover:bg-brand-ice hover:text-brand-teal text-brand-navy font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 text-xs block"
                  onClick={() => setIsAboutOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* 🎯 Dropdown 2: PRODUCTS */}
          <div 
            className="relative py-6 group cursor-pointer"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <span className="hover:text-brand-teal text-brand-navy transition flex items-center gap-1.5 select-none font-medium">
              Products 
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 stroke-[2.5] text-brand-navy/60 group-hover:text-brand-teal ${
                  isProductsOpen ? "rotate-180" : ""
                }`} 
              />
            </span>

            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl rounded-2xl p-3 w-60 flex flex-col gap-1 transition-all duration-300 z-50 ${
                isProductsOpen 
                  ? "opacity-100 scale-100 translate-y-0 visible" 
                  : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              {productItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={`/products/${item.slug}`}
                  className="hover:bg-brand-ice hover:text-brand-teal text-brand-navy font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 text-xs block"
                  onClick={() => setIsProductsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/certifications" className="hover:text-brand-teal transition">Certifications</Link>
          <Link href="/suppliers" className="hover:text-brand-teal transition">Suppliers</Link>
          <Link href="/contact" className="hover:text-brand-teal transition">Contact Us</Link>
        </div>

        {/* Call to Action Button */}
        <div>
          <Link 
            href="/contact" 
            className="bg-brand-teal text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-brand-navy transition duration-300 shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </nav>
  );
}