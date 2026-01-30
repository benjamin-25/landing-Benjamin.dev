// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://benjamin-25.github.io",
  base: "/landing-Benjamin.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
