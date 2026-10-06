export interface ContactInfo {
  fullName: string;
  targetRole: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolioUrl?: string;
  availability: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  tasks: string[];
  transferableSkills: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  level: string;
  marketingApplication: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface CampaignReportRow {
  id: string;
  campaign: string;
  channel: string;
  date: string;
  status: 'Terminée' | 'En cours' | 'Planifiée';
  reach: string;
  engagement: string;
  conversion: string;
  resultSummary: string;
  nextAction: string;
}
