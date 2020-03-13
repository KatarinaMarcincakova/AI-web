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
          'images/cyklus.gif',
          'images/OPDH.gif',
          'images/OV.gif',
          'images/PDH.gif',
          'images/PDS.gif',
          'images/PPC.gif',
          'images/katka.jpg',
          'images/lenka.jpg',
          'images/ai-bg.jpg',
          'images/er.png',
          'images/klasif.png',
          'images/klasifln.png',
          'images/klasiflo.png',
          'images/lr.png',
          'images/mdtab.png',
          'images/nltablm.png',
          'images/nltabm.png',
          'images/pr.png',
          'images/pr3.png',
          'images/pr4.png',
          'images/quina.png',
          'images/strom.png',
          'images/table1.png',
          'images/table2.png',
          'images/tablova.png',
          //js
          'script.js',
          //css
          'style.css',
          //html
          'in.html',
          'index.html',
          'nl.html',
          /*'nv.html',
          'ns.html',
          'sh.html',
          'uav.html',
          'uvod.html'     */   
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
