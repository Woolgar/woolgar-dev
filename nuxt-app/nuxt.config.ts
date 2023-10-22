// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/main.scss"],
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxt/image",
  ],

  runtimeConfig: {
    public: {
      NUXT_PUBLIC_STUDIO_TOKENS: process.env.NUXT_PUBLIC_STUDIO_TOKENS,
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  image: {
    provider: "netlify",
  },
});
