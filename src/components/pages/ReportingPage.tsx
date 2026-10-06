import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { CAMPAIGN_REPORT_DATA } from '../../data/portfolioData';
import { CampaignReportRow } from '../../types/portfolio';
import { BarChart3, Info, CheckCircle2, Clock, Calendar, TrendingUp, Filter, FileSpreadsheet } from 'lucide-react';

export const ReportingPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'Tous' | 'Terminée' | 'En cours' | 'Planifiée'>('Tous');

  const filteredData = CAMPAIGN_REPORT_DATA.filter((row) => {
    if (statusFilter === 'Tous') return true;
    return row.status === statusFilter;
  });

  return (
    <PageContainer pageNumber={8} title="Organisation & Reporting" categoryTag="Rigueur Opérationnelle">
      <div className="space-y-6">
        {/* Mandatory Disclaimer */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p>
            <strong className="font-semibold">Mention légale du portfolio :</strong> Ceci est un{' '}
            <span className="underline decoration-amber-400 font-semibold">
              exemple fictif de tableau de bord de suivi marketing
            </span>{' '}
            démontrant mes compétences en structuration de données, suivi des indicateurs et rigueur d'exécution héritées de mes postes chez YAS et HMD Solution.
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              07 · Pilotage & Mesure de Performance
            </p>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Tableau de Suivi Opérationnel des Campagnes Marketing
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Rigueur documentaire et transparence : chaque action est planifiée, tracée, évaluée et suivie d'une recommandation concrète.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Objectifs atteints : <strong>112%</strong></span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Respect des délais : <strong>100%</strong></span>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="no-print flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Filter className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium">Filtrer par statut :</span>
            {(['Tous', 'Terminée', 'En cours', 'Planifiée'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  statusFilter === st
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-stone-400 flex items-center gap-1">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Format standard : Excel / Google Sheets / Notion</span>
          </div>
        </div>

        {/* Clean Responsive Data Table */}
        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4">Campagne</th>
                <th className="py-3 px-3">Canal</th>
                <th className="py-3 px-3">Date / Période</th>
                <th className="py-3 px-3">Statut</th>
                <th className="py-3 px-4">Résultats Clés</th>
                <th className="py-3 px-4">Action Suivante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-stone-900">
                    {row.campaign}
                  </td>
                  <td className="py-3 px-3 text-stone-600">
                    {row.channel}
                  </td>
                  <td className="py-3 px-3 font-mono-code text-[11px] text-stone-500 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${
                        row.status === 'Terminée'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                          : row.status === 'En cours'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200/60'
                          : 'bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      {row.status === 'Terminée' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {row.status === 'En cours' && <Clock className="w-3 h-3 text-amber-600" />}
                      {row.status === 'Planifiée' && <Calendar className="w-3 h-3 text-stone-500" />}
                      <span>{row.status}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-stone-900">{row.reach}</p>
                    <p className="text-[11px] text-stone-500">{row.engagement} · {row.conversion}</p>
                  </td>
                  <td className="py-3 px-4 text-stone-600 leading-snug">
                    {row.nextAction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Experience Transposition Summary */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600">
          <div>
            <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
              <span>Héritage Back Office (YAS) :</span>
            </h4>
            <p className="leading-relaxed">
              Habitude quotidienne de contrôler des centaines de dossiers, d'éliminer les doublons et d'adresser des comptes-rendus fiables à la direction sans délai.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-stone-900 inline-block" />
              <span>Héritage Appels d'Offres (HMD Solution) :</span>
            </h4>
            <p className="leading-relaxed">
              Tolérance zéro pour les retards : respect strict des retroplannings de dépôt et gestion documentaire méthodique des pièces administratives.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
