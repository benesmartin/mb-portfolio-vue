<template>
  <section
    id="projects"
    class="mt-12 mb-8 bg-[var(--card)] p-6 rounded-xl text-[var(--text)] border-2 border-[var(--border)] backdrop-blur z-10 relative scroll-mt-24"
  >
    <h2
      class="text-3xl font-bold mb-6 underline decoration-4 underline-offset-4 decoration-[var(--accent)]"
    >
      {{ t("projects.title") }}
    </h2>

    <!-- newest project, featured full-width -->
    <article
      v-if="featured"
      class="rounded-xl border-2 border-[var(--border)] bg-[var(--bg)] overflow-hidden md:flex mb-4"
    >
      <div class="relative h-48 md:h-auto md:w-2/5 md:shrink-0">
        <img
          :src="featured.img"
          :alt="t(`projects.items.${featured.key}.title`)"
          class="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div class="p-4 md:p-6 flex flex-col justify-center min-w-0 flex-1">
        <div class="mb-2">
          <h3 class="text-xl font-semibold">
            {{ t(`projects.items.${featured.key}.title`) }}
          </h3>
          <div class="flex items-center gap-1.5 text-sm text-[var(--muted)]">
            <span>{{ featured.year }}</span>
            <template v-if="featuredStars !== null">
              <span aria-hidden="true">·</span>
              <a
                :href="featured.links.code"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
                :aria-label="`${featuredStars} stars on GitHub`"
              >
                <Star class="w-3.5 h-3.5" />
                <span>{{ featuredStars }}</span>
              </a>
            </template>
          </div>
        </div>

        <p class="text-[var(--muted)] text-sm mb-3">
          {{ t(`projects.items.${featured.key}.desc`) }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in featured.tags"
            :key="tag"
            class="text-xs px-2 py-1 rounded-full border border-[var(--border)] text-[var(--muted-2)]"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-if="featured.links.demo"
            :href="featured.links.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
            <span>{{ t("projects.demo") }}</span>
          </a>
          <a
            v-if="featured.links.firefox"
            :href="featured.links.firefox"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
            <span>Firefox</span>
          </a>
          <a
            v-if="featured.links.chrome"
            :href="featured.links.chrome"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
            <span>Chrome</span>
          </a>
          <a
            v-if="featured.links.code"
            :href="featured.links.code"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <Github class="w-4 h-4 text-[var(--accent)]" />
            <span>{{ t("projects.code") }}</span>
          </a>
        </div>
      </div>
    </article>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <article
        v-for="project in rest"
        :key="project.id"
        class="rounded-xl border-2 border-[var(--border)] bg-[var(--bg)] overflow-hidden"
      >
        <img
          :src="project.img"
          :alt="t(`projects.items.${project.key}.title`)"
          class="w-full h-48 object-contain"
          loading="lazy"
        />
        <div class="p-4">
          <div class="mb-2">
            <h3 class="text-xl font-semibold">
              {{ t(`projects.items.${project.key}.title`) }}
            </h3>
            <span class="text-sm text-[var(--muted)]">{{ project.year }}</span>
          </div>

          <p class="text-[var(--muted)] text-sm mb-3">
            {{ t(`projects.items.${project.key}.desc`) }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-full border border-[var(--border)] text-[var(--muted-2)]"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
              <span>{{ t("projects.demo") }}</span>
            </a>
            <a
              v-if="project.links.firefox"
              :href="project.links.firefox"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
              <span>Firefox</span>
            </a>
            <a
              v-if="project.links.chrome"
              :href="project.links.chrome"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <ExternalLink class="w-4 h-4 text-[var(--accent)]" />
              <span>Chrome</span>
            </a>
            <a
              v-if="project.links.code"
              :href="project.links.code"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <Github class="w-4 h-4 text-[var(--accent)]" />
              <span>{{ t("projects.code") }}</span>
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
        {{ t("projects.moreOnGithub") }}
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Github, ExternalLink, Star } from "lucide-vue-next";
import nmPreview from "~/assets/nm-preview.webp";
import wmbPayPreview from "~/assets/wmb-pay-preview.webp";
import pkmnPreview from "~/assets/pkmn-preview.webp";
import ytmcPreview from "~/assets/ytmc-preview.webp";

const { t } = useI18n();

interface Project {
  id: string;
  key: string;
  img: string;
  year: number;
  tags: string[];
  links: { demo?: string; firefox?: string; chrome?: string; code?: string };
}

const projects: Project[] = [
  {
    id: "ytm-companion",
    key: "ytmc",
    img: ytmcPreview,
    year: 2026,
    tags: ["WebExtension", "JavaScript", "Reverse engineering", "GPL-3.0"],
    links: {
      firefox: "https://addons.mozilla.org/firefox/addon/companion-for-youtube-music/",
      chrome:
        "https://chromewebstore.google.com/detail/companion-for-youtube-mus/iifmpealppkjdljfhbjcdgdgglflnfkl",
      code: "https://github.com/benesmartin/youtube-music-companion",
    },
  },
  {
    id: "necromancers-mystery",
    key: "nm",
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
    key: "wmbpay",
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
    key: "pokemon",
    img: pkmnPreview,
    year: 2024,
    tags: ["Unity", "C#", "2.5D", "RPG"],
    links: {
      code: "https://github.com/benesmartin/pokemon-sandstone",
    },
  },
];

// newest project leads as the featured card; the rest fill the grid
const [featured, ...rest] = projects;

// live star count for the featured repo; hidden until the fetch succeeds
const featuredStars = ref<number | null>(null);
onMounted(async () => {
  const repo = featured?.links.code?.match(/github\.com\/(.+)/)?.[1];
  if (!repo) return;
  const cached = sessionStorage.getItem(`stars:${repo}`);
  if (cached !== null) {
    featuredStars.value = Number(cached);
    return;
  }
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) return;
    const { stargazers_count } = await res.json();
    featuredStars.value = stargazers_count;
    sessionStorage.setItem(`stars:${repo}`, String(stargazers_count));
  } catch {
    /* stays hidden */
  }
});
</script>
