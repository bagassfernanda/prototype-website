/**
 * Core Type Definitions for PT Artavel Official Website
 */

export type ColorThemeAccent = 'blue' | 'green' | 'yellow' | 'orange';

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface DeploymentOption {
  id: 'on-premise' | 'private-cloud' | 'hybrid';
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  productFamily: 'Smarchlink®' | 'Artavel Core';
  productName?: string;
  shortDescription: string;
  heroDescription: string;
  iconName: string;
  accentColor: ColorThemeAccent;
  targetAudience: string[];
  problemsSolved: string[];
  keyOutcomes: string[];
  capabilities: Capability[];
  workflowSteps: WorkflowStep[];
  deploymentOptions: DeploymentOption[];
  integrations: string[];
  securityFeatures: string[];
  faqs: FAQItem[];
}

export interface Sector {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  targetOrganizations: string[];
  keyChallenges: string[];
  recommendedSolutions: string[];
  expectedImpacts: string[];
}

export interface CaseStudyMetric {
  value: string;
  unit: string;
  description: string;
  verified: boolean;
  source?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  anonymousClientLabel: string;
  publicationPermission: boolean; // if false, use anonymousClientLabel
  sector: string;
  region: string;
  challenge: string;
  solutionProvided: string;
  results: CaseStudyMetric[];
  implementationDuration: string;
  productsUsed: string[];
  testimonial?: {
    quote: string;
    authorName: string;
    authorRole: string;
    verified: boolean;
  };
  verified: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentMarkdown: string;
  category: 'Kearsipan Digital' | 'Pelayanan Publik' | 'Tata Naskah' | 'Keamanan Data' | 'Transformasi Digital';
  publishedAt: string;
  readTimeMinutes: number;
  authorName: string;
  authorRole: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  verified: boolean;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  verified: boolean;
}

export interface ContactFormValues {
  fullName: string;
  organizationName: string;
  role: string;
  email: string;
  phoneNumber?: string;
  needCategory: string;
  summary: string;
  estimatedTimeline?: string;
  privacyAgreed: boolean;
  honeypot?: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  referenceId?: string;
  message: string;
  errors?: Record<string, string>;
}
