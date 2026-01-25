import { readFileSync, writeFileSync } from "node:fs";

function replaceInFile(path, search, replace) {
  const s = readFileSync(path, "utf8");
  if (!s.includes(search)) {
    console.warn(`[patch] ${path} already patched`);
    return false;
  }
  writeFileSync(path, s.replace(search, replace), "utf8");
  console.log(`[patch] ${path} patched`);
  return true;
}

replaceInFile(
  "node_modules/nuxt-particles/dist/module.mjs",
  'nuxt: "^3.7.0"',
  'nuxt: ">=3.7.0"',
);
