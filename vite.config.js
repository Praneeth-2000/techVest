import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import PrerenderPlugin from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// Phase 1 (static routes only) — dynamic :slug/:id routes are handled in Phase 2.
const PRERENDER_ROUTES = [
  '/',
  '/about', '/about/techvest', '/about/leadership', '/about/partnership', '/about/events',
  '/insights', '/insights/blog',
  '/insights/blog/iso-42001-vs-nist-ai-rmf-vs-eu-ai-act-vs-oecd-ai-principles',
  '/insights/2024-global-financial-services', '/insights/genai-poc-breaks-production',
  '/insights/ibor-abor-2024-outlook', '/insights/front-office-implementation-guide',
  '/resources', '/resources/white-papers', '/resources/case-studies', '/resources/webinars',
  '/careers', '/careers/opportunities', '/careers/benefits-culture', '/careers/programs-learning',
  '/contact', '/privacy-policy',
  '/services', '/services/consulting', '/services/professional', '/services/delivery',
  '/services/ai-engineering', '/services/ai-academy', '/services/investment-management',
  '/services/data-engineering', '/services/analytics-data-science', '/services/ai-governance',
  '/services/ai-governance/iso-42001-readiness-assessment',
  '/services/ai-governance/iso-42001-audit-checklist',
  '/industries', '/industries/financial-services', '/industries/retail',
  '/frameworks', '/frameworks/ai-lifecycle', '/frameworks/ai-maturity-framework',
  '/frameworks/ai-governance-trust-framework',
]

// Phase 2 — dynamic :slug routes sourced from static data files (src/data/*.js), so a build-time
// snapshot stays accurate until the next deploy. Career job-detail pages (/careers/opportunities/:id)
// are deliberately excluded: that content is fetched live from a production API independent of
// deploys, so prerendering it would risk showing stale/closed postings until the next rebuild.
const PRERENDER_DYNAMIC_ROUTES = [
  // Blog posts (src/data/blogDataComplete.js) — excludes the one slug already served by a
  // hardcoded static route (iso-42001-vs-nist-ai-rmf-vs-eu-ai-act-vs-oecd-ai-principles).
  '/insights/blog/alternative-investments-asia-pacific',
  '/insights/blog/best-practices-front-office',
  '/insights/blog/crd-implementation',
  '/insights/blog/front-to-back-integration',
  '/insights/blog/genai-poc-breaks-production',
  '/insights/blog/generative-ai-asset-management',
  '/insights/blog/hiring-training-retention',
  '/insights/blog/ibor-and-abor-impacts-2024',
  '/insights/blog/next-big-thing-financial-services',
  '/insights/blog/selecting-consulting-partner',
  '/insights/blog/simcorp-implementation-testing',
  '/insights/blog/snowflake-data-management',
  '/insights/blog/trends-in-global-financial-services-2024',
  '/insights/blog/what-iso-42001-reveals-about-ai',

  // Consulting services (src/data/servicesData.js -> advisoryServices)
  '/services/consulting/strategic-evaluation',
  '/services/consulting/strategy-and-selection-of-systems',
  '/services/consulting/assessment-and-selection-of-outsourcing-solutions',
  '/services/consulting/benchmarking-solutions',

  // Professional services (same advisoryServices data, different route/canonical)
  '/services/professional/strategic-evaluation',
  '/services/professional/strategy-and-selection-of-systems',
  '/services/professional/assessment-and-selection-of-outsourcing-solutions',
  '/services/professional/benchmarking-solutions',

  // Delivery services (src/data/servicesData.js -> deliveryServices)
  '/services/delivery/program-and-project-management',
  '/services/delivery/systems-implementation-and-integration',
  '/services/delivery/outsourcing-transition',

  // AI engineering services (src/data/aiEngineeringData.js -> aiEngineeringServices)
  '/services/ai-engineering/gen-ai-advisory-services',
  '/services/ai-engineering/gen-ai-ecosystem-innovation',
  '/services/ai-engineering/model-engineering-application',
  '/services/ai-engineering/llm-based-application-development',
  '/services/ai-engineering/gen-ai-platform-integration',

  // Industry/expertise pages (src/data/expertiseData.js), reachable at two base paths
  '/industries/front-office',
  '/industries/middle-office',
  '/industries/back-office',
  '/industries/data-management',
  '/industries/alternative-operations',
  '/industries/outsourcing',
  '/service/front-office',
  '/service/middle-office',
  '/service/back-office',
  '/service/data-management',
  '/service/alternative-operations',
  '/service/outsourcing',
]

