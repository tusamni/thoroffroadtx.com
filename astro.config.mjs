import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ hostname: "*.b-cdn.net" }],
    },
    site: "https://thoroffroadtx.com",
    integrations: [alpinejs(), sitemap(), tailwind({ applyBaseStyles: true })],
});
