/**
 * Downloads every photo in src/data/images.ts into public/images at the widths
 * the manifest asks for. Idempotent: existing files are skipped, so re-running
 * after adding one entry only fetches that entry.
 *
 *   npm run images          # fetch anything missing
 *   npm run images -- --force   # re-fetch everything
 */
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'images');
const force = process.argv.includes('--force');

// Parse the manifest without a TS toolchain: pull out slug/id/widths triples.
const src = await readFile(path.join(root, 'src', 'data', 'images.ts'), 'utf8');
const re = /\{\s*slug:\s*'([^']+)',\s*id:\s*'([^']+)',\s*widths:\s*\[([^\]]+)\]/g;
const entries = [...src.matchAll(re)].map(([, slug, id, widths]) => ({
  slug,
  id,
  widths: widths.split(',').map((w) => Number(w.trim())).filter(Boolean),
}));

if (!entries.length) {
  console.error('No photo entries found in src/data/images.ts');
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

const exists = async (p) => {
  try { const s = await stat(p); return s.size > 1024; } catch { return false; }
};

let fetched = 0, skipped = 0, failed = 0;

const jobs = [];
for (const e of entries) {
  for (const w of e.widths) {
    jobs.push({ slug: e.slug, id: e.id, w });
  }
}

// Modest concurrency so we stay polite to the CDN.
const CONCURRENCY = 6;
let cursor = 0;

async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor++];
    const file = path.join(outDir, `${job.slug}-${job.w}.jpg`);
    if (!force && (await exists(file))) { skipped++; continue; }
    const url = `https://images.unsplash.com/${job.id}?auto=format&fit=crop&w=${job.w}&q=72&fm=jpg`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 2048) throw new Error(`suspiciously small (${buf.length} bytes)`);
      await writeFile(file, buf);
      fetched++;
      process.stdout.write('.');
    } catch (err) {
      failed++;
      console.error(`\n  FAILED ${job.slug}@${job.w}: ${err.message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`\nimages: ${fetched} fetched, ${skipped} already present, ${failed} failed`);
if (failed) process.exit(1);
