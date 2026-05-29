import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID || '5zhz6irf',
    dataset: process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || 'production'
  },
  studioHost: process.env.SANITY_STUDIO_HOST || 'moisesvalero-portfolio',
  deployment: {
    autoUpdates: true,
    appId: 'sf0j1droxrabn7xv2bxz1idb'
  }
});
