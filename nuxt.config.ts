// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "preload",
          href: "/fonts/calsans.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
      ],
      htmlAttrs: {
        class: "hydrated",
      },
    },
  },
});
