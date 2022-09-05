import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css:["@/assets/main.scss"],
	modules: ["nuxt-directus", '@nuxt/image-edge',], 
	head:{
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
},
	directus: {
		url: "https://x6fsjrv2.directus.app",
	},
})
