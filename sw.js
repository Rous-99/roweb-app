//usamos workbox, una libreria para manejar service workers

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

// if (workbox) { //workbox solo existe en el scope del serviceWorker
//     console.log('Workbox loaded!');
//   } else {
//     console.log(`Can't load Workbox`);
//   }

const { NetworkOnly } = workbox.strategies;
const { setDefaultHandler } = workbox.routing;
const { offlineFallback, staticResourceCache } = workbox.recipes; //este ultimo es para que todo el css y js se guarde en el cache
const { precacheAndRoute } = workbox.precaching;

setDefaultHandler(
    new NetworkOnly() //por defecto va a ir a buscar la solicitud a un servidor red
)

// offlineFallback(); //carga el offline.html cuando no hay internet y si no hay nada en el cache
staticResourceCache(); //con esto ya tenemos todo el js y el css en el cache

precacheAndRoute([
    { url: '/index.html', revision: true } //ver si toda la app puede funcionar sin internet
])

