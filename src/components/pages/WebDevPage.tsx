import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import {
  Code2,
  Layout,
  Bug,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';

export const WebDevPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

  return (
    <PageContainer pageNumber={7} title="Support Digital & Web" categoryTag="Passerelle Technique">
      <div className="space-y-6">
        {/* Intro */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-850 mb-1">
            06 · Synergie Informatique & Marketing
          </p>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            La valeur ajoutée d'un profil technique au sein du pôle marketing
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
            Grâce à ma formation universitaire en informatique (Licence) et mon expérience pratique chez Duroc Consulting, je maîtrise le code sous-jacent des plateformes web. Cette compétence constitue un atout décisif pour piloter des campagnes et administrer des sites en toute autonomie.
          </p>
        </div>

        {/* 3 Core Web Skills & their direct marketing payoff */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-amber-100 text-amber-900">
                  <Layout className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">Création d'Interfaces & Intégration</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Maîtrise du HTML5 sémantique, des feuilles de style CSS3 et du responsive mobile-first.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-stone-200/60 text-[11px] text-amber-900">
              <strong>Impact Marketing :</strong> Capacité à créer ou ajuster des landing pages sans dépendre d'un prestataire externe.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-sky-100 text-sky-900">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">Amélioration de Fonctionnalités</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Adaptation des parcours utilisateurs (UX), optimisation de boutons d'appel à l'action et intégration de formulaires.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-stone-200/60 text-[11px] text-sky-900">
              <strong>Impact Marketing :</strong> Optimisation continue du taux de conversion (CRO) sur le site web de l'entreprise.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-emerald-100 text-emerald-900">
                  <Bug className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">Résolution d'Anomalies & Bugs</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Détection rigoureuse des erreurs d'affichage, liens brisés, balises manquantes ou ralentissements.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-stone-200/60 text-[11px] text-emerald-900">
              <strong>Impact Marketing :</strong> Préservation de l'image de marque et zéro rupture dans le parcours de prospection.
            </div>
          </div>
        </div>

        {/* Code inspection mockup illustrating clean integration */}
        <div className="bg-stone-900 rounded-xl border border-stone-800 p-5 text-white overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-800 gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-stone-200">
                Extrait d'intégration : Balisage optimisé pour campagne marketing
              </span>
            </div>

            {/* Language tabs */}
            <div className="no-print flex items-center gap-1 font-mono-code text-[11px]">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'html' ? 'bg-stone-800 text-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                HTML5
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'css' ? 'bg-stone-800 text-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                CSS3
              </button>
              <button
                onClick={() => setActiveTab('js')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'js' ? 'bg-stone-800 text-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                JavaScript
              </button>
            </div>
          </div>

          <div className="py-4 font-mono-code text-xs text-stone-300 overflow-x-auto leading-relaxed">
            {activeTab === 'html' && (
              <pre>
{`<!-- Structure de la Landing Page de Campagne Antananarivo -->
<section class="campaign-hero" aria-labelledby="hero-title">
  <div class="container mx-auto px-4 text-center">
    <h1 id="hero-title" class="title-bold">Boostez votre Présence Digitale à Tanà</h1>
    <p class="subtitle">Des solutions sur mesure pour les entreprises et créateurs malgaches.</p>
    <a href="#contact" class="btn-primary" data-analytics-event="cta_click">
      Demander un audit offert
    </a>
  </div>
</section>`}
              </pre>
            )}

            {activeTab === 'css' && (
              <pre>
{`/* Design Responsive & Harmonisation de Marque */
.campaign-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 4rem 1.5rem;
  color: #f8fafc;
}
.btn-primary {
  background-color: #d97706; /* Ambre chaud sobre */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
}`}
              </pre>
            )}

            {activeTab === 'js' && (
              <pre>
{`// Tracking des interactions marketing & formulaires
document.querySelectorAll('[data-analytics-event]').forEach(button => {
  button.addEventListener('click', (e) => {
    const action = e.target.getAttribute('data-analytics-event');
    console.log('Événement marketing enregistré :', action);
    // Envoi des métriques de conversion vers le tableau de reporting
  });
});`}
              </pre>
            )}
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
            <span>Environnement de travail : VS Code, Git/GitHub, DevTools, CMS (WordPress / Webflow / Shopify).</span>
            <span className="text-amber-400 font-medium">Autonomie complète</span>
          </div>
        </div>

        {/* 4 concrete advantages for the hiring company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
          <div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-amber-700 shrink-0" />
            <span><strong>Interlocuteur bilingue :</strong> Fait le pont entre l'équipe commerciale et les développeurs.</span>
          </div>
          <div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-amber-700 shrink-0" />
            <span><strong>SEO On-Page :</strong> Balises Title, Meta descriptions, OpenGraph et structure sémantique maîtrisées.</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
