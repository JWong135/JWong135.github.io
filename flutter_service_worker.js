'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1d85f389b48f245fa681018a8189c7f8",
"index.html": "be6f2132a710036f776c5c5063e5d145",
"/": "be6f2132a710036f776c5c5063e5d145",
"main.dart.js": "4f6590c18078e80cf8e0509825ba4ff0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6d5548d97c84834195559ef977f4535",
"assets/AssetManifest.json": "5556771dba1405e96383582fa9e5901e",
"assets/NOTICES": "c809627ff089b6ab02f4215aae806a46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/header_PCB365.png": "6cf600efcf8c3a3313a851a0c2c5a9e0",
"assets/assets/images/Phone-blue.png": "7518f45f720da263d0e84b6339147c37",
"assets/assets/images/barcode_scanner.png": "4502f26f6f7c06e9bfec901f9652fbee",
"assets/assets/images/EnterAmerica.png": "02522a6f29d37ee3a1e5eeb1f28aef72",
"assets/assets/images/FlyingP-blue.png": "b7efc66a33a2f2fc4c8d61302e7b0b68",
"assets/assets/images/EnteringCanada.png": "a10e8f35ab565316703c3bb1ec5b54c7",
"assets/assets/images/Phone-gray.png": "b536d01be0886ef145f8cda6f9376dd9",
"assets/assets/images/Shipments-blue.png": "bf33e98ca6331fc7f9d0806c1fcbc4ce",
"assets/assets/images/my_shipments.png": "2641a19dfe76732f53f7ec01c8f228c9",
"assets/assets/images/carrier_assist.png": "bd09f335bd32caea7653aa96cd0c9fa2",
"assets/assets/images/Scan-gray.png": "6df1b94c0a79b20889d1cb3b2d1b1983",
"assets/assets/images/scan_and_send.png": "9bb77ee8ec795dcdc13851071a100ab4",
"assets/assets/images/Carrier-gray.png": "0b4f1d7163485f5495474e115ff546e7",
"assets/assets/images/Profile.png": "02bf8083dfbd9a00dcea0cc9335345b2",
"assets/assets/images/Tracking-blue.png": "2aab5e112387bbac8936cdae6a1bb5c4",
"assets/assets/images/track_shipment.png": "972688a23c09f38c2adb0d6f01123f21",
"assets/assets/images/Tracking-gray.png": "c72d6b6858554d7355a054edb04c3647",
"assets/assets/images/map_background.png": "bc44dce6652977ee2bea1873b83f71f0",
"assets/assets/images/contact_us.png": "2291790a8bb5492112a58458f0289f02",
"assets/assets/images/Carrier-blue.png": "d48ce1a66382e46da74c4960b13f6a42",
"assets/assets/images/Shipments-gray.png": "d8068978851ef4ce060430fa77a5d60f",
"assets/assets/images/Scan-blue.png": "46d0cf657c577e61f419710e735fb360",
"assets/assets/images/header_drawer.png": "03a46b353a79916264dd84fc5677a74e",
"assets/assets/images/FlyingP-red.png": "c92dbac7afdd373d075c05b93e8c19c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
