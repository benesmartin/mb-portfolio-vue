// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxtjs/sitemap"],
  site: {
    url: "https://benesmartin.cz",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
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
    baseUrl: "https://benesmartin.cz",
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "English" },
      { code: "cs", language: "cs-CZ", file: "cs.json", name: "Čeština" },
    ],
    defaultLocale: "en",
    langDir: "locales",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  css: ["flag-icons/css/flag-icons.min.css"],
});
