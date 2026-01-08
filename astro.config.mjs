import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://thoroffroadtx.com",
	integrations: [alpine(), sitemap()],
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			exclude: ["alpinejs"]
		}
	}
});