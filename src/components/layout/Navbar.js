import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-black text-brand-navy tracking-tight">
          D&M <span className="text-brand-teal">CABLES</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-brand-navy uppercase tracking-wider">
          <Link href="/" className="hover:text-brand-teal transition">Home</Link>
          <Link href="/about/company" className="hover:text-brand-teal transition">About Us</Link>
          <Link href="/products/conductors" className="hover:text-brand-teal transition">Products</Link>
          <Link href="/certifications" className="hover:text-brand-teal transition">Certifications</Link>
          <Link href="/contact" className="hover:text-brand-teal transition">Contact Us</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/contact" className="bg-brand-teal text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-brand-navy transition">
            Get in Touch
          </Link>
        </div>

      </div>
    </header>
  );
}