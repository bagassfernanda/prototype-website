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

export type SolutionCategoryId =
  | 'ai-analytics-monitoring'
  | 'smart-education'
  | 'retail-fnb'
  | 'cyber-security'
  | 'digital-government-enterprise'
  | 'public-service'
  | 'document-management'
  | 'education'
  | 'pos-retail'
  | 'security-integration'
  | 'cctv-iot-monitoring'
  | 'application-uiux';

export interface SolutionCategory {
  id: SolutionCategoryId;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: ColorThemeAccent;
  path: string;
  relatedProductIds: string[];
}

export interface ProductModule {
  id: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ProductShowcase {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductDifferentiator {
  id: string;
  title: string;
  description: string;
}

export type ProductOwnership = 'artavel-product' | 'artavel-solution' | 'partner-technology';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  categoryId: SolutionCategoryId;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  iconName: string;
  accentColor: ColorThemeAccent;
  ownership: ProductOwnership;
  technologyTags: string[];
  statusLabel?: string;
  detailPath: string;
  brochureHref?: string;
  demoUrl?: string;
  demoConfigKey?: string;
  targetUsers: string[];
  challenges: string[];
  outcomes: string[];
  modules: ProductModule[];
  differentiators: ProductDifferentiator[];
  showcase: ProductShowcase[];
  integrations: string[];
  securityFeatures: string[];
  faqs: FAQItem[];
  metadata: {
    title: string;
    description: string;
  };
  redirectPath?: string;
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
  relatedProductIds?: string[];
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
  category:
    | 'AI, Analytics & Monitoring'
    | 'Pendidikan Digital'
    | 'Digital Education'
    | 'Retail & F&B'
    | 'Cyber Security'
    | 'Digital Government'
    | 'Teknologi & Transformasi Digital'
    | 'Technology & Digital Transformation';
  publishedAt: string;
  readTimeMinutes: number;
  authorName: string;
  authorRole: string;
  relatedProductIds?: string[];
  relatedSolution?: {
    label: string;
    path: string;
  };
  ctaLabel?: string;
  ctaPath?: string;
  metadata?: {
    title: string;
    description: string;
  };
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
