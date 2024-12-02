// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	$production: {
		routeRules: {
			"/**": { isr: true },
		},
	},
	alias: {
		"~": "../src",
	},

	devtools: { enabled: true },
	dir: {
		pages: "./src/app/routes",
		layouts: "./src/app/layouts",
		public: "./src/shared/pubic",
		plugins: "./src/shared/plugins",
	},
	modules: [
		"@nuxt/image",
		"@pinia/nuxt",
		"@formkit/auto-animate",
		"@nuxtjs/storybook",
		"@nuxtjs/tailwindcss",
	],
	pinia: {
		storesDirs: ["./src/app/stores/**"],
	},
	typescript: {
		typeCheck: true,
		strict: false,
	},
});
