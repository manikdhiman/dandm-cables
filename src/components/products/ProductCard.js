import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ title, category, imageSrc, slug, description }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-brand-navy/5 flex flex-col justify-between group hover:border-brand-teal/40 hover:shadow-2xl transition-all duration-300">
      <div className="space-y-4">
        {/* Real Product Image Bounding Box */}
        <Link href={slug || "#"} className="block w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-gray-100 relative group-hover:scale-[1.03] transition-transform duration-300">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Content Details */}
        <div>
          <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-1">
            {category}
          </span>
          <Link href={slug || "#"}>
            <h3 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-xs text-brand-gray leading-relaxed mt-2 font-normal line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Interactive Action Button */}
      <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
        <Link 
          href={slug || "#"} 
          className="text-xs font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-teal transition flex items-center gap-1.5"
        >
          View Full Specifications
          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
}