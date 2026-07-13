import Link from 'next/link';

export default function Navbar() {
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
          <Link href="/products" className="hover:text-brand-teal transition">Products</Link>
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