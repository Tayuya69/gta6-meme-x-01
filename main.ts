// gta6-meme-x-01 v3 — "Vice City Motel guest folio"
//
// One job: hand the X post address in POST.json over to the grader.
// The input directory comes from MAKEFUN_BOT_DIR (default /bot) and the
// output directory from MAKEFUN_OUTPUT_DIR (default /output).
// Only the standard library is used, and nothing here touches the
// network or the clock, so a run always produces the same result.

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
// Anything else means the folio is pointing at the wrong place, so stop
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
