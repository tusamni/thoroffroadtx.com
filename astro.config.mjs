import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        alpinejs(),
        image(),
        mdx(),
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
