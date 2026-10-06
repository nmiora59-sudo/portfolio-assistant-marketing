import React from 'react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface PageContainerProps {
  pageNumber: number;
  totalNumber?: number;
  title: string;
  categoryTag?: string;
  children: React.ReactNode;
  isCover?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  totalNumber = 11,
  title,
  categoryTag,
  children,
  isCover = false,
}) => {
  const formattedPage = String(pageNumber).padStart(2, '0');
  const formattedTotal = String(totalNumber).padStart(2, '0');

  if (isCover) {
    return (
      <section
        id={`page-${pageNumber}`}
        className="relative w-full max-w-5xl mx-auto min-h-[820px] bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden flex flex-col justify-between p-8 md:p-14 print-page-break print:shadow-none print:border-none print:rounded-none print:p-8"
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={`page-${pageNumber}`}
      className="relative w-full max-w-5xl mx-auto min-h-[820px] bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden flex flex-col justify-between p-8 md:p-14 print-page-break print:shadow-none print:border-none print:rounded-none print:p-8"
    >
      {/* Top Header Row for Portfolio Folio */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-100 text-xs text-stone-500 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-900 tracking-wide">
            {CANDIDATE_PROFILE.fullName}
          </span>
          <span aria-hidden="true" className="text-stone-300">|</span>
          <span className="text-stone-600">{CANDIDATE_PROFILE.targetRole}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-500">{CANDIDATE_PROFILE.city}, {CANDIDATE_PROFILE.country}</span>
        </div>

        <div className="flex items-center gap-3">
          {categoryTag && (
            <span className="text-amber-800 font-medium tracking-wider uppercase text-[11px]">
              {categoryTag}
            </span>
          )}
          <span className="font-mono-code text-stone-400 bg-stone-50 px-2 py-0.5 rounded text-[11px] border border-stone-200/60">
            {formattedPage} / {formattedTotal}
          </span>
        </div>
      </div>

      {/* Main Page Content Body */}
      <div className="flex-1 py-8 flex flex-col">
        {children}
      </div>

      {/* Bottom Footer Row */}
      <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <span className="text-stone-600 font-medium">Portfolio de Candidature</span>
          <span aria-hidden="true">·</span>
          <span>Antananarivo 2026</span>
        </div>

        <div className="flex items-center gap-2 text-stone-400">
          <span>{title}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-code text-stone-600 font-medium">{formattedPage}</span>
        </div>
      </div>
    </section>
  );
};
