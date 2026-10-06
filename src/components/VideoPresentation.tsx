import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  X,
  Download,
  SkipForward,
  SkipBack,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Video,
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface VideoPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VideoScene {
  id: number;
  titleMg: string;
  titleFr: string;
  subtitleMg: string;
  subtitleFr: string;
  durationSec: number;
  accentColor: string;
  category: string;
  highlights: { labelMg: string; labelFr: string; desc: string }[];
}

const VIDEO_SCENES: VideoScene[] = [
  {
    id: 1,
    category: "FAMPIDIRANA / COUVERTURE",
    titleMg: "RABARIMALALA Avonjanahary Mioraniaina",
    titleFr: "Portfolio — Candidature Assistant(e) Marketing",
    subtitleMg: "Fampiarahana ny fahaizana informatika sy ny marketing miasa eto Antananarivo.",
    subtitleFr: "Allier rigueur informatique, créativité digitale et sens du détail.",
    durationSec: 6,
    accentColor: "from-amber-600 to-amber-900",
    highlights: [
      { labelMg: "Toerana kendrena", labelFr: "Poste ciblé", desc: "Assistant(e) Marketing" },
      { labelMg: "Toerana misy", labelFr: "Localisation", desc: "Antananarivo, Madagascar" },
      { labelMg: "Fahavononana", labelFr: "Disponibilité", desc: "Vonona avy hatrany (Immédiate)" },
    ],
  },
  {
    id: 2,
    category: "LALAN-KIZORANA / PARCOURS",
    titleMg: "Fianarana & Traikefa mifameno",
    titleFr: "Passerelle Informatique vers le Marketing",
    subtitleMg: "Licence en Informatique (AKAMASOA) sy traikefa amin'ny fitantanana dosie sy tranonkala.",
    subtitleFr: "Double compétence : structure logique et communication opérationnelle.",
    durationSec: 6,
    accentColor: "from-sky-600 to-slate-900",
    highlights: [
      { labelMg: "Licence Informatique", labelFr: "Formation", desc: "Univ. St Vincent de Paul AKAMASOA (2021-2023)" },
      { labelMg: "Baccalauréat", labelFr: "Diplôme", desc: "Lycée Faneva Ankadindramamy (2020-2021)" },
      { labelMg: "Vina", labelFr: "Objectif", desc: "Fampandrosoana ny varotra sy serasera amin'ny alalan'ny nomerika" },
    ],
  },
  {
    id: 3,
    category: "TRAIKEFA ASA / EXPÉRIENCES RÉELLES",
    titleMg: "Ireo toerana niasana & Fahaiza-manao",
    titleFr: "Rigueur opérationnelle & Terrain",
    subtitleMg: "Agent Back Office (YAS), Développeur Web (Duroc), Mpikarakara Appels d'offres (HMD).",
    subtitleFr: "Contrôle qualité de données, conception d'interfaces et respect des échéances.",
    durationSec: 7,
    accentColor: "from-emerald-700 to-stone-900",
    highlights: [
      { labelMg: "YAS (Back Office)", labelFr: "Sept 2025 - Juin 2026", desc: "Fanaraha-maso sy fanamarinana dosie, tatitra sy fahamatorana" },
      { labelMg: "Duroc Consulting (Web)", labelFr: "Avril 2025 - Juil 2025", desc: "Famolavolana sy fanamboarana tranonkala (HTML/CSS/JS)" },
      { labelMg: "HMD Solution (Appels d'offres)", labelFr: "Mai 2024 - Févr 2025", desc: "Fitantanana dosie ara-panjakana sy fanajana fe-potoana" },
    ],
  },
  {
    id: 4,
    category: "FAHAIZA-MANAO / COMPÉTENCES MARKETING",
    titleMg: "Ireo fahaizana entina amin'ny Marketing",
    titleFr: "Compétences clés transférables",
    subtitleMg: "Fandrindrana, fanoratana, famoronana sary sy horonantsary, ary fikirakirana tahirin-kevitra.",
    subtitleFr: "Communication, organisation documentaire, reporting et technologies web.",
    durationSec: 6,
    accentColor: "from-indigo-700 to-slate-950",
    highlights: [
      { labelMg: "Fanoratana & Serasera", labelFr: "Communication", desc: "Hafatry ny dokambarotra mazava sy manintona" },
      { labelMg: "Fandrindrana & Rétroplanning", labelFr: "Organisation", desc: "Fahaizana mitana daty sy fotoana tsy misy fahatarana" },
      { labelMg: "Fitaovana Informatika", labelFr: "Outils digitaux", desc: "Suite bureautique, Canva, Meta Business Suite, CMS" },
    ],
  },
  {
    id: 5,
    category: "OHATRA ASA / SUPPORT RÉSEAUX SOCIAUX",
    titleMg: "Famoahana an-tserasera (Facebook / Insta)",
    titleFr: "Exemple de Publication Social Media",
    subtitleMg: "« Mada Digital Solutions » — Fanentanana ho an'ny orinasa madinika sy salantsalany eto Tanà.",
    subtitleFr: "Copywriting méthode AIDA, visuel contrasté et appel à l'action direct.",
    durationSec: 6,
    accentColor: "from-rose-600 to-stone-900",
    highlights: [
      { labelMg: "Tanjona", labelFr: "Objectif", desc: "Fitaritana mpanjifa (Leads B2B) amin'ny tolotra fanadihadiana maimaim-poana" },
      { labelMg: "Taratra", labelFr: "Cible", desc: "Mpandraharaha sy mpivarotra eto Antananarivo" },
      { labelMg: "Fanamarihana", labelFr: "Mention", desc: "Ohatra noforonina manokana ho an'ny Portfolio" },
    ],
  },
  {
    id: 6,
    category: "OHATRA ASA / NEWSLETTER & AFISY",
    titleMg: "Emailing sy Afisy fampahafantarana",
    titleFr: "Newsletter B2B & Affiche Promotionnelle",
    subtitleMg: "L'Écho Digital Tanà sy Afisy tolotra manokana (-25%) amin'ny fanamboarana tranonkala.",
    subtitleFr: "Création de supports percutants prêts pour l'affichage et l'envoi par courriel.",
    durationSec: 6,
    accentColor: "from-amber-700 to-stone-950",
    highlights: [
      { labelMg: "Newsletter", labelFr: "Emailing", desc: "Lohahevitra mahasarika, bokotra fiantsoana hetsika (CTA), ary tonga soa an-telefaonina" },
      { labelMg: "Afisy nomerika", labelFr: "Affiche", desc: "Fandaminana sary sy soratra manaraka ny fitsipiky ny fijery 3 segondra" },
      { labelMg: "Fanamarihana", labelFr: "Mention", desc: "Ohatra namboarina ho fampisehoana fahaizana" },
    ],
  },
  {
    id: 7,
    category: "TATITRA SY FANARAHA-MASO / REPORTING",
    titleMg: "Tabilao fanaraha-maso ny fampielezan-kevitra",
    titleFr: "Suivi des KPIs & Rigueur Back Office",
    subtitleMg: "Fanisana ny vokatra, ny tahan'ny firotsahan'ny mpanjifa, ary ny dingana manaraka.",
    subtitleFr: "Tableau de bord rigoureux : portée, engagement, coût par résultat et recommandations.",
    durationSec: 6,
    accentColor: "from-teal-700 to-stone-950",
    highlights: [
      { labelMg: "Fahamatorana", labelFr: "Rigueur", desc: "Lova azo avy tamin'ny Back Office YAS sy ny Appels d'offres HMD" },
      { labelMg: "Fanajana fotoana", labelFr: "Respect délais", desc: "100% voatana ara-potoana ny fandaharam-potoana" },
      { labelMg: "Fahitana lavitra", labelFr: "Analyse", desc: "Tolo-kevitra fanatsarana isaky ny fampielezan-kevitra" },
    ],
  },
  {
    id: 8,
    category: "FAMARANANA & FIFANDRAISANA / CONTACT",
    titleMg: "Mvonona hiara-hiasa aminao",
    titleFr: "Pourquoi moi & Contact direct",
    subtitleMg: "« Fahavitrihana, fahaizana informatika, fahamatorana ary fitiavana ny marketing. »",
    subtitleFr: "Disponible immédiatement à Antananarivo pour un entretien.",
    durationSec: 7,
    accentColor: "from-amber-600 to-stone-950",
    highlights: [
      { labelMg: "Anarana feno", labelFr: "Nom", desc: CANDIDATE_PROFILE.fullName },
      { labelMg: "Telefaonina", labelFr: "Téléphone", desc: CANDIDATE_PROFILE.phone },
      { labelMg: "Mailaka", labelFr: "Email", desc: CANDIDATE_PROFILE.email },
    ],
  },
];

