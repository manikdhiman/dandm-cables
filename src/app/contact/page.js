"use client"; // This line tells Next.js that this page uses interactive states (like input tracking)

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productOfInterest: 'Aluminium Wire Rods',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your RFQ for ${formData.productOfInterest} has been received.`);
    // Future expansion: hook up an API endpoint here to send emails
  };

  return (
    <main className="min-h-screen bg-brand-ice/40 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Grid Column: Contact Details & Info */}
        <div className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-3">GET IN TOUCH</span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Let's Connect for <br /><span className="text-brand-teal">Your Next Project</span>
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mb-10">
              Have bulk industrial specifications or procurement requirements? Contact our Sonipat manufacturing unit today.
            </p>

            {/* Practical Corporate Contact Info Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-bold text-xs text-brand-teal uppercase tracking-wider">Manufacturing Plant</h4>
                  <p className="text-sm text-gray-200 mt-0.5">Village Assawarpur, GT Road, Rai, Sonipat, Haryana, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-bold text-xs text-brand-teal uppercase tracking-wider">Official Email</h4>
                  <p className="text-sm text-gray-200 mt-0.5">dandmcables@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Factory Meta Tag Badges */}
          <div className="pt-12 border-t border-white/10 mt-8 flex gap-4 text-xs text-gray-400">
            <div><strong>CIN:</strong> U31902DL2013PTC255812</div>
            <div><strong>Status:</strong> ISO & ISI Compliant</div>
          </div>
        </div>

        {/* Right Grid Column: The Interactive RFQ Form Sheet */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5">
          <h2 className="text-xl font-bold text-brand-navy mb-6">Request a Commercial Quote (RFQ)</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-brand-ice/70 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-teal transition"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-brand-ice/70 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-teal transition"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-brand-ice/70 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-teal transition"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Product Line Needed</label>
              <select 
                className="w-full bg-brand-ice/70 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-teal transition appearance-none"
                value={formData.productOfInterest}
                onChange={(e) => setFormData({...formData, productOfInterest: e.target.value})}
              >
                <option>Aluminium Wire Rods</option>
                <option>Overhead Conductors (ACSR/AAC)</option>
                <option>Power & AB Cables</option>
                <option>Aluminium Ingots / Sourcing Partnerships</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Requirements & Volume details</label>
              <textarea 
                rows="4"
                required
                placeholder="Mention sizes, metric tons needed, or target delivery timeline..."
                className="w-full bg-brand-ice/70 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-teal transition"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-teal text-white font-bold py-3.5 rounded-xl hover:bg-brand-navy transition duration-300 shadow-md shadow-brand-teal/10">
              Submit Sourcing Request →
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}