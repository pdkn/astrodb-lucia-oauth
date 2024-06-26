import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  integrations: [db()],
  vite: {
    optimizeDeps: {
      exclude: ["astro:db"],
    },
  },
});