export const VideoPresentation: React.FC<VideoPresentationProps> = ({ isOpen, onClose }) => {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100 within current scene
  const [language, setLanguage] = useState<'mg' | 'fr' | 'both'>('both');
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordProgress, setRecordProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentScene = VIDEO_SCENES[currentSceneIdx];

  // Sound generator (ambient gentle chords via Web Audio API)
  const startAmbientAudio = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.gain.value = isMuted ? 0 : 0.08;
        gainNodeRef.current.connect(audioContextRef.current.destination);

        // Gentle harmonic chord (C maj9: C, E, G, B, D)
        const freqs = [130.81, 164.81, 196.0, 246.94, 293.66];
        freqs.forEach((freq) => {
          if (!audioContextRef.current || !gainNodeRef.current) return;
          const osc = audioContextRef.current.createOscillator();
          osc.type = 'sine';
          osc.frequency.value = freq;
          const oscGain = audioContextRef.current.createGain();
          oscGain.gain.value = 0.2;
          osc.connect(oscGain);
          oscGain.connect(gainNodeRef.current);
          osc.start();
        });
      } else if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    } catch {
      // Audio not permitted or unsupported
    }
  };

  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = isMuted ? 0 : 0.08;
    }
  }, [isMuted]);

  // Video playback loop
  useEffect(() => {
    if (!isOpen || !isPlaying || isRecording) return;

    const intervalTimeMs = 50;
    const step = 100 / ((currentScene.durationSec * 1000) / intervalTimeMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          // Advance to next scene
          if (currentSceneIdx < VIDEO_SCENES.length - 1) {
            setCurrentSceneIdx((curr) => curr + 1);
            return 0;
          } else {
            // Loop or stop
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + step;
      });
    }, intervalTimeMs);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, currentSceneIdx, currentScene.durationSec, isRecording]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.code === 'ArrowRight') {
        goToNext();
      } else if (e.code === 'ArrowLeft') {
        goToPrev();
      } else if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const goToNext = () => {
    if (currentSceneIdx < VIDEO_SCENES.length - 1) {
      setCurrentSceneIdx((prev) => prev + 1);
      setProgress(0);
    }
  };

  const goToPrev = () => {
    if (currentSceneIdx > 0) {
      setCurrentSceneIdx((prev) => prev - 1);
      setProgress(0);
    }
  };

  const restartVideo = () => {
    setCurrentSceneIdx(0);
    setProgress(0);
    setIsPlaying(true);
  };

  // Video recording to actual .webm file
  const handleDownloadVideo = async () => {
    if (isRecording) return;
    setIsRecording(true);
    setIsPlaying(false);
    setRecordProgress(0);

    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsRecording(false);
      return;
    }

    try {
      const stream = canvas.captureStream(30);
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
          ? 'video/webm;codecs=vp9'
          : 'video/webm',
      });

      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Portfolio_Video_RABARIMALALA_Avonjanahary_Marketing.webm`;
        a.click();
        URL.revokeObjectURL(url);
        setIsRecording(false);
        setIsPlaying(true);
      };

      mediaRecorder.start();

      // Render all scenes sequentially
      const totalScenes = VIDEO_SCENES.length;
      for (let sIdx = 0; sIdx < totalScenes; sIdx++) {
        const scene = VIDEO_SCENES[sIdx];
        const framesCount = 45; // 1.5 seconds per scene in export video

        for (let f = 0; f < framesCount; f++) {
          // Draw frame
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, 1280, 720);

          // Subtle gradient card
          const gradient = ctx.createLinearGradient(0, 0, 1280, 720);
          gradient.addColorStop(0, '#1e293b');
          gradient.addColorStop(1, '#020617');
          ctx.fillStyle = gradient;
          ctx.fillRect(40, 40, 1200, 640);

          // Border
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 3;
          ctx.strokeRect(40, 40, 1200, 640);

          // Header
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 22px sans-serif';
          ctx.fillText(scene.category, 80, 100);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '18px sans-serif';
          ctx.fillText(`0${scene.id} / 0${totalScenes}`, 1140, 100);

          // Main Title
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 44px sans-serif';
          ctx.fillText(scene.titleMg, 80, 175);

          // French Title
          ctx.fillStyle = '#cbd5e1';
          ctx.font = 'italic 26px serif';
          ctx.fillText(scene.titleFr, 80, 225);

          // Subtitle
          ctx.fillStyle = '#f8fafc';
          ctx.font = '22px sans-serif';
          ctx.fillText(scene.subtitleMg, 80, 290);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '20px sans-serif';
          ctx.fillText(scene.subtitleFr, 80, 330);

          // Highlights boxes
          scene.highlights.forEach((h, hIdx) => {
            const boxY = 380 + hIdx * 80;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(80, boxY, 1120, 65);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1;
            ctx.strokeRect(80, boxY, 1120, 65);

            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 20px sans-serif';
            ctx.fillText(h.labelMg, 110, boxY + 38);

            ctx.fillStyle = '#ffffff';
            ctx.font = '19px sans-serif';
            ctx.fillText(h.desc, 320, boxY + 38);
          });

          // Bottom Candidate Folio
          ctx.fillStyle = '#64748b';
          ctx.font = '16px monospace';
          ctx.fillText(`RABARIMALALA AVONJANAHARY MIORANIAINA — ANTANANARIVO 2026`, 80, 645);

          await new Promise((r) => setTimeout(r, 20));
        }

        setRecordProgress(Math.round(((sIdx + 1) / totalScenes) * 100));
      }

      mediaRecorder.stop();
    } catch {
      setIsRecording(false);
      setIsPlaying(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn">
      {/* Hidden canvas for video generation */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Main Video Player Container (Cinema 16:9 feel) */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] bg-stone-950 text-white rounded-2xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col justify-between select-none"
      >
        {/* Top Video Overlay Bar */}
        <div className="p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-stone-950/90 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-xs">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Horonantsary Fampahafantarana (Vidéo Présentation)
                </span>
                <span className="text-[10px] font-mono-code text-stone-400 bg-stone-900 border border-stone-800 px-2 py-0.5 rounded">
                  Fizarana 0{currentScene.id} / 0{VIDEO_SCENES.length}
                </span>
              </div>
              <p className="text-[11px] text-stone-300">
                {CANDIDATE_PROFILE.fullName} · Candidature Assistant(e) Marketing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Subtitle language toggle */}
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-stone-900 border border-stone-800 text-[11px]">
              <button
                onClick={() => setLanguage('mg')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'mg' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                Malagasy
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'fr' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLanguage('both')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'both' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                Bi-lingue
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                if (isMuted) startAmbientAudio();
                setIsMuted(!isMuted);
              }}
              className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
              title={isMuted ? "Alefaso ny feo miaina (Activer ambiance)" : "Atsaharo ny feo (Couper son)"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-stone-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Download video button */}
            <button
              onClick={handleDownloadVideo}
              disabled={isRecording}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors disabled:opacity-50"
              title="Hampidina ny horonantsary video (Télécharger la vidéo WebM)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">
                {isRecording ? `Fandraisana (${recordProgress}%)` : "Haka ny Video (Télécharger)"}
              </span>
            </button>

            {/* Fullscreen toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
              title="Efijery feno (Plein écran)"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors ml-1"
              title="Hakatona (Fermer)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Animated Scene Content (Cinema Slide) */}
        <div className="relative flex-1 px-6 sm:px-14 py-4 flex flex-col justify-center overflow-hidden">
          {/* Ambient visual background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-sky-500/10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto w-full space-y-4">
            {/* Category kicker */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/70 border border-amber-800/60 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentScene.category}</span>
            </div>

            {/* Main Title (Bilingual based on preference) */}
            <div className="space-y-1">
              {(language === 'mg' || language === 'both') && (
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {currentScene.titleMg}
                </h2>
              )}

              {(language === 'fr' || language === 'both') && (
                <h3 className="text-lg sm:text-2xl font-editorial italic text-stone-300">
                  {currentScene.titleFr}
                </h3>
              )}
            </div>

            {/* Narrative Subtitle / Voiceover text */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-stone-800 backdrop-blur-sm space-y-1">
              {(language === 'mg' || language === 'both') && (
                <p className="text-sm sm:text-base text-amber-200 font-medium leading-relaxed">
                  « {currentScene.subtitleMg} »
                </p>
              )}
              {(language === 'fr' || language === 'both') && (
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  « {currentScene.subtitleFr} »
                </p>
              )}
            </div>

            {/* Key highlights row for this scene */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {currentScene.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/40 transition-colors"
                >
                  <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {language === 'mg' ? item.labelMg : item.labelFr}
                  </p>
                  <p className="text-xs text-stone-200 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Video Controls & Scrubber */}
        <div className="p-4 sm:p-6 z-20 bg-gradient-to-t from-stone-950/95 via-stone-950/80 to-transparent space-y-3">
          {/* Progress Timeline Scrubber */}
          <div className="space-y-1.5">
            <div className="grid grid-cols-8 gap-1.5">
              {VIDEO_SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setCurrentSceneIdx(idx);
                    setProgress(0);
                  }}
                  className="h-1.5 sm:h-2 rounded-full overflow-hidden bg-stone-800 transition-all cursor-pointer relative"
                  title={`${scene.category} : ${scene.titleMg}`}
                >
                  <div
                    className="h-full bg-amber-400 transition-all"
                    style={{
                      width:
                        idx < currentSceneIdx
                          ? '100%'
                          : idx === currentSceneIdx
                          ? `${progress}%`
                          : '0%',
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono-code">
              <span>{currentScene.category}</span>
              <span>
                Fizarana {currentSceneIdx + 1} / {VIDEO_SCENES.length}
              </span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={goToPrev}
                disabled={currentSceneIdx === 0}
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 disabled:opacity-30 transition-colors cursor-pointer"
                title="Fizarana teo aloha"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-stone-950" />}
                <span>{isPlaying ? 'Atsaharo (Pause)' : 'Alefaso (Lecture)'}</span>
              </button>

              <button
                onClick={goToNext}
                disabled={currentSceneIdx === VIDEO_SCENES.length - 1}
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 disabled:opacity-30 transition-colors cursor-pointer"
                title="Fizarana manaraka"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={restartVideo}
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 transition-colors cursor-pointer"
                title="Avereno hatrany am-boalohany (Recommencer)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-200">RABARIMALALA A. M.</span>
              <span>·</span>
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
