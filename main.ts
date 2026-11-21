// gta6-meme-x-01 v6 — Jury Summons from the Leonida Circuit Court
//
// The follow-up to v5's last will: after marrying GTA VI (v2), divorcing
// it (v4), and dying waiting for it (v5), the next filing puts the wait
// itself on trial — "THE PEOPLE OF LEONIDA v. THE WAIT", with every
// gamer who waited since 17 September 2013 summoned as a juror.
// 4,813 counts of grand theft patience, one per stolen day, and a
// verdict of GUILTY on all 4,813 counts, bail set at $79.99.
// This entry's single task is to pass the X post address stored in
// POST.json along to the grader.
// It reads its input from the directory named by MAKEFUN_BOT_DIR
// (falling back to /bot) and writes the copy to the directory named by
// MAKEFUN_OUTPUT_DIR (falling back to /output). It relies solely on
// built-in modules and never reaches the network or reads the time,
// so every run comes out identical.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "POST.json");
const destPath = join(outDir, "POST.json");

if (!existsSync(sourcePath)) {
  fail(`POST.json not found at ${sourcePath}`);
}

const contents = readFileSync(sourcePath, "utf8");

let parsed: unknown;
try {
  parsed = JSON.parse(contents);
} catch {
  fail("POST.json is not valid JSON");
}

const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof url !== "string" || !url.startsWith("https://")) {
  fail("POST.json must hold a url starting with https://");
}

// The address has to point at an actual post on X, not just any https link:
// https://x.com/<handle>/status/<digits> (or the twitter.com equivalent).
// Anything else means the decree is pointing at the wrong place, so stop
// here instead of handing a useless link to the grader.
const postAddress =
  /^https:\/\/(?:x\.com|twitter\.com)\/[^/\s]+\/status\/\d+$/;
if (!postAddress.test(url)) {
  fail(
    `POST.json url is not a real X post address: ${url} — expected https://x.com/<handle>/status/<digits> or https://twitter.com/<handle>/status/<digits>`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(destPath, contents);
console.log(`Validated X post ${url}; wrote ${destPath}`);
