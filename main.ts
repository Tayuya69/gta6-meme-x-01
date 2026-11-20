// gta6-meme-x-01 v2 — "Till delay do us part"
// Hands the X post address over to the grader: nothing fancy, just
// the one file the entry is judged on, delivered where it is looked for.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const postFile = join(repoRoot, "POST.json");
const outDir = "/output";

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// The post address is the whole entry, so it travels as-is.
copyFileSync(postFile, join(outDir, "POST.json"));
console.log("POST.json copied to /output");
