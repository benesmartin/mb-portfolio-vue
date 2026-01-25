<script setup lang="ts"></script>

<template>
  <div class="z-1 bg-black min-h-screen relative overflow-hidden">
    <NuxtRouteAnnouncer />
    <LayoutParticleBackground />
    <div class="max-w-6xl mx-auto px-4">
      <LayoutAppHeader />
      <main class="max-w-5xl mx-auto">
        <SectionsHeroSection />
      </main>
    </div>
  </div>
</template>
