import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://nayeesubah.github.io",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi", "ur"],
    fallback: { hi: "en", ur: "en" },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
  },
  security: {
    csp: {
      scriptDirective: {
        // 'wasm-unsafe-eval' is required by Pagefind's WebAssembly search engine.
        resources: ["'self'", "'wasm-unsafe-eval'", "https://cdnjs.cloudflare.com", "https://cloud.umami.is", "https://giscus.app"],
        hashes: ["sha256-Hfr8GprmR1ja6c2yMSZGGVHw/vbhc9SfsyDTzL0jR7Y="],
      },
      styleDirective: {
        resources: [
          "'self'",
          { resource: "'unsafe-inline'", kind: "attribute" },
        ],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data: blob: https:",
        "font-src 'self' data:",
        "media-src 'self' https: blob:",
        "connect-src 'self' https://cloud.umami.is https://api.github.com https://giscus.app",
        "frame-src https://www.youtube.com https://www.tiktok.com https://www.instagram.com https://www.google.com",
        "worker-src 'self'",
        "manifest-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
});
