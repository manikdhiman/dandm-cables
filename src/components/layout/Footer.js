import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tight text-white">
            D & M CABLES <span className="text-brand-teal">PVT. LTD.</span>
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Powering progress and shaping the future of energy infrastructure since 2005 with premium aluminium conductors and cable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/" className="hover:text-brand-teal transition">Home</Link></li>
            <li><Link href="/about/company" className="hover:text-brand-teal transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-teal transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Products</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/products/conductors" className="hover:text-brand-teal transition">Overhead Conductors</Link></li>
            <li><Link href="/products/cables" className="hover:text-brand-teal transition">Power & AB Cables</Link></li>
            <li><Link href="/products/wire-rods" className="hover:text-brand-teal transition">Aluminium Wire Rods</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-brand-teal shrink-0 mt-0.5" />
              <span>Sonipat, Haryana, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-teal shrink-0" />
              <span>+91 98120 00000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-teal shrink-0" />
              <span>info@dandmcables.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} D and M Cables Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}