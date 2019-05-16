const cacheName = 'v2'

// trigger install event
self.addEventListener('install', e => {
    console.log('service worker installed.')
})

// trigger activate event
self.addEventListener('activate', e => {
    console.log('service worker activated.')
    e.waitUntil(
        caches
        .keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service worker: clearing old cache.')
                        caches.delete(cache)
                    }
                })
            )
        })
    )
})

//trigger fetch event
self.addEventListener('fetch', e => {
    console.log('Service worker: fetching.')
    e.respondWith(
        fetch(e.request)
        .then(res => {
            //Make clone of response
            const resClone = res.clone()
            caches
            .open(cacheName)
            .then(cache => {
                console.log('Service worker: caching response.')
                cache.put(e.request, resClone)
            })
            return res
        })
        .catch(err => {
            caches
            .match(e.request)
            .then(res => res)
        })
    )
})