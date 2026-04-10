// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pre-toi22.geandev.dev/",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
