#!/usr/bin/env node
// Lists every [[PLACEHOLDER: ...]] (or ph("...")) still in the source.
// Exits 1 if any remain, so it can gate a release: `npm run check:placeholders`.
// `--built` instead checks the production build output: no placeholder may
// leak into shipped HTML (runs automatically after `npm run build`).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const built = process.argv.includes("--built");

function walk(dir, exts, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, exts, out);
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

if (built) {
  if (process.env.VERCEL_ENV === "preview" || process.env.SHOW_PLACEHOLDERS === "1") process.exit(0);
  const leaks = [
    ...walk(join(root, ".next/server/app"), [".html", ".rsc", ".body"]),
    ...walk(join(root, ".next/static"), [".js"]),
  ].filter((f) => /\[\[PLACEHOLDER: [\w(]/.test(readFileSync(f, "utf8")));
  if (leaks.length) {
    console.error("Placeholders leaked into the production build (HTML or client JS):");
    for (const f of leaks) console.error("  " + relative(root, f));
    process.exit(1);
  }
  console.log("check:placeholders --built: no placeholders in production HTML.");
  process.exit(0);
}

const re = /\[\[PLACEHOLDER:\s*([^\]]*)\]\]|\bph\(\s*(["'`])((?:\\.|(?!\2).)*)\2/g;
const files = [...walk(join(root, "src"), [".ts", ".tsx"]), join(root, "public/llms.txt")];
const hits = [];
for (const f of files) {
  if (f.endsWith("placeholder.ts")) continue;
  readFileSync(f, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const m of line.matchAll(re)) hits.push(`${relative(root, f)}:${i + 1}  ${(m[1] ?? m[3]).trim()}`);
    });
}
if (hits.length === 0) {
  console.log("No placeholders left.");
  process.exit(0);
}
console.log(`${hits.length} placeholder(s) still to fill:\n`);
for (const h of hits) console.log("  " + h);
process.exit(1);
