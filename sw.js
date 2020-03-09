var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'index.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
          offlineUrl,
          //obrazky
          'images/IPDH.gif',
          //js
          'script.js',
          //css
          'style.css'
      ]);
    })
  );
});
this.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
          fetch(event.request.url).catch(error => {
              return caches.match(offlineUrl);
          })
    );
  }
  else{
        event.respondWith(caches.match(event.request)
                        .then(function (response) {
                        console.log("navigate not supported");
                        return response || fetch(event.request);
                    })
            );
      }
});

self.addEventListener('push', function(event) {

  const title = 'Stránka zmenená';
  const options = {
    body: `${event.data.text()}`,
    icon: 'icon512x512.png',
    badge: 'icon512x512.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
