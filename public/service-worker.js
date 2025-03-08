self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('DilDhadhakneDo-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
      ]);
    })
  );
  self.skipWaiting(); // Force activation of new SW immediately
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== 'DilDhadhakneDo-v1') // Keep only the latest cache
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Take control of open tabs
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // Serve index.html for navigation requests (SPA Handling)
    event.respondWith(
      caches.match('/index.html').then(response => response || fetch(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).then(fetchRes => {
          return caches.open('DilDhadhakneDo-v1').then(cache => {
            if (['script', 'style', 'image'].includes(event.request.destination)) {
              cache.put(event.request, fetchRes.clone()); // Cache static assets
            }
            return fetchRes;
          });
        })
      );
    })
  );
});
