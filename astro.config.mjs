// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://game.mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [icon(), sitemap()],
});
