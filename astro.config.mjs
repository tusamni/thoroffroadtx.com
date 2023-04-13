import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true,
    },
    image: {
        service: "astro/assets/services/sharp",
    },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        alpinejs(),
        mdx(),
    ],
});
