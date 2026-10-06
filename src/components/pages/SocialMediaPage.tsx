import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Send,
  Sparkles,
  Info,
  CheckCircle2,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

export const SocialMediaPage: React.FC = () => {
  const [platform, setPlatform] = useState<'instagram' | 'facebook'>('instagram');
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(148);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikesCount(prev => prev + 1);
    }
  };

  return (
    <PageContainer pageNumber={4} title="Support Réseaux Sociaux" categoryTag="Support Marketing">
      <div className="space-y-6">
        {/* Top Disclaimer Banner - Crucial as per instruction */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p>
            <strong className="font-semibold">Mention légale du portfolio :</strong> Ceci est un{' '}
            <span className="underline decoration-amber-400 font-semibold">
              exemple de création réalisé pour le portfolio
            </span>{' '}
            afin de démontrer mes compétences en conception visuelle, rédaction publicitaire (copywriting) et animation de communauté à Antananarivo.
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              03 · Création de Contenu Social Media
            </p>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Campagne Sociale : Valoriser les services locaux à Antananarivo
            </h2>
          </div>

          {/* Platform toggle */}
          <div className="no-print flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium self-start sm:self-auto border border-stone-200/60">
            <button
              onClick={() => setPlatform('instagram')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                platform === 'instagram'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Aperçu Instagram
            </button>
            <button
              onClick={() => setPlatform('facebook')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                platform === 'facebook'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Aperçu Facebook
            </button>
          </div>
        </div>

        {/* Content Layout: Mockup on Left / Technical marketing breakdown on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Social Mockup Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden text-stone-900">
              {/* Header profile */}
              <div className="p-3.5 flex items-center justify-between border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xs ring-2 ring-amber-100">
                    MD
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs text-stone-900">mada_digital.solutions</span>
                      <CheckCircle2 className="w-3 h-3 text-sky-500" />
                    </div>
                    <p className="text-[10px] text-stone-500">Antananarivo · Ankorondrano</p>
                  </div>
                </div>

                <span className="text-stone-400 text-xs font-mono-code">Sponsorisé</span>
              </div>

              {/* Graphic Composition Card */}
              <div className="relative aspect-square bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 p-6 flex flex-col justify-between text-white overflow-hidden group">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl" />

                {/* Top Badge on visual */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-medium text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    <span>Édition Spéciale Entrepreneurs Tanà</span>
                  </div>
                  <span className="text-[10px] font-mono-code text-stone-400">#Madagascar</span>
                </div>

                {/* Central Visual Headline */}
                <div className="relative z-10 my-auto text-center space-y-3 px-2">
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    Visibilité Digitale 2026
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    Donnez à votre entreprise l'audience qu'elle mérite.
                  </h3>
                  <p className="text-xs text-stone-300 max-w-xs mx-auto leading-relaxed">
                    Audit gratuit de présence en ligne & accompagnement personnalisé sur mesure.
                  </p>
                </div>

                {/* Bottom Callout in visual */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px]">
                  <span className="text-stone-300">Offre réservée aux PME & Artisans</span>
                  <span className="font-semibold text-amber-300">Diagnostic 100% offert →</span>
                </div>
              </div>

              {/* Action bar */}
              <div className="p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-stone-700">
                    <button
                      onClick={toggleLike}
                      className="hover:text-rose-600 transition-colors flex items-center gap-1 text-xs"
                    >
                      <Heart
                        className={`w-5 h-5 transition-transform active:scale-125 ${
                          liked ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>
                    <MessageCircle className="w-5 h-5 hover:text-stone-900 cursor-pointer" />
                    <Send className="w-5 h-5 hover:text-stone-900 cursor-pointer" />
                  </div>
                  <Bookmark className="w-5 h-5 text-stone-400 hover:text-stone-900 cursor-pointer" />
                </div>

                {/* Like count */}
                <p className="text-xs font-semibold text-stone-900">
                  {likesCount} mentions J'aime
                </p>

                {/* Copywriting Body */}
                <div className="text-xs text-stone-700 leading-relaxed space-y-1.5">
                  <p>
                    <span className="font-semibold text-stone-950">mada_digital.solutions</span>{' '}
                    🚀 Vous dirigez une activité à Antananarivo et souhaitez attirer plus de clients qualifiés ?
                  </p>
                  <p>
                    Aujourd’hui, vos clients vous cherchent en ligne avant même de franchir votre porte. Notre équipe vous aide à structurer vos réseaux sociaux et à créer des contenus qui inspirent confiance.
                  </p>
                  <p className="font-medium text-stone-900">
                    👉 Bénéficiez dès cette semaine d’un diagnostic gratuit de votre visibilité en envoyant « AUDIT » en message privé ou par WhatsApp au +261 34 00 000 00.
                  </p>
                </div>

                {/* Hashtags */}
                <div className="text-[11px] text-sky-700 font-medium space-x-1.5 pt-1">
                  <span>#Madagascar</span>
                  <span>#Antananarivo</span>
                  <span>#MarketingDigital</span>
                  <span>#EntrepreneursMada</span>
                  <span>#CommunicationVisuelle</span>
                </div>

                {/* Comments preview */}
                <p className="text-[11px] text-stone-400 pt-1 cursor-pointer">
                  Afficher les 28 commentaires...
                </p>
              </div>
            </div>
          </div>

          {/* Technical Marketing Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <SlidersHorizontal className="w-4 h-4 text-amber-800" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Fiche Technique du Post
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Objectif stratégique :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Générer des prises de contact directes (leads B2B) en messagerie privée grâce à une offre d'appel à forte valeur perçue (diagnostic offert).
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Cible & Audience locale :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Dirigeants de PME, commerçants indépendants, créateurs et prestataires de services à Antananarivo et périphérie.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Technique de copywriting :</span>
                  <p className="text-stone-600 leading-relaxed">
                    Méthode AIDA (Attention via visuel épuré sombre, Intérêt sur l'enjeu local, Désir d'attirer plus de clients, Action claire par mot-clé "AUDIT").
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Indicateurs de performance (KPIs) :</span>
                  <div className="flex items-center gap-3 pt-1 text-[11px] text-stone-700">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-stone-400" />
                      <span>Portée / Reach</span>
                    </span>
                    <span>·</span>
                    <span>Taux d'interaction</span>
                    <span>·</span>
                    <span className="font-semibold text-amber-800">Messages entrants</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500 italic">
                Rôle de l'assistant(e) : Rédaction du texte, cadrage du visuel, programmation sur Meta Business Suite, et modération réactive des réponses aux commentaires.
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
