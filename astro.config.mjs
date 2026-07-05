import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"; // 1. Import the sitemap integration

// https://astro.build/config
export default defineConfig({
  // 2. Add your live deployment URL here so Astro can build the paths correctly
  site: "https://frappgiveaways.vercel.app/", 

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  // 3. Add sitemap() to your existing integrations list
  integrations: [react(), tailwind(), sitemap()], 
});