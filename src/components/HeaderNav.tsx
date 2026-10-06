import React, { useState } from 'react';
import { PORTFOLIO_SECTIONS, CANDIDATE_PROFILE } from '../data/portfolioData';
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  Menu,
  X,
  BookOpen,
  ScrollText,
  Share2,
  Check,
  Video,
} from 'lucide-react';

interface HeaderNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  viewMode: 'paginated' | 'continuous';
  onToggleViewMode: (mode: 'paginated' | 'continuous') => void;
  onOpenVideo: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  viewMode,
  onToggleViewMode,
  onOpenVideo,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSelectPage = (pageNum: number) => {
    onPageChange(pageNum);
    setMenuOpen(false);
    if (viewMode === 'continuous') {
      const element = document.getElementById(`page-${pageNum}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header className="no-print sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-white border-b border-stone-800 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Left: Branding & Candidate */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelectPage(1)}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-md bg-stone-800 text-amber-400 flex items-center justify-center font-bold text-xs group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors">
                RM
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-white tracking-tight leading-tight">
                  {CANDIDATE_PROFILE.fullName}
                </p>
                <p className="text-[11px] text-stone-400 leading-tight">
                  Candidature Assistant(e) Marketing
                </p>
              </div>
            </button>
          </div>

          {/* Center: Pagination & Navigation (in paginated mode) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {viewMode === 'paginated' && (
              <>
                <button
                  onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage <= 1}
                  className="p-1.5 rounded-md hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-transparent text-stone-300 transition-colors cursor-pointer"
                  title="Page précédente (Touche Gauche)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Indicator and Quick Menu trigger */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800/80 hover:bg-stone-800 text-stone-200 text-xs font-mono-code transition-colors cursor-pointer border border-stone-700/60"
                  title="Ouvrir le sommaire des 11 pages"
                >
                  <span className="font-semibold text-amber-400">
                    {String(currentPage).padStart(2, '0')}
                  </span>
                  <span className="text-stone-500">/</span>
                  <span>{String(totalPages).padStart(2, '0')}</span>
                  <span className="text-[11px] text-stone-400 hidden md:inline ml-1 font-sans">
                    · {PORTFOLIO_SECTIONS[currentPage - 1]?.title}
                  </span>
                </button>

                <button
                  onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage >= totalPages}
                  className="p-1.5 rounded-md hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-transparent text-stone-300 transition-colors cursor-pointer"
                  title="Page suivante (Touche Droite)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {viewMode === 'continuous' && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs transition-colors cursor-pointer border border-stone-700"
              >
                <Menu className="w-3.5 h-3.5 text-amber-400" />
                <span>Sommaire (11 sections)</span>
              </button>
            )}
          </div>

          {/* Right: Mode switcher & Actions */}
          <div className="flex items-center gap-2">
            {/* Dedicated Video Showcase Button */}
            <button
              onClick={onOpenVideo}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-xs transition-all cursor-pointer"
              title="Alefaso amin'ny endrika horonantsary video (Mode Vidéo Présentation)"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Mode Vidéo</span>
            </button>

            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center p-0.5 bg-stone-800 rounded-lg text-xs border border-stone-700/60">
              <button
                onClick={() => onToggleViewMode('paginated')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'paginated'
                    ? 'bg-stone-900 text-amber-300 font-medium shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Consulter page par page comme un document relié"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Page par page</span>
              </button>
              <button
                onClick={() => onToggleViewMode('continuous')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'continuous'
                    ? 'bg-stone-900 text-amber-300 font-medium shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Défilement continu de tout le dossier"
              >
                <ScrollText className="w-3.5 h-3.5" />
                <span>Défilement</span>
              </button>
            </div>

            {/* Print/PDF */}
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Imprimer ou enregistrer en PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Share link */}
            <button
              onClick={handleCopyShare}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Copier le lien du portfolio"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Mobile Menu trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 sm:hidden transition-colors cursor-pointer"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Global Progress Bar (thin line at bottom of navbar) */}
        <div className="w-full bg-stone-800 h-0.5">
          <div
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </header>

      {/* Slide-over / Modal Sommaire Navigation Menu */}
      {menuOpen && (
        <div className="no-print fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-full max-w-sm bg-stone-900 text-white h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">Sommaire du Portfolio</h3>
                  <p className="text-xs text-stone-400">11 pages & dossiers thématiques</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Showcase Quick Launch */}
              <div className="py-3 border-b border-stone-800">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenVideo();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Video className="w-4 h-4" />
                  <span>Hijery ny Video Présentation</span>
                </button>
              </div>

              {/* View mode toggle on mobile */}
              <div className="md:hidden py-4 border-b border-stone-800">
                <p className="text-[11px] uppercase font-bold text-stone-500 mb-2">Mode d'affichage</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      onToggleViewMode('paginated');
                    }}
                    className={`p-2 rounded-lg border text-center transition-colors ${
                      viewMode === 'paginated'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                        : 'border-stone-800 text-stone-400'
                    }`}
                  >
                    Page par page
                  </button>
                  <button
                    onClick={() => {
                      onToggleViewMode('continuous');
                    }}
                    className={`p-2 rounded-lg border text-center transition-colors ${
                      viewMode === 'continuous'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                        : 'border-stone-800 text-stone-400'
                    }`}
                  >
                    Défilement continu
                  </button>
                </div>
              </div>

              {/* Sections list */}
              <div className="py-4 space-y-1">
                {PORTFOLIO_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleSelectPage(sec.id)}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between transition-colors text-xs cursor-pointer ${
                      currentPage === sec.id
                        ? 'bg-stone-800 text-amber-300 font-semibold'
                        : 'text-stone-300 hover:bg-stone-850 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-code text-[11px] text-stone-500 w-5">
                        {String(sec.id).padStart(2, '0')}
                      </span>
                      <span>{sec.title}</span>
                    </div>
                    <span className="text-[10px] text-stone-500 font-normal">{sec.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer with candidate details */}
            <div className="pt-4 border-t border-stone-800 text-xs text-stone-500 space-y-2">
              <p className="font-medium text-stone-300">{CANDIDATE_PROFILE.fullName}</p>
              <p className="text-[11px]">{CANDIDATE_PROFILE.city}, Madagascar · {CANDIDATE_PROFILE.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
