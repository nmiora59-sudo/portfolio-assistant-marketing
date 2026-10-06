import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { VideoPresentation } from './components/VideoPresentation';
import { CoverPage } from './components/pages/CoverPage';
import { AboutPage } from './components/pages/AboutPage';
import { SkillsPage } from './components/pages/SkillsPage';
import { SocialMediaPage } from './components/pages/SocialMediaPage';
import { NewsletterPage } from './components/pages/NewsletterPage';
import { PosterPage } from './components/pages/PosterPage';
import { WebDevPage } from './components/pages/WebDevPage';
import { ReportingPage } from './components/pages/ReportingPage';
import { ProjectPage } from './components/pages/ProjectPage';
import { WhyMePage } from './components/pages/WhyMePage';
import { ContactPage } from './components/pages/ContactPage';
import { CANDIDATE_PROFILE } from './data/portfolioData';
import { ContactInfo } from './types/portfolio';
import { ChevronLeft, ChevronRight, Printer } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'paginated' | 'continuous'>('paginated');
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    try {
      const saved = localStorage.getItem('portfolio_contact_info');
      if (saved) return { ...CANDIDATE_PROFILE, ...JSON.parse(saved) };
    } catch {
      // fallback
    }
    return CANDIDATE_PROFILE;
  });

  const totalPages = 11;

  const handleUpdateContact = (newInfo: Partial<ContactInfo>) => {
    setContactInfo((prev) => {
      const updated = { ...prev, ...newInfo };
      try {
        localStorage.setItem('portfolio_contact_info', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Keyboard navigation for page-by-page reading
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (viewMode === 'paginated') {
          setCurrentPage((prev) => Math.min(totalPages, prev + 1));
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (viewMode === 'paginated') {
          setCurrentPage((prev) => Math.max(1, prev - 1));
        }
      } else if (e.key === 'Home') {
        setCurrentPage(1);
      } else if (e.key === 'End') {
        setCurrentPage(totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, totalPages]);

  // Scroll to top when page changes in paginated mode
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page content for paginated mode
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <CoverPage
            onExploreClick={() => handlePageChange(2)}
            onOpenVideo={() => setIsVideoOpen(true)}
          />
        );
      case 2:
        return <AboutPage />;
      case 3:
        return <SkillsPage />;
      case 4:
        return <SocialMediaPage />;
      case 5:
        return <NewsletterPage />;
      case 6:
        return <PosterPage />;
      case 7:
        return <WebDevPage />;
      case 8:
        return <ReportingPage />;
      case 9:
        return <ProjectPage />;
      case 10:
        return <WhyMePage />;
      case 11:
        return <ContactPage contactInfo={contactInfo} onUpdateContact={handleUpdateContact} />;
      default:
        return <CoverPage onOpenVideo={() => setIsVideoOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-900 flex flex-col font-sans">
      {/* Interactive Video Showcase Presentation Modal */}
      <VideoPresentation isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Top sticky navigation bar */}
      <HeaderNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onOpenVideo={() => setIsVideoOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-3 sm:px-6 py-6 md:py-10 max-w-6xl mx-auto w-full">
        {viewMode === 'paginated' ? (
          <div className="animate-fadeIn">
            {renderCurrentPage()}

            {/* Bottom floating pagination dock */}
            <div className="no-print mt-6 flex items-center justify-between text-xs text-stone-500 max-w-5xl mx-auto px-4 py-3 bg-white/80 backdrop-blur-md rounded-xl border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage <= 1}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-40 disabled:hover:bg-stone-100 text-stone-700 font-medium transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Précédent</span>
                </button>

                <span className="font-mono-code text-[11px] text-stone-500 px-2">
                  Page {currentPage} sur {totalPages}
                </span>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage >= totalPages}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 disabled:opacity-40 disabled:hover:bg-stone-900 text-white font-medium transition-colors cursor-pointer"
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-3 text-stone-400 text-[11px]">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="text-amber-700 font-semibold hover:underline cursor-pointer flex items-center gap-1"
                >
                  ▶ Hijery ny Video
                </button>
                <span>·</span>
                <span>Astuce : touches ← et →</span>
                <span>·</span>
                <button
                  onClick={() => window.print()}
                  className="hover:text-stone-700 underline cursor-pointer"
                >
                  Imprimer ce dossier
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Continuous full booklet view (all 11 pages stacked for seamless scrolling and perfect print) */
          <div className="space-y-12">
            <CoverPage
              onExploreClick={() => {
                const el = document.getElementById('page-2');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenVideo={() => setIsVideoOpen(true)}
            />
            <AboutPage />
            <SkillsPage />
            <SocialMediaPage />
            <NewsletterPage />
            <PosterPage />
            <WebDevPage />
            <ReportingPage />
            <ProjectPage />
            <WhyMePage />
            <ContactPage contactInfo={contactInfo} onUpdateContact={handleUpdateContact} />
          </div>
        )}
      </main>

      {/* Clean quiet print / footer notes */}
      <footer className="no-print border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-400">
        <p>
          {CANDIDATE_PROFILE.fullName} · Candidature Assistant(e) Marketing · Antananarivo, Madagascar · 2026
        </p>
      </footer>
    </div>
  );
}
