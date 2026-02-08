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
  ogUrl: siteUrl,
  twitterCard: "summary_large_image",
  twitterImage: `${siteUrl}/og-image.png`,
});

useHead({
  link: [{ rel: "canonical", href: siteUrl }],
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
      <main class="max-w-5xl mx-auto">
        <SectionsHeroSection />
        <SectionsExperienceSection />
        <SectionsProjectsSection />
        <SectionsContactSection />
      </main>
      <LayoutAppFooter />
    </div>
  </div>
</template>
