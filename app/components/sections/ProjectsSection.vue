<template>
  <section
    id="projects"
    class="mt-12 mb-8 bg-[var(--card)] p-6 rounded-xl text-[var(--text)] border-2 border-[var(--border)] backdrop-blur z-10 relative scroll-mt-24"
  >
    <h2
      class="text-3xl font-bold mb-6 underline decoration-4 underline-offset-4 decoration-[var(--accent)]"
    >
      Projects
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <article
        v-for="project in projects"
        :key="project.id"
        class="rounded-xl border-2 border-[var(--border)] bg-[var(--bg)] overflow-hidden"
      >
        <img
          :src="project.img"
          :alt="project.title"
          class="w-full h-48 object-contain"
          loading="lazy"
        />
        <div class="p-4">
          <div class="mb-2">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <span class="text-sm text-[var(--muted)]">{{ project.year }}</span>
          </div>

          <p class="text-[var(--muted)] text-sm mb-3">{{ project.desc }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-full border border-[var(--border)] text-[var(--muted-2)]"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex gap-3">
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
              <span>Demo</span>
            </a>
            <a
              v-if="project.links.code"
              :href="project.links.code"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <Github class="w-4 h-4 text-[var(--accent)]" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </article>
    </div>
    <div class="mt-6 text-center text-[var(--text)]">
      <a
        href="https://github.com/benesmartin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg-hover)] transition-colors"
      >
        <Github class="w-4 h-4 text-[var(--accent)]" />
        More on GitHub
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Github, ExternalLink } from "lucide-vue-next";
import nmPreview from "~/assets/nm-preview.png";
import wmbPayPreview from "~/assets/wmb-pay-preview.png";
import pkmnPreview from "~/assets/pkmn-preview.png";

const projects = [
  {
    id: "necromancers-mystery",
    title: "Necromancer's Mystery",
    desc: "A text-based adventure game featuring pixel-art graphics, turn-based combat, and branching storylines with multiple endings. Includes mini-games, character customization, and custom sound effects.",
    img: nmPreview,
    year: 2023,
    tags: ["HTML/CSS/JS", "Pixel-art", "Pure CSS"],
    links: {
      demo: "https://nm.martinben.es",
      code: "https://github.com/benesmartin/necromancers-mystery",
    },
  },
  {
    id: "wmb-pay",
    title: "WMB Pay",
    desc: "A minimal payment page with dynamic amounts via URL, QR code generation, and mobile-first design.",
    img: wmbPayPreview,
    year: 2025,
    tags: ["React", "Tailwind", "UX", "QR"],
    links: {
      demo: "https://pay.wmb.cz",
      code: "https://github.com/benesmartin/wmb-pay",
    },
  },
  {
    id: "pokemon-sandstone",
    title: "Pokémon Sandstone",
    desc: "A fan-made monster-catching RPG built in Unity. Implemented catching mechanics, turn-based battles, inventory system, progression, and UI. Art & 3D by Pavka5.",
    img: pkmnPreview,
    year: 2024,
    tags: ["Unity", "C#", "2.5D", "RPG"],
    links: {
      code: "https://github.com/benesmartin/pokemon-sandstone",
    },
  },
];
</script>
