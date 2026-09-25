import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

// Draft pages are still built so they can be shared by link, but keep them out of the sitemap.
const draftSlugs = readdirSync('./src/content/blog')
  .filter((file) => /^isDraft:\s*true\s*$/m.test(readFileSync(`./src/content/blog/${file}`, 'utf8')))
  .map((file) => file.replace(/\.mdx?$/, ''));

// https://astro.build/config
export default defineConfig({
  site: 'https://kamm3r.dev',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif']
    }
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'poimandres' }
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !draftSlugs.some((slug) => page.includes(`/blog/${slug}/`))
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
