import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bruto.omise.com.ar", // TODO: el mismo dominio que site.url en src/content/site.ts
  vite: { plugins: [tailwindcss()] },
});
