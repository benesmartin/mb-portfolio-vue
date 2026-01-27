<template>
  <section
    id="home"
    class="hero z-10 relative text-[var(--text)] w-full text-center cal-sans-regular mt-2 md:p-10 p-2 min-h-[60vh] flex items-center flex-col justify-center scroll-mt-24"
  >
    <h1 class="md:text-8xl text-6xl">
      Martin <span class="text-[var(--accent)]">Beneš</span>
    </h1>
    <p class="roboto-regular md:text-xl text-base mt-2 text-[var(--muted)]">
      Frontend Developer
    </p>
    <div class="md:mt-6 mt-4 w-full flex justify-center gap-4">
      <a
        href="#projects"
        class="bg-[var(--accent)] py-2 px-6 md:text-lg text-sm rounded-full font-medium hover:scale-105 transition-all duration-300"
      >
        View Projects
      </a>
    </div>
    <div class="mt-6 md:mt-8 flex items-center gap-4 text-[var(--muted)]">
      <a
        v-for="social in socials"
        :key="social.href"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-[var(--accent)] transition-colors duration-200"
        :aria-label="social.label"
      >
        <component :is="social.icon" class="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Github, Linkedin, Instagram } from "lucide-vue-next";

const socials = [
  { icon: Github, href: "https://github.com/benesmartin", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/benesmartincz/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/martinbenes05",
    label: "Instagram",
  },
];
</script>
