<script setup lang="ts"></script>

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
      </main>
    </div>
  </div>
</template>
