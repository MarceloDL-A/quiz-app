self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('quiz-app-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/style.css',  // se houver
          '/script.js',  // se houver
          '/path/to/icon-192x192.png',
          '/path/to/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  