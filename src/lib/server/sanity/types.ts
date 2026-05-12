import type { SiteLocale } from '$lib/i18n/site-locale';

export type SanitySitePortfolio = {
  hero?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  features?: Array<{
    icon?: string;
    title?: string;
    description?: string;
  }>;
  pricing?: Array<{
    name?: string;
    price?: string;
    period?: string;
    description?: string;
    features?: string[];
    cta?: string;
    featured?: boolean;
  }>;
  faq?: Array<{
    question?: string;
    answer?: string;
  }>;
  testimonials?: Array<{
    name?: string;
    role?: string;
    content?: string;
    avatar?: string;
  }>;
  socialProof?: {
    proof?: string;
    rating?: string;
  };
};

export type SanitySitePortfolioContext = {
  projectId: string;
  dataset: string;
  baseUrl: string;
  locale: SiteLocale;
};
