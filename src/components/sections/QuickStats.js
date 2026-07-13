export default function QuickStats() {
  const stats = [
    { value: "20+", label: "Years of Excellence", icon: "🏭" },
    { value: "50K+ Tons", label: "Annual Production Capacity", icon: "⚖️" },
    { value: "15+", label: "State Grid Registrations", icon: "🏆" },
    { value: "300+", label: "B2B Delivery Networks", icon: "🌐" },
  ];

  return (
    <section className="relative z-10 -mt-10 max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-brand-navy/5 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 p-6 sm:p-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center text-center p-4 ${
              index >= 2 ? 'pt-6 lg:pt-4' : '' // Handles spacing when wrapped on mobile
            }`}
          >
            <span className="text-2xl mb-2">{stat.icon}</span>
            <span className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-gray mt-1 tracking-wide uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
