// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fivestarreno.ca',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto', format: 'directory' },
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-CA', ko: 'ko-CA' } },
    }),
  ],
  devToolbar: { enabled: false },
});
