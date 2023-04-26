import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true,
    },
    site: "https://thoroffroadtx.com",
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        alpinejs(),
        mdx(),
        sitemap(),
    ],
});
