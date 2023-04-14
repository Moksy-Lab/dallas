const staticMoksy = "dallas";
const assets = [
    "/index.html",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" ,
    "https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/css/adminlte.min.css" ,
    "https://fonts.googleapis.com/css2?family=Cabin&family=Roboto&display=swap",
    "/assets/styles/style.css" ,
    "https://code.jquery.com/jquery-3.6.0.min.js",
    "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMoksy).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});