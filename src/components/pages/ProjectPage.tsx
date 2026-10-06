import React from 'react';
import { PageContainer } from '../PageContainer';
import {
  Lightbulb,
  Search,
  ListTree,
  PenTool,
  Wrench,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const ProjectPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: "Recherche d'informations & Benchmark",
      icon: <Search className="w-4 h-4 text-amber-700" />,
      desc: "Étude des usages locaux à Antananarivo : analyse de la concurrence, identification des habitudes de consommation (prédominance de Facebook et WhatsApp à Madagascar) et recueil des attentes clients.",
      deliverable: "Document de synthèse des tendances & personae cibles",
    },
    {
      num: '02',
      title: "Organisation des idées & Rétroplanning",
      icon: <ListTree className="w-4 h-4 text-sky-700" />,
      desc: "Structuration de la ligne éditoriale en 3 piliers thématiques (Pédagogie, Coulisses/Preuve sociale, Offre directe). Découpage précis en étapes avec jalons temporels et dates de validation.",
      deliverable: "Calendrier éditorial partagé & matrice de priorité",
    },
    {
      num: '03',
      title: "Création de contenu & Prototypage",
      icon: <PenTool className="w-4 h-4 text-rose-700" />,
      desc: "Rédaction des accroches et textes selon la formule AIDA. Cadrage des visuels au format 1:1 et 9:16 (Stories) en garantissant la cohérence de la charte graphique et la lisibilité mobile.",
      deliverable: "Banquette de visuels prêts à diffuser & copies validées",
    },
    {
      num: '04',
      title: "Utilisation des outils numériques",
      icon: <Wrench className="w-4 h-4 text-indigo-700" />,
      desc: "Mobilisation combinée de Meta Business Suite pour la programmation, Google Sheets pour le suivi budgétaire, Canva/outils web pour la composition, et Trello pour la coordination des tâches.",
      deliverable: "Écosystème d'outils interconnecté et documenté",
    },
    {
      num: '05',
      title: "Amélioration continue & Optimisation",
      icon: <RefreshCw className="w-4 h-4 text-emerald-700" />,
      desc: "Observation des métriques à J+1 et J+7 (taux d'engagement, coût par message). Ajustement des visuels les moins performants (A/B testing) et capitalisation sur les thématiques plébiscitées.",
      deliverable: "Rapport d'apprentissage & recommandations N+1",
    },
  ];

  return (
    <PageContainer pageNumber={9} title="Projet & Créativité Digitale" categoryTag="Méthodologie Projet">
      <div className="space-y-6">
        {/* Intro */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            08 · Conduite de Projet Digital
          </p>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            Méthodologie structurée : De l'idée à l'impact mesurable
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
            Être créatif en marketing, c'est avant tout être méthodique. Voici ma démarche pas à pas pour concevoir, déployer et optimiser un projet digital adapté au tissu économique d'Antananarivo.
          </p>
        </div>

        {/* 5-Step Linear Visual Timeline */}
        <div className="space-y-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-stone-200/80 hover:border-amber-300 hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <span className="font-mono-code font-bold text-amber-700 text-sm mt-0.5 shrink-0">
                  {step.num}
                </span>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/60 shrink-0">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-stone-900">{step.title}</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Deliverable badge */}
              <div className="md:text-right shrink-0 pl-12 md:pl-0 pt-2 md:pt-0 border-t md:border-t-0 border-stone-100">
                <p className="text-[10px] uppercase font-semibold text-stone-400">Livrable clé</p>
                <p className="text-xs font-medium text-stone-800">{step.deliverable}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition banner */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-700">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>État d'esprit :</strong> Écoute active des besoins réels des équipes, recherche d'efficience et curiosité continue face aux nouveautés digitales.
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-stone-900 font-semibold shrink-0">
            <span>Prêt(e) à appliquer cette méthode au sein de votre structure</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
