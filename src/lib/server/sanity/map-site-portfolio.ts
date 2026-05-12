import type { SanitySitePortfolio } from './types';

export function mapSanitySitePortfolio(
  raw: SanitySitePortfolio | null | undefined,
  defaults: Record<string, unknown>
): Record<string, unknown> {
  if (!raw) {
    return defaults;
  }

  const result: Record<string, unknown> = { ...defaults };

  if (raw.hero) {
    result.hero = { ...((defaults.hero as Record<string, unknown>) || {}), ...raw.hero };
  }
  if (raw.features && raw.features.length > 0) {
    result.features = raw.features.map((f) => ({
      icon: f.icon || '✨',
      title: f.title || '',
      description: f.description || ''
    }));
  }
  if (raw.pricing && raw.pricing.length > 0) {
    result.pricing = raw.pricing.map((p) => ({
      name: p.name || '',
      price: p.price || '',
      period: p.period || '',
      description: p.description || '',
      features: p.features || [],
      cta: p.cta || '',
      featured: p.featured || false
    }));
  }
  if (raw.faq && raw.faq.length > 0) {
    result.faq = raw.faq.map((f) => ({
      question: f.question || '',
      answer: f.answer || '',
      open: false
    }));
  }
  if (raw.testimonials && raw.testimonials.length > 0) {
    result.testimonials = raw.testimonials.map((t) => ({
      name: t.name || '',
      role: t.role || '',
      content: t.content || '',
      avatar: t.avatar || ''
    }));
  }

  return result;
}
