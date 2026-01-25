<template>
  <div class="fixed inset-0 z-0 pointer-events-none">
    <NuxtParticles id="tsparticles" :options="options" />
  </div>
</template>

<script setup lang="ts">
const options = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: false,
  particles: {
    color: {
      value: ["#ffffff", "#00a8f1"],
    },
    move: {
      enable: true,
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
    opacity: { value: 0.4 },
  },
};
</script>
