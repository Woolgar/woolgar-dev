import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css:["@/assets/main.scss"],
	modules: ["nuxt-directus"],
	directus: {
		url: "https://x6fsjrv2.directus.app",
	},
})
