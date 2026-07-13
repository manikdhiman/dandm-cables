"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("legacy");

  const legacyTimeline = [
    { year: "1970s", title: "The Entrepreneurial Genesis", leader: "Mr. M. C. Aggarwal", desc: "Entered the business ecosystem on a modest scale, establishing foundations built entirely upon quality and unwavering market trust." },
    { year: "2005", title: "Aluminium Diversification", leader: "Mr. Amit & Mr. Manu Aggarwal", desc: "Leveraged dynamic market oversight to transition the family legacy into industrial manufacturing, creating the 'D and M' brand." },
    { year: "2018", title: "Grid Infrastructure Scaling", leader: "Mr. Tushar Gupta", desc: "Modernized national scale plant assets, expanding operations explicitly into certified Low Tension (LT) Cables and industrial conductors." },
    { year: "Present", title: "Next-Gen Technological Innovation", leader: "Mr. Pratham Gupta", desc: "Propelling the corporate footprint forward by introducing advanced High Tension (HT) cable engineering arrays." }
  ];

  const leaders = [
    { name: "Mr. M. C. Aggarwal", role: "Chairman & Managing Director", highlight: "Founding Visionary (1970s)" },
    { name: "Mr. Amit Aggarwal", role: "Director", highlight: "Manufacturing Pioneer (2005)" },
    { name: "Mr. Tushar Gupta", role: "Director", highlight: "Infrastructure Modernization (2018)" }
  ];

  return (
    <main className="min-h-screen bg-brand-ice/40 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">CORPORATE PROFILE</span>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Our Heritage & Operations
          </h1>
          <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
            From visionary roots in the 1970s to a massive multi-generational manufacturing house powering national utility grids.
          </p>
        </div>

        {/* 🎛️ Premium Navigation Switch Tabs */}
        <div className="flex justify-center">
          <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-xl shadow-brand-navy/5 flex gap-2">
            <button
              onClick={() => setActiveTab("legacy")}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "legacy"
                  ? "bg-brand-navy text-white shadow-md"
                  : "text-brand-gray hover:text-brand-navy"
              }`}
            >
              📜 Introduction of Legacy
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "company"
                  ? "bg-brand-navy text-white shadow-md"
                  : "text-brand-gray hover:text-brand-navy"
              }`}
            >
              🏭 About the Company
            </button>
          </div>
        </div>

        {/* 🎰 Content Area Canvas */}
        <div className="mt-8">
          
          {/* TAB 1: INTRODUCTION OF LEGACY */}
          {activeTab === "legacy" && (
            <div className="space-y-16 transition-all duration-500">
              
              {/* Founder Spotlight Frame */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5">
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-brand-ice to-gray-200 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center text-brand-gray">
                    <div className="text-center p-4">
                      <span className="text-5xl block mb-2">👤</span>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">[ Executive Photo ]</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">THE FOUNDING VISION</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                    Mr. M. C. Aggarwal
                  </h2>
                  <p className="text-sm sm:text-base text-brand-gray leading-relaxed italic">
                    "Everywhere lies a business opportunity — one must identify it, plan with clarity, and execute with defined goals."
                  </p>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    The D and M story begins with the inspiring journey of our Chairman & Managing Director, Mr. M. C. Aggarwal, who entered the world of enterprise in the early 1970s. Starting at a very young age, his unwavering determination, visionary foresight, and relentless pursuit of engineering excellence transformed a modest beginning into an impactful industrial legacy.
                  </p>
                </div>
              </div>

              {/* Chronological Grid History Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-brand-navy text-center">Generational Evolution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {legacyTimeline.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-between group hover:border-brand-teal/40 transition duration-300">
                      <div>
                        <span className="text-2xl font-black text-brand-teal block mb-2">{item.year}</span>
                        <h4 className="font-bold text-brand-navy text-sm sm:text-base leading-tight">{item.title}</h4>
                        <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider block mt-1">{item.leader}</span>
                        <p className="text-xs text-brand-gray mt-3 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 👥 Leadership Board Slate */}
              <div className="space-y-8 pt-8 border-t border-gray-100">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">GUIDING WITH VISION</span>
                  <h3 className="text-2xl font-black text-brand-navy">Our Leadership Team</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {leaders.map((leader, idx) => (
                    <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 overflow-hidden flex flex-col group">
                      {/* Executive Image Slot Placeholder */}
                      <div className="w-full h-72 bg-gradient-to-b from-slate-50 to-slate-200 flex items-center justify-center text-brand-gray relative overflow-hidden">
                        <span className="text-6xl opacity-30">👤</span>
                        <div className="absolute bottom-4 left-4 bg-brand-navy text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-md uppercase">
                          {leader.highlight}
                        </div>
                      </div>
                      {/* Name Card Footer details */}
                      <div className="p-6 bg-white border-t border-gray-50 text-center">
                        <h4 className="font-black text-brand-navy text-base group-hover:text-brand-teal transition">{leader.name}</h4>
                        <p className="text-xs text-brand-gray mt-1 font-medium">{leader.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ABOUT THE COMPANY */}
          {activeTab === "company" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-all duration-500 animate-fade-in">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">OPERATIONAL CAPABILITY</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                    Industrial Infrastructure & Scale
                  </h2>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    Operating out of our central manufacturing plant complex in Sonipat, Haryana, D And M Cables fields a production infrastructure driven by an expert workforce of over 200 dedicated personnel.
                  </p>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    To satisfy our accelerating national utility grid deployments, our industrial furnaces process large daily raw material supply runs consisting of high-grade wire scrap and remelted ingots, maintaining optimal purity benchmarks.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 mt-6 flex gap-8">
                  <div>
                    <span className="text-2xl font-black text-brand-navy block">200+</span>
                    <p className="text-xs text-brand-gray uppercase tracking-wider font-bold mt-0.5">Personnel Force</p>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-brand-teal block">1k+</span>
                    <p className="text-xs text-brand-gray uppercase tracking-wider font-bold mt-0.5">Trusted Customers</p>
                  </div>
                </div>
              </div>

              {/* Structural Specification Matrix Panel */}
              <div className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <div>
                    <h3 className="font-bold text-brand-teal text-base mb-1">Procurement & Allocation Parameters</h3>
                    <p className="text-xs text-gray-400">Key metrics driving our manufacturing units.</p>
                  </div>
                  
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400">Main Facility Base</span>
                      <span className="font-bold">Sonipat, Haryana (Rai Industrial Area)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400">Target Core Quality Index</span>
                      <span className="font-bold text-brand-teal">98.5% Raw Ingot Baselines</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400">Regulatory Grid Marks</span>
                      <span className="font-bold">BIS (ISI Mark) Certified Line-up</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-400">Corporate Management Code</span>
                      <span className="font-bold">ISO 9001 Compliance Verified</span>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-gray-400 border-t border-white/10 pt-4 mt-8 relative z-10">
                  📍 <strong>Location Strategy:</strong> Positioned adjacent to economic shipping channels on the main GT Road for streamlined national logistics deployment.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}