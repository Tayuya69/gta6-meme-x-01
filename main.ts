// gta6-meme-x-01 v2 — "Till delay do us part"
// Reads the X post address from POST.json and hands it to the grader
// by placing a copy in the output directory the grader checks.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

try {
  const post = readFileSync(source, "utf8");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, post);
  console.log(`Wrote ${target}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
