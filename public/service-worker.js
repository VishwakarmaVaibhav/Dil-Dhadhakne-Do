self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('medico-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/src/main.jsx',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  