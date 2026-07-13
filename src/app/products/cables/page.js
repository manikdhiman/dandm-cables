import Link from 'next/link';

export default function CablesPage() {
  return (
    <main className="min-h-screen bg-brand-ice/30 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-2">PRODUCT LINE</span>
          <h1 className="text-3xl font-black text-brand-navy mb-4">Aerial Bunched (AB) Cables</h1>
          <p className="text-sm text-brand-gray leading-relaxed mb-6">
            Self-supporting low-voltage distribution cabling structures featuring carbon-doped weatherproofing shields to neutralize baseline line losses and commercial power theft.
          </p>
          <div className="space-y-3 border-t border-gray-100 pt-4 text-sm text-brand-navy">
            <div>🔌 <strong>Insulation Layer:</strong> High durability Cross-Linked Polyethylene (XLPE)</div>
            <div>🛡️ <strong>Safety Factor:</strong> High-risk protection in densely forested and residential zones</div>
            <div>📜 <strong>Verification Code:</strong> Certified under IS 14255 framework criteria</div>
          </div>
          <Link href="/contact" className="mt-8 inline-block bg-brand-teal text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-navy transition duration-300">
            Request Cables Quote →
          </Link>
        </div>
        
        <div className="w-full h-80 bg-slate-200 rounded-2xl flex items-center justify-center border border-dashed border-gray-300 relative overflow-hidden">
          <div className="text-center p-6 text-brand-gray space-y-2">
            <span className="text-4xl">🔌</span>
            <p className="font-bold text-xs uppercase tracking-wider">[Cables Dummy Image]</p>
          </div>
        </div>
      </div>
    </main>
  );
}