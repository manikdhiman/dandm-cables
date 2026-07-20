"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { wireRodsData } from "@/data/wireRodsData";
import { ChevronRight, Send, X, CheckCircle2 } from "lucide-react";

export default function WireRodDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const product = wireRodsData[slug];

  const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-ice/20 py-24 px-6 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
          <h1 className="text-2xl font-black text-brand-navy">Product Not Found</h1>
          <p className="text-xs text-brand-gray">The requested wire rod specification does not exist.</p>
          <Link href="/products/wire-rods" className="inline-block bg-brand-teal text-white text-xs font-bold px-6 py-3 rounded-xl">
            Back to Aluminium Rods
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-ice/20 pb-24 pt-28">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center gap-2 text-xs font-medium text-brand-gray">
          <Link href="/" className="hover:text-brand-teal transition">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products/wire-rods" className="hover:text-brand-teal transition">Aluminium Rods</Link>
          <ChevronRight size={12} />
          <span className="text-brand-navy font-bold">{product.title}</span>
        </div>

        {/* Product Hero Showcase */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Product Image Container */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-6 relative shadow-inner">
              <Image
                src={product.imageSrc}
                alt={product.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Quick Specs & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block bg-brand-ice/60 px-3 py-1 rounded-md w-fit">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              {product.title}
            </h1>
            <p className="text-sm text-brand-gray leading-relaxed whitespace-pre-line font-normal">
              {product.description.split("\n\n")[0]}
            </p>

            {/* Action Button */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-navy text-white hover:bg-brand-teal text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-2xl shadow-lg transition duration-300 flex items-center gap-2"
              >
                Make an enquiry for this product <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Component (Description & Technical Specs) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 p-8 md:p-12 space-y-8">
          
          {/* Tab Switcher */}
          <div className="flex gap-4 border-b border-gray-100 pb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeTab === "description"
                  ? "bg-brand-navy text-white shadow-md"
                  : "text-brand-gray hover:text-brand-navy bg-gray-50"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeTab === "specs"
                  ? "bg-brand-navy text-white shadow-md"
                  : "text-brand-gray hover:text-brand-navy bg-gray-50"
              }`}
            >
              Technical Specifications
            </button>
          </div>

          {/* Tab 1: Description Content */}
          {activeTab === "description" && (
            <div className="space-y-4 text-sm text-brand-gray leading-relaxed animate-fade-in">
              <p className="whitespace-pre-line leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          )}

          {/* Tab 2: Technical Specifications Table */}
          {activeTab === "specs" && (
            <div className="animate-fade-in overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <tbody>
                  {product.techSpecs.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-brand-ice/30" : "bg-white"}>
                      <td className="py-3.5 px-4 font-bold text-brand-navy border-b border-gray-100 w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-3.5 px-4 text-brand-gray border-b border-gray-100 font-medium whitespace-pre-line">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* 📩 Enquiry Modal Popup Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative space-y-6 border border-gray-100">
            <button
              onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}
              className="absolute top-6 right-6 text-brand-gray hover:text-brand-navy"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div>
                  <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">PRODUCT ENQUIRY</span>
                  <h3 className="text-xl font-black text-brand-navy">Request Specs for {product.title}</h3>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="block font-bold text-brand-navy mb-1">Full Name</label>
                    <input required type="text" placeholder="Enter your full name" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal" />
                  </div>
                  <div>
                    <label className="block font-bold text-brand-navy mb-1">Company Email</label>
                    <input required type="email" placeholder="name@company.com" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal" />
                  </div>
                  <div>
                    <label className="block font-bold text-brand-navy mb-1">Project Requirements / Quantity</label>
                    <textarea rows="3" placeholder="Specify rod size parameters, conductivity requirements, or batch tonnage..." className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal" />
                  </div>
                  <button type="submit" className="w-full bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-teal transition">
                    Submit Technical Enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                <h4 className="text-lg font-black text-brand-navy">Enquiry Submitted Successfully</h4>
                <p className="text-xs text-brand-gray">Our technical sourcing team will review your specifications and contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}