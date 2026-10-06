import React from 'react';
import { PageContainer } from '../PageContainer';
import { CANDIDATE_PROFILE } from '../../data/portfolioData';
import { ArrowRight, MapPin, Mail, Sparkles, CheckCircle2, Video } from 'lucide-react';

interface CoverPageProps {
  onExploreClick?: () => void;
  onOpenVideo?: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onExploreClick, onOpenVideo }) => {
  return (
    <PageContainer pageNumber={1} title="Couverture" isCover>
      <div className="relative h-full flex flex-col justify-between">
        {/* Subtle geometric background watermark / watermark pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 -mr-16 -mt-16 rounded-full bg-stone-100/70 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-50/50 blur-2xl -z-10 pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-stone-200/80 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
              RM
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">Dossier de Candidature</p>
              <p className="text-sm font-semibold text-stone-900">Session Professionnelle 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 border border-stone-200/60 px-3 py-1.5 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Antananarivo, Madagascar</span>
          </div>
        </div>

        {/* Center Hero Block */}
        <div className="my-auto py-12 md:py-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-4 bg-amber-50/80 px-3 py-1 rounded-md border border-amber-200/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-750" />
            <span>Profil Hybride · Informatique & Marketing Opérationnel</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-950 tracking-tight leading-[1.15] mb-6">
            {CANDIDATE_PROFILE.fullName}
          </h1>

          <div className="h-1 w-20 bg-amber-600 mb-8 rounded-full" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-editorial italic text-stone-800 font-medium">
              Portfolio — Candidature au poste d’Assistant(e) Marketing
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              « Allier rigueur informatique, créativité digitale et sens du détail au service de la coordination marketing, de la gestion documentaire et du rayonnement de votre entreprise à Antananarivo. »
            </p>
          </div>

          {/* Quick value props list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-stone-100">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-stone-900">Rigueur & Procédures</p>
                <p className="text-[12px] text-stone-500">Expérience Back Office & Appels d’offres</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-stone-900">Maîtrise Web & Digital</p>
                <p className="text-[12px] text-stone-500">Licence informatique & Intégration web</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-stone-900">Organisation & Suivi</p>
                <p className="text-[12px] text-stone-500">Reporting précis et respect des délais</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-200/80 text-xs text-stone-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-stone-700">
              <Mail className="w-3.5 h-3.5 text-stone-400" />
              <span>{CANDIDATE_PROFILE.email}</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600 font-medium">{CANDIDATE_PROFILE.availability}</span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenVideo && (
              <button
                onClick={onOpenVideo}
                className="no-print inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 rounded-lg text-xs font-bold transition-all shadow-sm w-fit cursor-pointer"
                title="Alefaso amin'ny endrika horonantsary video"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Hijery ny Video (Vidéo)</span>
              </button>
            )}

            {onExploreClick && (
              <button
                onClick={onExploreClick}
                className="no-print inline-flex items-center gap-2 px-5 py-2.5 bg-stone-950 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-all shadow-sm group w-fit cursor-pointer"
              >
                <span>Découvrir le portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
