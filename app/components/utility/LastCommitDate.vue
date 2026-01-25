<template>
  <a
    href="https://github.com/benesmartin/mb-portfolio-vue/commits"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:text-[var(--accent)] transition-colors duration-200"
  >
    <div class="text-[var(--muted-2)] text-xs mt-2 flex items-center">
      <Github class="w-4 h-4 inline mr-1" />
      Last commit:
      <span v-if="status === 'pending'" class="ml-1">Loading...</span>
      <span v-else-if="status === 'error'" class="ml-1">Error</span>
      <span v-else class="ml-1">{{ date }}</span>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { Github } from "lucide-vue-next";

const { data: date, status } = await useAsyncData("last-commit", async () => {
  const data = await $fetch<{ commit: { author: { date: string } } }[]>(
    "https://api.github.com/repos/benesmartin/mb-portfolio-vue/commits",
  );
  if (data?.[0]?.commit?.author?.date) {
    return new Date(data[0].commit.author.date).toLocaleDateString();
  }
  return null;
});
</script>
