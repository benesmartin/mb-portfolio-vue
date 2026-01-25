<template>
  <header
    class="sticky top-4 z-20 cal-sans-regular mt-4 bg-[var(--card)] p-2 rounded-xl text-[var(--text)] border-2 border-[var(--border)] frosted"
  >
    <nav class="flex items-center">
      <div class="flex items-center mr-auto">
        <img
          src="~/assets/mb-logo.png"
          alt="Martin Beneš logo"
          class="rounded-md border-2 border-[var(--border)] w-10 h-10"
        />
        <h1 class="ml-4 text-xl">Martin Beneš</h1>
      </div>
      <ul
        class="md:flex hidden justify-evenly gap-x-8 mr-5 text-[var(--muted-more)]"
      >
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="hover:text-[var(--accent)] transition-colors duration-200"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
      <button
        class="md:hidden w-8 h-8 flex items-center justify-center transition-transform duration-200 text-[var(--muted)]"
        @click="isMobileNav = !isMobileNav"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMobileNav"
        type="button"
      >
        <X v-if="isMobileNav" class="inline-block w-10 h-10" />
        <Menu v-else class="inline-block w-10 h-10" />
      </button>
    </nav>
  </header>
  <div
    v-if="isMobileNav"
    role="dialog"
    aria-modal="true"
    class="fixed inset-x-4 md:hidden z-[100] cal-sans-regular bg-[var(--card)] p-2 rounded-xl text-[var(--text)] border-2 border-[var(--border)] frosted top-[calc(6rem+env(safe-area-inset-top))]"
  >
    <ul
      class="flex flex-col justify-center items-center gap-y-4 text-[var(--muted-more)]"
    >
      <li v-for="item in navItems" :key="item.href">
        <a
          :href="item.href"
          class="hover:text-[var(--accent)] transition-colors duration-200 text-lg"
          @click="isMobileNav = false"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Menu, X } from "lucide-vue-next";

const isMobileNav = ref(false);

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>
