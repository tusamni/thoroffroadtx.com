import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ hostname: "*.b-cdn.net" }],
    },
    site: "https://thoroffroadtx.com",
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        alpinejs(),
        mdx(),
        sitemap(),
    ],
});
