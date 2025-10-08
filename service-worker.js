self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("atm-cache").then(cache => {
      return cache.addAll(["/", "/index.html", "/ATM.css", "/ATM.js"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
