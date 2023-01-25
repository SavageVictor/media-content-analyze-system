/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c65575e9b74018843c4e8aeb23647f45"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.82dbe501.css",
    "revision": "b956064276122139c5041c20a821752f"
  },
  {
    "url": "assets/img/delete_after.1256b504.png",
    "revision": "1256b5040bf6b7875b6c7ffad439c10e"
  },
  {
    "url": "assets/img/delete_before.94d00848.png",
    "revision": "94d008487a5e5516cd7afc290dc29499"
  },
  {
    "url": "assets/img/delete.07d02621.png",
    "revision": "07d0262199ea92e9a46b6c1f1c8d8712"
  },
  {
    "url": "assets/img/get_id.56bbc533.png",
    "revision": "56bbc533bfd52d5df3f2c1c2ee889180"
  },
  {
    "url": "assets/img/post_after.5a730129.png",
    "revision": "5a730129074129c4716146b0a77b4ab6"
  },
  {
    "url": "assets/img/post_before.c7c63388.png",
    "revision": "c7c63388bbe4b09829724635ec5dfaad"
  },
  {
    "url": "assets/img/post.8162fa33.png",
    "revision": "8162fa33991f5c8d847c06298fbd8f68"
  },
  {
    "url": "assets/img/put_after.04c327dd.png",
    "revision": "04c327dd2efab3645e5c76858cc86578"
  },
  {
    "url": "assets/img/put.d55c89be.png",
    "revision": "d55c89be8daccd1aa57aab31f8ffad4a"
  },
  {
    "url": "assets/img/relschem.5f1506d9.png",
    "revision": "5f1506d9145e9c9e25de0207eb8e0df6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.252c38d0.png",
    "revision": "252c38d01be7d914c9de30088988c63d"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.6c157afa.js",
    "revision": "55549af1ed6d20ef0e1bef241c30de7b"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.a6d7859d.js",
    "revision": "defc0b0fa79f752adc80b94515b8acb7"
  },
  {
    "url": "assets/js/14.e1c2ecb4.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.17ac33c3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.ed9911f8.js",
    "revision": "0f1c8deab11052e30b6b2da89ede6ba7"
  },
  {
    "url": "assets/js/17.bec8b5d0.js",
    "revision": "b3550d0b8541b78467fc63426121e1c6"
  },
  {
    "url": "assets/js/18.7b2e8d54.js",
    "revision": "cce3ad34864e980b0614ed664e0dea2f"
  },
  {
    "url": "assets/js/19.877587fb.js",
    "revision": "4a0dc701687dd905acec9db7ecce969c"
  },
  {
    "url": "assets/js/2.5431d902.js",
    "revision": "d6af43f31ea9c6cfc61e1083528e1b9c"
  },
  {
    "url": "assets/js/20.1f57a0ac.js",
    "revision": "cd3e4cb90711e8219ba18fcf84d56826"
  },
  {
    "url": "assets/js/21.abfd3a62.js",
    "revision": "d52fdd4e3d576780b3a2d7b7785f4d28"
  },
  {
    "url": "assets/js/22.86a0dbac.js",
    "revision": "64943c984db390580688f11016d9427b"
  },
  {
    "url": "assets/js/23.375b9c01.js",
    "revision": "7d1f45dae4c448ee31fba2960a7ec954"
  },
  {
    "url": "assets/js/24.8ca0afc8.js",
    "revision": "39a3b73dc1e8872f006df7d23dc22772"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.17d13130.js",
    "revision": "6ff4fd5e077ff298bb85ecc365b89cb9"
  },
  {
    "url": "assets/js/4.76f7d8f6.js",
    "revision": "5465594a7b83929dd4dc9617521b5e07"
  },
  {
    "url": "assets/js/5.bcbbe9f3.js",
    "revision": "d7e8746984f00660b0e17a1d4dcfa499"
  },
  {
    "url": "assets/js/6.40aabc4e.js",
    "revision": "7bb241ac125317b33fb32367f8d8c065"
  },
  {
    "url": "assets/js/7.194b5834.js",
    "revision": "aa0a115bfa695590fb4afee872aabaca"
  },
  {
    "url": "assets/js/8.206e75e0.js",
    "revision": "3165de09d6d3bdde3706a3961f9f9b4f"
  },
  {
    "url": "assets/js/9.66eed844.js",
    "revision": "6a1e375dce2d3aced48ccfdb6df07057"
  },
  {
    "url": "assets/js/app.c89571b4.js",
    "revision": "f747c45d47641eb22794612721a46a02"
  },
  {
    "url": "conclusion/index.html",
    "revision": "cd5303b082658cf8bb60e1f307beae81"
  },
  {
    "url": "design/index.html",
    "revision": "2ea6e469a7a49be0284bf12e97f2c445"
  },
  {
    "url": "index.html",
    "revision": "b88257a60c394b30d0d247cae82f2be5"
  },
  {
    "url": "intro/index.html",
    "revision": "64e0d47f7c837ff893a4df685c6a118d"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "85c4e14f2b17295afbec597e3caceb06"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3a6e6ba9051bbc4c0e4b4071fd5ff887"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "264cdc4aa7fe26c07811b943dd792a33"
  },
  {
    "url": "software/index.html",
    "revision": "7fb8897c6a14ff3e0bf8b6cec21abca3"
  },
  {
    "url": "test/index.html",
    "revision": "4ffd7b6b726b898d560adc3b89c07122"
  },
  {
    "url": "use cases/index.html",
    "revision": "b3e2e9466f49fcd487eda60e819b291d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
