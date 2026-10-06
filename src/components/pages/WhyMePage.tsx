import React from 'react';
import { PageContainer } from '../PageContainer';
import {
  Layers,
  GraduationCap,
  History,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const WhyMePage: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Un profil polyvalent à haute valeur ajoutée',
      icon: <Layers className="w-5 h-5 text-amber-700" />,
      highlight: 'Polyvalence opérationnelle & vision 360°',
      desc: 'Là où un profil purement littéraire peut hésiter devant un bug de mise en page ou un tableur complexe, je combine aisance rédactionnelle, logique technique et discipline administrative.',
    },
    {
      num: '02',
      title: 'Le socle d’une formation universitaire en Informatique',
      icon: <GraduationCap className="w-5 h-5 text-sky-700" />,
      highlight: 'Licence en Informatique · Esprit analytique',
      desc: 'Mon cursus m’a forgé une compréhension approfondie du web, des flux de données et des interfaces. Je parle le même langage que vos prestataires techniques et résous les problèmes avec méthode.',
    },
    {
      num: '03',
      title: 'Une expérience de terrain éprouvée et diversifiée',
      icon: <History className="w-5 h-5 text-indigo-700" />,
      highlight: 'Back Office (YAS) · Dev Web (Duroc) · Appels d’offres (HMD)',
      desc: 'J’ai fait mes preuves dans des contextes exigeants : gestion de dossiers d’appels d’offres confidentiels, conformité de données en Back Office, et livraison de code web dans les temps impartis.',
    },
    {
      num: '04',
      title: 'Rigueur, organisation et respect absolu des délais',
      icon: <CheckCircle className="w-5 h-5 text-emerald-700" />,
      highlight: 'Zéro approximation · Suivi documentaire rigoureux',
      desc: 'En marketing, une campagne en retard ou une coquille sur un visuel dégrade l’image de l’entreprise. Mon habitude des vérifications minutieuses vous garantit un travail soigné et ponctuel.',
    },
    {
      num: '05',
      title: 'Une motivation sincère et une grande agilité d’apprentissage',
      icon: <TrendingUp className="w-5 h-5 text-rose-700" />,
      highlight: 'Implication totale · Évolution vers le marketing digital',
      desc: 'Je ne postule pas par hasard : ce projet d’évolution vers le marketing est mûrement réfléchi. Je m’adapte très vite aux outils de votre entreprise et m’investis avec enthousiasme dans votre collectif.',
    },
  ];

  return (
    <PageContainer pageNumber={10} title="Pourquoi moi ?" categoryTag="Arguments Clés">
      <div className="space-y-6">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            09 · Synthèse de Valeur
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            5 raisons de me confier le poste d'Assistant(e) Marketing
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            Recruter un(e) assistant(e) marketing, c'est s'assurer d'avoir un bras droit fiable, réactif et autonome sur qui s'appuyer au quotidien. Voici pourquoi ma candidature répond précisément à vos besoins.
          </p>
        </div>

        {/* 5 Reasons Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.slice(0, 4).map((r, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-stone-200/80 hover:border-amber-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/60">
                    {r.icon}
                  </div>
                  <span className="font-mono-code text-xs font-bold text-stone-400">
                    Raison {r.num}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-stone-900 mb-1">{r.title}</h3>
                <p className="text-[11px] font-medium text-amber-900 mb-2">{r.highlight}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}

          {/* 5th reason spans full width */}
          <div className="md:col-span-2 p-4 rounded-xl bg-stone-900 text-white border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-stone-800 border border-stone-700 shrink-0">
                {reasons[4].icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">{reasons[4].title}</h3>
                  <span className="font-mono-code text-[10px] text-amber-400 uppercase tracking-widest bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800/40">
                    Atout Humain
                  </span>
                </div>
                <p className="text-xs text-stone-300 mt-1 max-w-2xl leading-relaxed">
                  {reasons[4].desc}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0 pl-11 md:pl-0">
              <span className="text-[11px] text-stone-400">Poste ciblé :</span>
              <p className="text-xs font-bold text-amber-400">Assistant(e) Marketing</p>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between text-xs text-amber-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Engagement :</strong> Ponctualité, discrétion professionnelle, souci permanent de la qualité et enthousiasme au sein de votre équipe à Antananarivo.
            </span>
          </div>
          <span className="font-bold text-amber-900 whitespace-nowrap hidden sm:inline">100% Opérationnel(le)</span>
        </div>
      </div>
    </PageContainer>
  );
};
