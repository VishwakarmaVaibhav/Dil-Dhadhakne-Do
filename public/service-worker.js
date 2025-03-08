self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('DilDhadhakneDo-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/main.jsx'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchRes => {
        return caches.open('DilDhadhakneDo-v1').then(cache => {
          cache.put(event.request, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(() => caches.match('/index.html'))
  );
});
