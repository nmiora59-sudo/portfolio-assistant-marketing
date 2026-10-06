import React from 'react';
import { PageContainer } from '../PageContainer';
import { EDUCATION_LIST, EXPERIENCE_LIST } from '../../data/portfolioData';
import { GraduationCap, Briefcase, Compass, Target, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <PageContainer pageNumber={2} title="À propos de moi" categoryTag="Profil & Parcours">
      <div className="space-y-8">
        {/* Intro statement */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            01 · Présentation & Motivation
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            Une passerelle naturelle entre rigueur technique et marketing opérationnel
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
            Diplômé(e) d'une Licence en Informatique et fort(e) d'expériences exigeantes en gestion administrative et développement web, je mets aujourd'hui ma polyvalence, mon sens aiguisé de l'organisation et ma sensibilité digitale au service du marketing. Mon objectif : épauler efficacement votre équipe dans la création de contenus, la gestion des campagnes, le reporting et la tenue irréprochable des plannings.
          </p>
        </div>

        {/* 3 Key Pillars of the Profile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 mb-1">Rigueur & Méthode</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Habitué(e) aux contrôles de conformité stricts et aux échéances non négociables des appels d’offres et du back office.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/50 text-[11px] font-medium text-stone-500">
              Garantie de conformité & Zéro oubli
            </div>
          </div>

          <div className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 mb-1">Aisance Digitale</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Compréhension intime du web (HTML/CSS/JS), ergonomie, manipulation aisée des plateformes logicielles et des réseaux.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/50 text-[11px] font-medium text-stone-500">
              Autonomie sur les outils modernes
            </div>
          </div>

          <div className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 mb-1">Évolution Marketing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Forte volonté d'apprentissage, esprit d’initiative et envie sincère de faire rayonner les marques malgaches auprès de leur audience.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/50 text-[11px] font-medium text-stone-500">
              Engagement & Esprit d'équipe
            </div>
          </div>
        </div>

        {/* Education & Career Journey Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-stone-100">
          {/* Education column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-200/70">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Formation Académique
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-stone-200">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-stone-900">{edu.degree}</h4>
                    <span className="text-[11px] font-mono-code text-stone-500">{edu.period}</span>
                  </div>
                  <p className="text-xs font-medium text-amber-800">{edu.institution}</p>
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-[11px] text-stone-600 flex items-start gap-1.5">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience summary column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-200/70">
              <Briefcase className="w-4 h-4 text-stone-800" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Expériences Professionnelles Récentes
              </h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white border border-stone-200/70 hover:border-stone-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-stone-900">{exp.role}</h4>
                    <span className="text-[11px] font-mono-code text-stone-500">{exp.period}</span>
                  </div>
                  <p className="text-xs font-medium text-stone-700">
                    {exp.company} {exp.location ? `— ${exp.location}` : ''}
                  </p>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {exp.tasks.slice(0, 2).join(' · ')}
                  </p>
                  <div className="mt-2 pt-2 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
                    <span className="text-stone-400">Atout Marketing :</span>
                    <span>{exp.transferableSkills[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
