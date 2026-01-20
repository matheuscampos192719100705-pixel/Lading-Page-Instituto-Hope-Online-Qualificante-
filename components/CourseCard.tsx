
import React from 'react';
import { CourseCategory } from '../types';
import { CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { COLORS, WHATSAPP_LINK } from '../constants';

export const CourseCategoryCard: React.FC<{ category: CourseCategory }> = ({ category }) => {
  return (
    <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100/60 overflow-hidden group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div 
          style={{ backgroundColor: `${COLORS.primaryGreen}10`, color: COLORS.primaryGreen }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
        >
          <CheckCircle2 size={24} />
        </div>
        <h3 style={{ color: COLORS.secondaryBlue }} className="text-2xl font-extrabold mb-4 group-hover:translate-x-1 transition-transform">
          {category.title}
        </h3>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">
          {category.description}
        </p>
        
        <div className="space-y-3 mb-4 h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-2">
          {category.courses.map((course, idx) => (
            <div key={idx} className="flex items-start gap-3 group/item">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover/item:scale-150 transition-transform shrink-0" />
              <span className="text-sm font-medium text-slate-700 group-hover/item:text-emerald-600 transition-colors">
                {course}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-8">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: COLORS.secondaryBlue }}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all duration-300 text-white hover:opacity-90 shadow-lg shadow-blue-900/10 group-hover:scale-[1.02] active:scale-95"
        >
          <MessageCircle size={18} fill="currentColor" />
          Consultar Horários
          <ChevronRight size={18} className="ml-auto" />
        </a>
      </div>
    </div>
  );
};
