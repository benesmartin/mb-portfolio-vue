<template>
  <a
    href="https://github.com/benesmartin/mb-portfolio-vue/commits"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:text-[var(--accent)] transition-colors duration-200"
  >
    <div class="text-[var(--muted-2)] text-xs mt-2 flex items-center">
      <Github class="w-4 h-4 inline mr-1" />
      {{ t("footer.lastCommit") }}:
      <span v-if="status === 'pending'" class="ml-1">{{
        t("footer.loading")
      }}</span>
      <span v-else-if="status === 'error'" class="ml-1">{{
        t("footer.error")
      }}</span>
      <span v-else class="ml-1">{{ formattedDate }}</span>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { Github } from "lucide-vue-next";

const { t, locale } = useI18n();

const { data: rawDate, status } = await useAsyncData("last-commit", async () => {
  const data = await $fetch<{ commit: { author: { date: string } } }[]>(
    "https://api.github.com/repos/benesmartin/mb-portfolio-vue/commits",
  );
  return data?.[0]?.commit?.author?.date ?? null;
});

const formattedDate = computed(() => {
  if (!rawDate.value) return null;
  return new Date(rawDate.value).toLocaleDateString(locale.value);
});
</script>
