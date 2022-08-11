import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";
import netlify from "@astrojs/netlify/edge-functions";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind()],
  output: "server",
  adapter: netlify({
    dist: new URL("./dist", import.meta.url),
  }),
});
