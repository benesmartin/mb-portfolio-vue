<script setup lang="ts">
const { t } = useI18n();

const siteUrl = "https://benesmartin.cz";

useSeoMeta({
  title: () => t("seo.title"),
  ogTitle: () => t("seo.title"),
  description: () => t("seo.description"),
  ogDescription: () => t("seo.description"),
  ogType: "website",
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: "summary_large_image",
  twitterImage: `${siteUrl}/og-image.png`,
});

// per-locale canonical, hreflang alternates, og:url/og:locale
const i18nHead = useLocaleHead();

useHead({
  htmlAttrs: () => ({ lang: i18nHead.value.htmlAttrs?.lang }),
  link: () => [...(i18nHead.value.link || [])],
  meta: () => [...(i18nHead.value.meta || [])],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Martin Beneš",
        url: siteUrl,
        jobTitle: "Frontend Developer",
        worksFor: { "@type": "Organization", name: "Localazy" },
        sameAs: [
          "https://github.com/benesmartin",
          "https://www.linkedin.com/in/benesmartincz/",
          "https://addons.mozilla.org/en-US/firefox/user/20017229/",
        ],
      }),
    },
  ],
});
</script>

<template>
  <div class="z-1 min-h-screen relative">
    <NuxtRouteAnnouncer />
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <LayoutParticleBackground />
    </div>
    <div class="max-w-6xl mx-auto px-4">
      <LayoutAppHeader />
      <NuxtPage />
      <LayoutAppFooter />
    </div>
  </div>
</template>
