import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ hostname: "*.b-cdn.net" }],
    },
    site: "https://thoroffroadtx.com",
    integrations: [alpinejs(), mdx(), sitemap()],
});
