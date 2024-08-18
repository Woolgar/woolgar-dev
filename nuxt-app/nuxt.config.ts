// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/main.scss"],
  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-security"
  ],

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },

  // Allow nuxt security to work with devtools
  security: {
    enabled: false,
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
  site: {
    url: 'https://woolgar.dev',
    name: '',
    description: 'Welcome to my little corner of the internet',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
