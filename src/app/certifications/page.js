export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-brand-ice/30 py-16 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-md bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5">
        <span className="text-5xl block mb-4">📜</span>
        <h1 className="text-2xl font-black text-brand-navy tracking-tight mb-2">
          Quality & Compliance Certifications
        </h1>
        <p className="text-sm text-brand-gray leading-relaxed mb-6">
          This section is currently being updated with our official ISO 9001:2015 management systems and Bureau of Indian Standards (BIS) ISI certificates.
        </p>
        <div className="inline-flex items-center gap-2 bg-brand-ice text-brand-teal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          ⚙️ Under Construction
        </div>
      </div>
    </main>
  );
}