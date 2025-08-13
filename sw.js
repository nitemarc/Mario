const CACHE = 'mario-pwa-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install', e=>{ self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e=>{ const req=e.request; e.respondWith(
  caches.match(req).then(res=> res || fetch(req).then(r=>{ const copy=r.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); return r; }).catch(()=>caches.match('./')))
); });
