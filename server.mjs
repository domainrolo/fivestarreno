// Tiny static server for Railway. Serves the Astro build in ./dist
import { createServer } from 'node:http';
import sirv from 'sirv';

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const assets = sirv('dist', {
  etag: true,
  single: false,
  extensions: ['html'],
  setHeaders(res, pathname) {
    if (pathname.startsWith('/_astro/') || /\.(avif|webp|jpg|jpeg|png|svg|woff2)$/i.test(pathname)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  },
});

const server = createServer((req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  assets(req, res, () => {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><meta charset="utf-8"><title>404</title><p>Not found. <a href="/">Go home</a>.');
  });
});

server.listen(PORT, HOST, () => console.log(`fivestarreno listening on http://${HOST}:${PORT}`));
