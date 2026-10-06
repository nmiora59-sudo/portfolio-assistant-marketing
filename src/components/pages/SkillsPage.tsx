import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { SKILLS_LIST } from '../../data/portfolioData';
import {
  MessageSquare,
  FolderArchive,
  Palette,
  Laptop,
  Globe,
  BarChart3,
  Search,
  Users2,
  Clock,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  communication: <MessageSquare className="w-4 h-4 text-stone-700" />,
  organisation: <FolderArchive className="w-4 h-4 text-amber-700" />,
  'creation-contenu': <Palette className="w-4 h-4 text-rose-700" />,
  'outils-informatiques': <Laptop className="w-4 h-4 text-sky-700" />,
  'web-digital': <Globe className="w-4 h-4 text-indigo-700" />,
  'reporting-suivi': <BarChart3 className="w-4 h-4 text-emerald-700" />,
  'recherche-info': <Search className="w-4 h-4 text-cyan-700" />,
  'travail-equipe': <Users2 className="w-4 h-4 text-amber-700" />,
  'respect-delais': <Clock className="w-4 h-4 text-purple-700" />,
  'sens-detail': <Sparkles className="w-4 h-4 text-amber-600" />,
};

export const SkillsPage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<'all' | 'digital' | 'orga' | 'comm'>('all');

  const filteredSkills = SKILLS_LIST.filter(skill => {
    if (activeGroup === 'all') return true;
    if (activeGroup === 'digital') {
      return ['web-digital', 'creation-contenu', 'outils-informatiques', 'recherche-info'].includes(skill.id);
    }
    if (activeGroup === 'orga') {
      return ['organisation', 'respect-delais', 'sens-detail', 'reporting-suivi'].includes(skill.id);
    }
    if (activeGroup === 'comm') {
      return ['communication', 'travail-equipe', 'reporting-suivi', 'recherche-info'].includes(skill.id);
    }
    return true;
  });

  return (
    <PageContainer pageNumber={3} title="Mes compétences" categoryTag="Savoir-Faire & Atouts">
      <div className="space-y-6">
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1.5">
              02 · Matrice de Compétences
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Des compétences éprouvées et transférables au marketing
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Chaque compétence issue de ma formation informatique et de mes missions opérationnelles a été transposée en application concrète pour un rôle d’Assistant(e) Marketing.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="no-print flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium self-start md:self-auto border border-stone-200/60">
            <button
              onClick={() => setActiveGroup('all')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeGroup === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Toutes (10)
            </button>
            <button
              onClick={() => setActiveGroup('orga')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeGroup === 'orga'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Organisation & Rigueur
            </button>
            <button
              onClick={() => setActiveGroup('digital')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeGroup === 'digital'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Digital & Création
            </button>
            <button
              onClick={() => setActiveGroup('comm')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeGroup === 'comm'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Coordination & Données
            </button>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 rounded-xl border border-stone-200/70 bg-white hover:border-amber-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-md bg-stone-50 border border-stone-200/50">
                      {ICON_MAP[skill.id]}
                    </div>
                    <h3 className="text-sm font-bold text-stone-900">{skill.title}</h3>
                  </div>

                  <span className="text-[11px] font-mono-code text-stone-500 font-medium">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {skill.description}
                </p>
              </div>

              {/* Marketing Application box */}
              <div className="pt-2.5 border-t border-stone-100 flex items-start gap-1.5 text-[11px] text-amber-900">
                <span className="font-semibold text-stone-700 shrink-0">Valeur Marketing :</span>
                <span className="text-stone-600 leading-normal">{skill.marketingApplication}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Capacité d’adaptation rapide aux outils propres à l’entreprise (CRM, ERP, suite Adobe/Canva, Meta Business Suite).</span>
          </div>
          <span className="font-medium text-stone-800 hidden sm:inline">Disponibilité immédiate à Antananarivo</span>
        </div>
      </div>
    </PageContainer>
  );
};
