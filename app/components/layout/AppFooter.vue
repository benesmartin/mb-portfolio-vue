<template>
  <footer
    class="mt-16 mb-6 bg-[var(--card)] border-2 border-[var(--border)] rounded-xl text-[var(--muted)] backdrop-blur p-3"
  >
    <div class="flex flex-col md:flex-row items-center gap-3 md:gap-4">
      <div class="mr-auto text-sm">
        © 2021-{{ year }}
        <span class="text-[var(--text)]">Martin Beneš</span>
        <UtilityLastCommitDate />
      </div>

      <a
        href="#home"
        class="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg-hover)]/80 transition-colors"
      >
        <ArrowUp class="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
        <span class="text-[var(--text)]">{{ t("footer.backToTop") }}</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ArrowUp } from "lucide-vue-next";

const { t } = useI18n();
const year = new Date().getFullYear();
</script>
