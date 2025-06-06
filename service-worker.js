
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('calc-cache').then(function(cache) {
            return cache.addAll([
                './index_pwa.html',
                './manifest.json',
                './service-worker.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
