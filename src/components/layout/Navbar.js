"use client"; // Required because we are now tracking hover states!

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // The 3 exact product lines we want to feature in the dropdown list
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
          <Link href="/about" className="hover:text-brand-teal transition">About Us</Link>
          
          {/* 🎯 Dropdown Wrapper Element */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="/products" className="hover:text-brand-teal transition flex items-center gap-1">
              Products <span className="text-[10px] opacity-60">▼</span>
            </Link>

            {/* Floating Sub-menu Card */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 w-60 flex flex-col gap-2 animate-fade-in z-50">
                {productItems.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={`/products/${item.slug}`}
                    className="hover:bg-brand-ice text-brand-navy font-semibold px-4 py-2.5 rounded-xl transition text-xs"
                    onClick={() => setIsDropdownOpen(false)} // Closes menu when clicked
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
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