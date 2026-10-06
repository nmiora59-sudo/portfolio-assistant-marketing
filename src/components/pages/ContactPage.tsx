import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { ContactInfo } from '../../types/portfolio';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Globe,
  Printer,
  Copy,
  Check,
  Send,
  Sparkles,
  Edit3,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  contactInfo: ContactInfo;
  onUpdateContact?: (newInfo: Partial<ContactInfo>) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ contactInfo, onUpdateContact }) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempPhone, setTempPhone] = useState(contactInfo.phone);
  const [tempEmail, setTempEmail] = useState(contactInfo.email);
  const [tempLinkedin, setTempLinkedin] = useState(contactInfo.linkedin);

  // Direct recruiter message form simulation
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterMsg, setRecruiterMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyAll = () => {
    const text = `Candidature Assistant(e) Marketing\n${contactInfo.fullName}\nEmail : ${contactInfo.email}\nTéléphone : ${contactInfo.phone}\nLocalisation : ${contactInfo.city}, ${contactInfo.country}\nLinkedIn : ${contactInfo.linkedin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateContact) {
      onUpdateContact({
        phone: tempPhone,
        email: tempEmail,
        linkedin: tempLinkedin,
      });
    }
    setIsEditing(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recruiterName.trim() || !recruiterCompany.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setRecruiterName('');
      setRecruiterCompany('');
      setRecruiterMsg('');
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer pageNumber={11} title="Coordonnées & Échange" categoryTag="Contact">
      <div className="space-y-6">
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              10 · Prise de Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Échangeons sur vos opportunités à Antananarivo
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Je suis immédiatement disponible pour convenir d'un entretien, vous présenter mes travaux en détail et intégrer votre équipe commerciale et marketing.
            </p>
          </div>

          {/* Quick print and copy actions */}
          <div className="no-print flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer le Portfolio</span>
            </button>

            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition-colors border border-stone-200 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
              <span>{copied ? 'Coordonnées copiées !' : 'Copier mes coordonnées'}</span>
            </button>
          </div>
        </div>

        {/* Contact Info Card & Recruiter Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Official Candidate Card */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-amber-800">
                  Candidat(e)
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                  {contactInfo.fullName}
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  {contactInfo.targetRole}
                </p>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="no-print p-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors text-xs flex items-center gap-1 border border-stone-200/60"
                title="Modifier les coordonnées"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium">{isEditing ? 'Fermer' : 'Éditer'}</span>
              </button>
            </div>

            {isEditing ? (
              /* Inline Edit Mode */
              <form onSubmit={handleSaveContact} className="no-print space-y-3 text-xs bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                <p className="font-semibold text-stone-800 text-[11px] uppercase">
                  Personnaliser vos coordonnées pour l'envoi :
                </p>

                <div>
                  <label className="block text-stone-600 mb-1 text-[11px]">Téléphone</label>
                  <input
                    type="text"
                    value={tempPhone}
                    onChange={(e) => setTempPhone(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-white border border-stone-300 text-xs focus:outline-amber-600"
                    placeholder="+261 34 00 000 00"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 text-[11px]">Email</label>
                  <input
                    type="email"
                    value={tempEmail}
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-white border border-stone-300 text-xs focus:outline-amber-600"
                    placeholder="votre.email@domaine.com"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 text-[11px]">Lien LinkedIn ou Portfolio</label>
                  <input
                    type="text"
                    value={tempLinkedin}
                    onChange={(e) => setTempLinkedin(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-white border border-stone-300 text-xs focus:outline-amber-600"
                    placeholder="linkedin.com/in/votre-profil"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1 text-stone-600 hover:text-stone-900"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-stone-900 text-white rounded font-medium hover:bg-stone-800"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            ) : (
              /* Contact items list */
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/50 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Téléphone</span>
                    <a href={`tel:${contactInfo.phone}`} className="font-semibold text-stone-900 hover:text-amber-700 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/50 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Adresse Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="font-semibold text-stone-900 hover:text-sky-700 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-100 text-stone-800 border border-stone-200/50 shrink-0">
                    <MapPin className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Localisation</span>
                    <p className="font-semibold text-stone-900">
                      {contactInfo.city}, {contactInfo.country}
                    </p>
                    <p className="text-[11px] text-stone-500">Disponible pour postes à Antananarivo et environs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200/50 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Réseau Professionnel</span>
                    <span className="font-semibold text-stone-900 font-mono-code text-[11px]">
                      {contactInfo.linkedin}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>Disponibilité : <strong>Immédiate</strong></span>
              </span>
              <span>Mobilité : Tanà intra-muros</span>
            </div>
          </div>

          {/* Quick Message to Candidate Form */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
            <div className="pb-2 border-b border-stone-200/70">
              <span className="text-[11px] uppercase font-bold tracking-widest text-stone-500">
                Espace Recruteur
              </span>
              <h3 className="text-sm font-bold text-stone-900 mt-0.5">
                Proposer un entretien ou adresser un message
              </h3>
            </div>

            {sentSuccess ? (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Message préparé avec succès !</span>
                </div>
                <p>
                  Merci pour votre intérêt. Vous pouvez également me joindre directement au <strong>{contactInfo.phone}</strong> ou sur <strong>{contactInfo.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Votre Nom & Prénom</label>
                    <input
                      type="text"
                      required
                      value={recruiterName}
                      onChange={(e) => setRecruiterName(e.target.value)}
                      placeholder="Ex: M. Jean Rakoto"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-xs focus:outline-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Entreprise / Organisme</label>
                    <input
                      type="text"
                      required
                      value={recruiterCompany}
                      onChange={(e) => setRecruiterCompany(e.target.value)}
                      placeholder="Ex: Société Tanà Services"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-xs focus:outline-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Objet / Détails de l'échange</label>
                  <textarea
                    rows={3}
                    value={recruiterMsg}
                    onChange={(e) => setRecruiterMsg(e.target.value)}
                    placeholder="Bonjour Avonjanahary, nous souhaiterions échanger avec vous pour un poste d'Assistant(e) Marketing..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-xs focus:outline-stone-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-stone-950 hover:bg-stone-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer la proposition de contact</span>
                </button>
              </form>
            )}

            <p className="text-[11px] text-stone-400 italic text-center pt-1">
              Dossier complet comprenant CV, diplômes certifiés et attestations disponible sur simple demande.
            </p>
          </div>
        </div>

        {/* Closing Professional Note */}
        <div className="p-4 rounded-xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <p className="font-bold text-amber-300">
              « La rigueur d'un informaticien, l'énergie d'un marketeur. »
            </p>
            <p className="text-stone-300 text-[11px]">
              Merci de l'attention portée à cette candidature. À très bientôt pour une future collaboration !
            </p>
          </div>

          <div className="text-stone-400 font-mono-code text-[11px] shrink-0">
            RABARIMALALA A. M. · Antananarivo 2026
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
