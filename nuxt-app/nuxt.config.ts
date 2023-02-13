
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/main.scss"],
	modules: ["nuxt-directus", '@nuxt/image-edge',],
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},

	image: {
		provider: 'netlify',
	},
	directus: {
		url: "https://x6fsjrv2.directus.app",
	},
})
