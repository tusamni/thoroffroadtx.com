import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), alpinejs()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});