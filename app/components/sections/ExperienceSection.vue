<template>
  <section
    id="experience"
    class="mt-12 mb-8 bg-[var(--card)] p-6 rounded-xl text-[var(--text)] border-2 border-[var(--border)] backdrop-blur z-10 relative scroll-mt-24"
  >
    <h2
      class="text-3xl font-bold mb-6 underline decoration-4 underline-offset-4 decoration-[var(--accent)]"
    >
      Work Experience
    </h2>

    <ol class="relative border-l-2 border-[var(--muted)] ml-3 space-y-8">
      <li
        v-for="item in workExperience"
        :key="item.company"
        class="ml-4"
        :class="item.active ? '' : 'opacity-85'"
      >
        <span class="absolute -left-[9px] mt-1.5 h-4 w-4">
          <span
            v-if="item.active"
            aria-hidden="true"
            class="absolute inset-0 rounded-full bg-green-500/50 motion-safe:animate-ping"
          />
          <span
            class="relative block h-4 w-4 rounded-full border-2 border-[var(--border)]"
            :class="item.active ? 'bg-green-500' : 'bg-red-500'"
          />
        </span>

        <div class="flex items-center gap-2 text-sm text-[var(--muted)]">
          <component
            :is="item.icon"
            class="w-4 h-5 shrink-0 text-[var(--accent)]"
          />
          <span>{{ item.period }}</span>
        </div>

        <h3 class="mt-1 text-xl font-semibold">{{ item.title }}</h3>

        <div class="text-sm text-[var(--muted-2)]">
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold hover:text-[var(--accent)] transition-colors duration-200"
          >
            {{ item.company }}
          </a>
          <span class="mx-1">-</span>
          <span>{{ item.type }}</span>
        </div>

        <p class="mt-1 text-[var(--muted)]">{{ item.desc }}</p>
      </li>
    </ol>
  </section>
</template>

<script lang="ts" setup>
import { ServerCog, MonitorSpeaker, FileText, CodeXml } from "lucide-vue-next";

const workExperience = [
  {
    company: "Localazy",
    link: "https://www.localazy.com",
    icon: CodeXml,
    active: true,
    period: "02/2026 - Present",
    title: "Frontend Developer",
    type: "Remote",
    desc: "Building and optimizing localization platform features for global customers.",
  },
  {
    company: "UJEP, CIT",
    link: "https://cit.ujep.cz",
    icon: ServerCog,
    active: false,
    period: "07/2024 - 01/2026",
    title: "IT Technician",
    type: "On-site",
    desc: "Provided IT support and system administration for the faculty, including server configuration and resolving technical issues for staff and students.",
  },
  {
    company: "FK Teplice",
    link: "https://www.fkteplice.cz",
    icon: MonitorSpeaker,
    active: true,
    period: "10/2022 - Present",
    title: "Match Day Director",
    type: "On-site",
    desc: "Managing the stadium's LED screen and sound system during match days. Started as a cameraman and instant replay operator.",
  },
  {
    company: "Intellmaps",
    link: "https://intellmaps.com",
    icon: CodeXml,
    active: false,
    period: "01/2022 - 02/2022",
    title: "Frontend Developer",
    type: "Remote (Internship)",
    desc: "Improved the web map application and designed new UI components while collaborating with a remote team.",
  },
  {
    company: "JenAkcie",
    link: "https://www.jenakcie.cz",
    icon: FileText,
    active: false,
    period: "03/2021 - 05/2021",
    title: "Copywriter",
    type: "Remote",
    desc: "Wrote stock market articles and investment analyses. Managed content in WordPress.",
  },
];
</script>
