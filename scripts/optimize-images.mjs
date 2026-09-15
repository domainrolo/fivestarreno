/**
 * Writes a WebP alongside every JPEG in public/images.
 *
 * Unsplash's own WebP is only ~7% smaller than the JPEG it serves, so it is not
 * worth a round trip. Re-encoding locally cuts about 54%, which on the hero is
 * the difference between a 1.2 MB and a 570 KB largest-contentful-paint.
 *
 * The output is committed, so the Railway build just copies public/ and never
 * needs an image toolchain.
 *
 *   npm run images:webp            # only what is missing or stale
 *   npm run images:webp -- --force # redo everything
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');
const force = process.argv.includes('--force');
const QUALITY = 76;

const files = (await readdir(dir)).filter((f) => f.endsWith('.jpg'));
let made = 0, skipped = 0, savedBytes = 0, jpegBytes = 0;

for (const f of files) {
  const src = path.join(dir, f);
  const out = src.replace(/\.jpg$/, '.webp');
  const srcStat = await stat(src);
  jpegBytes += srcStat.size;

  if (!force) {
    try {
      const outStat = await stat(out);
      if (outStat.mtimeMs >= srcStat.mtimeMs) { skipped++; savedBytes += srcStat.size - outStat.size; continue; }
    } catch { /* not built yet */ }
  }

  const buf = await sharp(src).webp({ quality: QUALITY, effort: 5 }).toBuffer();
  await writeFile(out, buf);
  made++;
  savedBytes += srcStat.size - buf.length;
  process.stdout.write('.');
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(
  `\nwebp: ${made} written, ${skipped} already current. ` +
  `${mb(jpegBytes)} MB of JPEG -> ${mb(jpegBytes - savedBytes)} MB of WebP ` +
  `(${Math.round((savedBytes / jpegBytes) * 100)}% smaller)`
);
