import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://thoroffroadtx.com",
	integrations: [alpine(), sitemap(), tailwind({
		applyBaseStyles: true
	})],
	adapter: netlify()
});