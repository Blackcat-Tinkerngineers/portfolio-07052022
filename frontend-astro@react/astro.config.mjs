import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";


export default ({
  integrations: [preact(), react(), tailwind()],
  output: "server",
  adapter: netlify(
    {
      dist: new URL("./dist", import.meta.url),
    }
  ),
  renderers: ["@astrojs/renderer-react"],
});
