'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1d85f389b48f245fa681018a8189c7f8",
"index.html": "d3dd1717bfccb822a023327f905fe7e2",
"/": "d3dd1717bfccb822a023327f905fe7e2",
"main.dart.js": "5e5e586ee1dac9cc1cea5fa3b2d11a1e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6d5548d97c84834195559ef977f4535",
".git/config": "2e7a4919fdc8e0d69bf616df571b37c2",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/c0d1dc5b215ba536acda438f63d7213d0b0aae": "b3395c48c14c2fa27262d8e77dbfc1f0",
".git/objects/03/2f960004f20f406c50b916bec278e24cc66492": "ccc7fcf2c4630c6cb005e257a1a6cb3c",
".git/objects/9e/3ecbe04c51ab460f2177a3c043e729c0816b95": "1583de8d20bbf803dde0f239590282c9",
".git/objects/35/e54d28475cad2501b65b2cab399ee64ae848f5": "240b0780faa6d578b98c2fc523c25e03",
".git/objects/69/03875fbf57bbe4570ed09cff14a671f5d87dff": "5df82aba8a789972a5ca99fd98fc3780",
".git/objects/67/fe8626d7b2adb09e0d2424a1afad79f48837da": "fc1ff23d1db4542af8cb450e2ac825b8",
".git/objects/94/695b3297b8b766fe1a2425c8be113025d53f82": "054420a9cb38b2d62505cc87c7b7daf3",
".git/objects/0e/021bfb5ec81994ce969f56bb4e40f1f9b7e164": "761975eefc4c1c9791ba31dd8a002316",
".git/objects/5f/03db8e10ff67117bb74d4bc8a5b70e98dcf0ae": "ff6e77b62a2740d0256871b66a93af66",
".git/objects/a4/e16dbdb708727f4016b91bfcc391d6285ed17a": "39cd87d1364eb56ffc4d5d08d2001288",
".git/objects/df/4199435bcd149bc9496a9192633d2b7e687f84": "4387d29e464a32a6e0e1b391bcb41202",
".git/objects/d6/0a34ae65c3bf2eb4bcd943219f338f30b11029": "fc8305f988b4a84670aebe07231b1e14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/39f7d0f7cb26c685216c856a2935512e74b707": "10698945e23cd9cfb85b71a696b2a082",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c1/cc73bd12f500dfc0328f1106f14d748b3fe63c": "ca49b3523079330957826241047c7006",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/fc6a0930ab1d152006bf7705b469ce884c63d6": "b85b28bebc6606a186c82459e22e0561",
".git/objects/1a/726a4c7008bee61f630ce0aba7887f3530ab98": "48b02b60ca249f9b5303a99b92e7a9aa",
".git/objects/28/5c028c2b3f4de7d852d56a9a4b3af9e78161bd": "5e1f7ae5baee3da6afa153574c2228f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/6761708fe7697745c6a07a5b744d56a2f5e0db": "d7d726a954bc9f8ab90a8924e1d0041f",
".git/objects/10/e0d6488458f4cf51f8d782af73b8815ca9e7cb": "4b4cc559d0d28d9f0481f604edeac94a",
".git/objects/75/b6dffe7883302d65dfa1d79f8ec586b5de0e43": "2c636f45750e916fcb2dfeb29cdebdcc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/86e6553c69cf7973c8293afc92b94dbcae7cb0": "b4745069c8efca627f5a116121712c70",
".git/objects/3a/91b061ca8d5f400f1cb0b4bfd434b0d90dd806": "b4c4be5ff7ca71a12bb48c8ded0fd251",
".git/objects/52/ee2a2dac4ee3bb6ae6597ef6c598d16c54a0d6": "0c83c479d4a4156c56e2cf623e90e65e",
".git/objects/d5/b9d043dd9a5db95d451e43fa66850b93838c25": "05c66eceaca1eb2d08ab87289a8f9fb0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b9/4f77a1e483ea97d99399699fe33939dcf04f2e": "d956e18d6b8d45ac2932f8beefed1a6b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/1030918bd09ba58dde5cf1de80ab46bc9f69c1": "33bd158ce66c0f94a34dd2c2680a36d2",
".git/objects/e9/3cb9f458b748ef929e18fb5f24944e8318b709": "baea0d9204d239dad5ce0ec89c756b35",
".git/objects/e0/f37b15778fe5d32faf400f2bf3221cfdafbc9a": "f422613675408d36af595f161485e034",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/0ff8457e4dc920c9e157433e66e05ce2e5981c": "9e4a28ebc7d86b90b757a891c2d6c3e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/f70a072477f8eb9b3b83a520da3f819e3b8174": "c0219546607f0b8d0d3810c2a1974bb1",
".git/objects/1b/6b26204e9bec47fc0823b2dcecbb70319fbe54": "5672923c1f52c071e3271a264c5e88ee",
".git/objects/48/d01a994dc598bf90df65ed13aa5d8915d42393": "e491838fdaf6ad83b5028c09683a3c00",
".git/objects/23/27d870f804cdad34772b23c9532f60873f572f": "15a48d1326e6043bfd72b312785e8dc9",
".git/objects/76/af58604a45327a1ed7a045ad70542709c358fe": "d15a57411c93fb3630c81556380b02c4",
".git/objects/8b/a7e474ef812b502190a73303edd89fa4a9e16f": "0a62ca507c92c3b001e205a3e7ee35a1",
".git/objects/13/074bebd1447d1bc005f21f5d743dbb6882cf54": "4655a5ec72e25e16445322efc9ed6e83",
".git/objects/13/bd08fb6848fda172585e6f474c5c881920c14a": "c3702b884296759b0d1a63c7a6104e0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d8011ceb448f335da8eb6a82be0dddd",
".git/logs/refs/heads/main": "3a8aed5207e3724c44122fcb413a9b88",
".git/logs/refs/remotes/origin/main": "8dcdc3b8b9c68f3cb711933e6ed6ebeb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "3698fd48c381736a8f63d555c57d1b9e",
".git/refs/remotes/origin/main": "3698fd48c381736a8f63d555c57d1b9e",
".git/index": "4a7649812a1e85ad4b05a647c4889386",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