// Keep a clean copy of the un-prerendered index.html as dist/app-shell.html.
//
// Why: the prerender below overwrites dist/index.html with the HOME page snapshot. The .htaccess
// fallback for any URL that has no prerendered file (job detail pages, typos, removed pages) used
// to point at index.html, so every one of those URLs was served the home page's content with a
// 200 — duplicate content and soft 404s for crawlers, a flash of the home page for visitors, and
// a guaranteed hydration mismatch (hydrateRoot attaching e.g. a job page to home-page markup).
// .htaccess now falls back to app-shell.html instead: its #root is empty, so main.jsx takes the
// createRoot path and renders the requested route from scratch.
//
// Runs in generateBundle with order 'post' and is listed BEFORE PrerenderPlugin, whose own 'post'
// generateBundle removes the original index.html from the bundle; same-order hooks run in plugin
// order, so this copy is taken first.
const appShellPlugin = () => ({
  name: 'app-shell',
  generateBundle: {
    order: 'post',
    handler(_options, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') {
        this.error('app-shell: index.html not found in the bundle')
      }
      this.emitFile({ type: 'asset', fileName: 'app-shell.html', source: index.source })
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    appShellPlugin(),
    PrerenderPlugin({
      routes: [...PRERENDER_ROUTES, ...PRERENDER_DYNAMIC_ROUTES],
      // Asset filenames containing spaces (e.g. "Governance Structure.png") are requested by the
      // browser URL-encoded (%20); decode before the plugin's internal bundle lookup so those
      // assets resolve instead of silently falling back to index.html mid-render.
      urlModifier: (url) => decodeURIComponent(url),
      renderer: new PuppeteerRenderer({
        renderAfterTime: 4000,
        timeout: 30000,
        maxConcurrentRoutes: 1,
        // Scroll the whole page before the snapshot is taken.
        //
        // Why: the site animates content in with Framer Motion `whileInView`, which only fires
        // once an element enters the viewport. A headless browser never scrolls, so everything
        // below the first screen never animates and is serialised at `opacity: 0` — invisible to
        // crawlers, which do not run JS. Measured before this hook: only 13,282 of 54,275 words
        // (24.5%) and 1 in 10 headings were readable in the prerendered HTML.
        //
        // All 317 `whileInView` usages set `viewport={{ once: true }}`, so once an element has
        // animated in it stays visible — the walk down the page is enough to reveal everything,
        // and returning to the top afterwards cannot hide any of it again. (Twelve of them used
        // `once: false` until they were changed in this same commit; `once: false` re-hides an
        // element when it scrolls out of view, which would have undone the walk.)
        //
        // The final scrollTo(0, 0) exists so the snapshot shows the page as a visitor first sees
        // it, rather than scrolled to the bottom.
        //
        // pageHandler runs after page.goto() and before renderAfterTime + page.content(), so the
        // 4s wait still applies afterwards and lets the animations settle.
        pageHandler: async (page) => {
          await page.evaluate(async () => {
            const pause = (ms) => new Promise((r) => setTimeout(r, ms));

            // pageHandler fires as soon as navigation resolves, which is BEFORE React has
            // rendered. Scrolling then covers an almost-empty document and triggers nothing,
            // so wait for the page to reach its real height first.
            const root = document.getElementById('root');
            for (let i = 0; i < 60; i++) {
              if (root && root.childElementCount > 0 &&
                  document.body.scrollHeight > window.innerHeight * 1.5) break;
              await pause(100);
            }
            await pause(400); // let the first paint settle before measuring height

            // Walk the full page so every `whileInView` element passes through the viewport.
            // Re-read scrollHeight each pass: sections expand as their content animates in.
            const step = Math.max(200, Math.floor(window.innerHeight * 0.6));
            for (let y = 0; y <= document.body.scrollHeight; y += step) {
              window.scrollTo(0, y);
              await pause(90);
            }
            window.scrollTo(0, document.body.scrollHeight);
            await pause(400);
            window.scrollTo(0, 0);
            await pause(300);
          });
        },
        launchOptions: {
          headless: true,
          // Windows/CI-safe flags: sandboxing frequently fails to initialize silently
          // (empty stderr, "Code: 0") on locked-down or restricted Windows accounts.
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
          // Portable across machines/CI: use PUPPETEER_EXECUTABLE_PATH when set (e.g. to
          // point at an already-installed browser like Edge, avoiding a Chrome download);
          // otherwise omit the key entirely so Puppeteer falls back to its own
          // auto-downloaded/cached browser. Do NOT hardcode a machine-specific path here.
          ...(process.env.PUPPETEER_EXECUTABLE_PATH && {
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
          }),
        },
      }),
    }),
  ],
  server: {
    allowedHosts: true,
    proxy: {
      '/chatbot-api': {
        target: 'https://techvest-chatbot-api-2026.azurewebsites.net/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chatbot-api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}) 