<template>
  <section
    id="contact"
    class="mt-12 mb-8 bg-[var(--card)] p-6 rounded-xl text-[var(--text)] border-2 border-[var(--border)] backdrop-blur z-10 relative scroll-mt-24"
  >
    <h2
      class="text-3xl font-bold mb-6 underline decoration-4 underline-offset-4 decoration-[var(--accent)]"
    >
      {{ t("contact.title") }}
    </h2>

    <p class="text-[var(--muted)] mb-6">
      {{ t("contact.subtitle") }}
    </p>

    <div class="flex flex-col sm:flex-row sm:items-center gap-4">
      <a
        href="mailto:martin@benesmartin.cz"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg-hover)] transition-colors"
      >
        <Mail class="w-5 h-5 text-[var(--accent)]" />
        <span>martin@benesmartin.cz</span>
      </a>

      <div class="flex gap-3">
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg-hover)] transition-colors text-[var(--muted)] hover:text-[var(--accent)]"
        >
          <component :is="social.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Mail, Github, Linkedin, Instagram } from "lucide-vue-next";

const { t } = useI18n();

const socials = [
  {
    icon: Github,
    href: "https://github.com/benesmartin",
    label: "GitHub",
  },
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
