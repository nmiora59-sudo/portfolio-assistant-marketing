import React from 'react';
import { PageContainer } from '../PageContainer';
import { Info, Sparkles, Tag, Phone, MapPin, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export const PosterPage: React.FC = () => {
  return (
    <PageContainer pageNumber={6} title="Affiche Promotionnelle" categoryTag="Support Marketing">
      <div className="space-y-6">
        {/* Mandatory Disclaimer */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p>
            <strong className="font-semibold">Mention légale du portfolio :</strong> Ceci est un{' '}
            <span className="underline decoration-amber-400 font-semibold">
              exemple de support visuel réalisé pour le portfolio
            </span>{' '}
            illustrant mes compétences en mise en page graphique, gestion de la hiérarchie typographique et valorisation d'une offre commerciale pour le marché local.
          </p>
        </div>

        {/* Section Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            05 · Communication Visuelle & Affiche Digitale
          </p>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            Affiche de Campagne : « Pack Visibilité Digitale 2026 »
          </h2>
        </div>

        {/* Grid: Poster Mockup on Left vs Composition Analysis on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Poster Showcase Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-md bg-stone-950 text-white rounded-2xl shadow-xl border border-stone-800 p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Subtle visual ambient glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

              {/* Decorative top accent line */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xs">
                    SD
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-stone-200">
                    Solutions Digitales Tanà
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                  Campagne Limitée
                </span>
              </div>

              {/* Offer Kicker */}
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-medium border border-white/15">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Offre Spéciale Entreprises & Commerces</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-sans">
                  Découvrez nos services digitaux et accélérez votre croissance.
                </h3>

                {/* Proposition de valeur */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  Modernisez votre présence en ligne, simplifiez vos démarches clients et démarquez-vous durablement sur le marché malgache.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Création & refonte de site web vitrine responsive</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Stratégie réseaux sociaux & visuels publicitaires</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tableaux de suivi et reporting mensuel inclus</span>
                  </div>
                </div>

                {/* Commercial Offer Callout Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-stone-900 border border-amber-500/30">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Remise Exceptionnelle</span>
                    <span className="text-xs font-mono-code text-stone-400">Jusqu'au 30 nov. 2026</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">
                    -25% sur votre Pack de Lancement
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    + 1 diagnostic complet de visibilité offert sans obligation d'achat.
                  </p>
                </div>
              </div>

              {/* Call to action & Local Contact */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-[11px] text-stone-400">Réservez votre séance avec nos experts :</p>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-white">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>+261 34 00 000 00</span>
                    </div>
                  </div>

                  <div className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm">
                    <span>Profiter de l'offre</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] text-stone-400 pt-1">
                  <MapPin className="w-3 h-3 text-stone-500" />
                  <span>Antanimena · Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical & Editorial Choices Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <Layers className="w-4 h-4 text-amber-800" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Principes Graphiques Appliqués
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Hiérarchie & Règle des 3 secondes :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Un regard capte immédiatement le rabais (-25%), puis la promesse principale (« découvrez nos services digitaux »), et enfin le numéro d'appel local à Antananarivo.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Harmonie Chromatique Sobres :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Fond anthracite sombre noble, typographie blanche à haut contraste (conforme WCAG AA), et touches dorées / ambrées chaudes symbolisant le dynamisme et le sérieux.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Déclinaisons Multi-supports :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Visuel pensé pour s'adapter aussi bien au format affiche imprimée A3/A4 (PLV, agence) qu'en carrousel ou story sponsorisée pour les plateformes sociales.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500 italic">
                Rôle de l'assistant(e) : Formalisation du message commercial, coordination de l'impression physique et diffusion multicanale sur les supports digitaux.
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
