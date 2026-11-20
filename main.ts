// gta6-meme-x-01 entry, Node 22, standard library only.
//
// The entry itself is a post on X, not this program. The post carries the
// meme picture (meme.png: a gamer staring at a GTA VI install stuck at 99%,
// make.fun's ghost sitting on the couch beside him) with a caption, a tag of
// @makefunai, a link to the bounty and the entrant's play code. The house
// reads the post from X, builds the dossier the judge sees, and ranks it
// against the other posts. All this program has to do is hand the house the
// post's address: it copies POST.json from the repository root to /output,
// where the gate reads it. Nothing else it writes is judged.
//
// POST.json is filled in only after the post exists on X, so until then this
// program has nothing to copy and exits 1. That is expected: post first,
// write the address into POST.json, then run it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`cannot copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
