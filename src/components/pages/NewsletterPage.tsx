import React from 'react';
import { PageContainer } from '../PageContainer';
import { Mail, Info, Send, ExternalLink, ShieldCheck, MousePointerClick, Calendar } from 'lucide-react';

export const NewsletterPage: React.FC = () => {
  return (
    <PageContainer pageNumber={5} title="Support Newsletter" categoryTag="Support Marketing">
      <div className="space-y-6">
        {/* Mandatory Disclaimer */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p>
            <strong className="font-semibold">Mention légale du portfolio :</strong> Ceci est un{' '}
            <span className="underline decoration-amber-400 font-semibold">
              exemple de support réalisé pour le portfolio
            </span>{' '}
            démontrant la structuration d'une campagne d'emailing B2B/B2C, la rédaction d'objets percutants et l'intégration de templates responsives.
          </p>
        </div>

        {/* Section Title */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            04 · Stratégie Emailing & Rétention
          </p>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            Newsletter Professionnelle : « L'Écho Digital Tanà »
          </h2>
        </div>

        {/* Layout: Newsletter Email Preview vs Campaign Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Email Client Simulation Frame */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden">
            {/* Email Client Header Bar */}
            <div className="bg-stone-50 p-3.5 border-b border-stone-200/80 text-xs space-y-2">
              <div className="flex items-center justify-between text-stone-500">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-700" />
                  <span className="font-semibold text-stone-800">Aperçu du Courriel Envoyé</span>
                </div>
                <span className="font-mono-code text-[11px] text-stone-400">Édition #04 · Octobre 2026</span>
              </div>

              <div className="pt-2 border-t border-stone-200/50 space-y-1 font-mono-code text-[11px]">
                <div className="flex items-baseline gap-2">
                  <span className="text-stone-400 w-16">De :</span>
                  <span className="text-stone-800 font-sans font-medium">contact@echodigital-tana.mg</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-stone-400 w-16">Objet :</span>
                  <span className="text-stone-900 font-sans font-semibold">
                    💡 3 réflexes simples pour booster votre visibilité à Madagascar ce trimestre
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-stone-400 w-16">Aperçu :</span>
                  <span className="text-stone-500 font-sans italic">
                    Découvrez comment les entreprises d’Antananarivo fidélisent leur clientèle grâce aux canaux digitaux.
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Body Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                    ED
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 tracking-tight">L'Écho Digital Tanà</h3>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider">Lettre d'information économique & marketing</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-stone-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Octobre 2026</span>
                </div>
              </div>

              {/* Editorial Intro Banner */}
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                  Éditorial du mois
                </p>
                <h4 className="text-lg font-bold text-stone-900 tracking-tight leading-snug">
                  Le marketing de proximité : un levier sous-estimé sur le marché malgache
                </h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Bonjour [Prénom], à Antananarivo, la confiance se bâtit d’abord sur la régularité et la clarté du message. Qu’il s’agisse d’un atelier artisanal, d’un cabinet de conseil ou d’un commerce de détail, l'emailing reste l'un des canaux les plus rentables pour transformer un prospect curieux en partenaire fidèle.
                </p>
              </div>

              {/* 2 Bullet Points Content */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-900">Racontez vos coulisses et vos réussites réelles</h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Vos clients aiment savoir qui façonne leurs produits ou services. Partager un cas pratique concret crée une proximité immédiate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-900">Structurez vos appels à l’action (CTA) sans surcharger</h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Un seul message principal par courriel permet d'obtenir un taux de clic jusqu'à 40% supérieur qu'une succession de sollicitations éparses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="text-center py-4 bg-stone-50/70 rounded-xl border border-stone-200/50 space-y-2">
                <p className="text-xs text-stone-600 font-medium">
                  Prêt à auditer l'efficacité de vos communications ?
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer">
                  <span>Télécharger le Guide Pratique Gratuit (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-300" />
                </button>
                <p className="text-[10px] text-stone-400">Accès instantané sans engagement · 5 minutes de lecture</p>
              </div>

              {/* Compliant Footer */}
              <div className="pt-6 border-t border-stone-100 text-[11px] text-stone-400 text-center space-y-2">
                <p>
                  Vous recevez ce courriel car vous êtes inscrit(e) à la veille économique d'Antananarivo.
                </p>
                <p>
                  L'Écho Digital Tanà · Immeuble Tanà Center, Antanimena, Antananarivo 101 · Madagascar
                </p>
                <div className="flex items-center justify-center gap-3 text-stone-500">
                  <span className="hover:underline cursor-pointer">Mettre à jour mes préférences</span>
                  <span>·</span>
                  <span className="hover:underline cursor-pointer">Se désabonner</span>
                  <span>·</span>
                  <span className="hover:underline cursor-pointer">Politique de confidentialité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Strategy Breakdown on Right */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <MousePointerClick className="w-4 h-4 text-amber-800" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Analyse de Conception
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Optimisation de l'Objet :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Formulation axée sur le bénéfice direct (3 réflexes simples) intégrant une émoticône sobre et une contextualisation géographique immédiate.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Hiérarchie & Scannabilité :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Lecture en Z facilitée avec titres courts, puces numérotées et bouton CTA contrasté situé au-dessus de la ligne de flottaison.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Gestion des Listes & RGPD :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Respect des obligations de désinscription en un clic et nettoyage périodique des adresses inactives pour préserver le score d'expéditeur.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center gap-2 text-[11px] text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Compatibilité 100% mobile testée sous Gmail, Outlook et Apple Mail.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
