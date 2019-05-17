var serviceWorkerOption = {
  "assets": [
    "/d3d9c0e1c8fe0ef35ac603e8030a595b.ttf",
    "/9b121f22cf51c845619c9b950c5007c6.ttf",
    "/48f5361f4701d57e6cd799a29bb9a583.ttf",
    "/bundle.js",
    "/1.bundle.js",
    "/2.bundle.js"
  ]
};
        
        !function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){self.addEventListener("install",e=>{console.log("service worker installed.")}),self.addEventListener("activate",e=>{console.log("service worker activated."),e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{"v2"!==e&&(console.log("Service worker: clearing old cache."),caches.delete(e))}))))}),self.addEventListener("fetch",e=>{console.log("Service worker: fetching."),e.respondWith(fetch(e.request).then(t=>{const r=t.clone();return caches.open("v2").then(t=>{console.log("Service worker: caching response."),t.put(e.request,r)}),t}).catch(t=>{caches.match(e.request).then(e=>e)}))})}]);