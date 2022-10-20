import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://thoroffroadtx.com",
    integrations: [
        alpinejs(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        mdx(),
        sitemap(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
