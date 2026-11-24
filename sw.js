const CACHE_NAME = 'petalos-brisa-floral-v5';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './productos.json',
  './manifest.json',
  './girasol1.jpg', './girasol2.jpg', './girasol3.jpg', './girasol4.jpg',
  './girasol5.jpg', './girasol6.jpg', './girasol7.jpg', './girasol8.jpg',
  './mar1.jpg', './mar2.jpg', './mar3.jpg', './mar4.jpg',
  './mar5.jpg', './mar6.jpg', './mar7.jpg', './mar8.jpg',
  './rosas1.webp', './rosas2.webp', './rosas3.jpg', './rosas4.jpg',
  './rosas5.webp', './rosas6.webp', './rosas7.jpg', './rosas8.jpg',
  './tul1.jpg', './tul2.jpg', './tul3.jpg', './tul4.jpg',
  './tul5.jpg', './tul6.jpg', './tul7.jpg', './tul8.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        const copia = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(event.request))
  );
});