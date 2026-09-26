export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  priceInCents: number;
  polarProductId?: string;
  stripePriceId?: string;
}

export const CREDIT_PACKS: CreditPack[] = [
  {
    id: 'pack-starter',
    name: 'Starter Pack',
    credits: 100,
    priceInCents: 1000
  },
  {
    id: 'pack-pro',
    name: 'Pro Pack',
    credits: 500,
    priceInCents: 4000
  },
  {
    id: 'pack-scale',
    name: 'Scale Pack',
    credits: 2000,
    priceInCents: 12000
  }
];

export const paymentConfig = {
  provider: process.env.PAYMENT_PROVIDER || 'polar',
  polar: {
    accessToken: process.env.POLAR_ACCESS_TOKEN || '',
    webhookSecret: process.env.POLAR_WEBHOOK_SECRET || '',
    server: process.env.POLAR_SERVER || 'sandbox'
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    publishableKey: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
  }
};
