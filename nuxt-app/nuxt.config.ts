// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/main.scss"],
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxthq/studio", "@nuxt/image"],

  runtimeConfig: { 

  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
