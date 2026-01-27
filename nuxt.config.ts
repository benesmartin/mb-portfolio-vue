// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
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
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "English" },
      { code: "cs", language: "cs-CZ", file: "cs.json", name: "Čeština" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
  },
  css: ["flag-icons/css/flag-icons.min.css"],
});
