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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/blog.css",
    "revision": "3c12f2fa0111f8b29e1e24b8d4fff46e"
  },
  {
    "url": "css/prism-theme.css",
    "revision": "f5af3b76633cb27e8dfce06dae09a389"
  },
  {
    "url": "feed.json",
    "revision": "561b2c86babad219dfc7c6f7e1d5fcd4"
  },
  {
    "url": "img/11ty.svg",
    "revision": "4a4cd8f821d610c17987e3bea02e5b69"
  },
  {
    "url": "img/cover_1.jpg",
    "revision": "59e7f3e622e094f65bfce67d0b05aef4"
  },
  {
    "url": "img/cover_table.jpg",
    "revision": "b91c2be53a372564430ccd7157b50b0e"
  },
  {
    "url": "img/digispark_attiny85.jpg",
    "revision": "1d3540ed05fe3a81e79c7a54b1fe9f70"
  },
  {
    "url": "img/github.svg",
    "revision": "233777728aa4174f054f5f29b1e75d9a"
  },
  {
    "url": "img/linkedin1.svg",
    "revision": "b425746b23fb95f37fa4bb9dbbe6e183"
  },
  {
    "url": "img/linkedin2.svg",
    "revision": "c8d66aa4fdb81aad2dde902d900c7c3c"
  },
  {
    "url": "img/me_outline.png",
    "revision": "00065346b5489c27af9439f51977b11e"
  },
  {
    "url": "img/me_outline.svg",
    "revision": "be0edfd4fe1a4a218d42513673259b69"
  },
  {
    "url": "img/tailwindcss.svg",
    "revision": "485df1f1a233da221f201d398fbde2c0"
  },
  {
    "url": "img/twitter.svg",
    "revision": "d57d4985bf62fe091322a53c90eaa7f3"
  },
  {
    "url": "index.html",
    "revision": "838dd683a1004db0e710d94e82acf6aa"
  },
  {
    "url": "manifest.json",
    "revision": "09b68ed55c340b28cf2dd24c0ecb104f"
  },
  {
    "url": "post/cracker_barrel_writeup/index.html",
    "revision": "13f87ddf66525b4775fbe7a3f4944d7f"
  },
  {
    "url": "post/lvm/index.html",
    "revision": "bac3dcc82ebeae9bc106197563f2e222"
  },
  {
    "url": "post/plain_jane_writeup/index.html",
    "revision": "d1cb6221197e2349994180b7834ea14c"
  },
  {
    "url": "post/vault-writeup/index.html",
    "revision": "262be8b0ab26a0bd689a882b75445182"
  },
  {
    "url": "post/wfh_hack_using_attiny85/index.html",
    "revision": "67240433ff4e8bb051afa76dc8ff23ed"
  },
  {
    "url": "tag/all/index.html",
    "revision": "c5bd13e117684e523db03e6dd655e8f6"
  },
  {
    "url": "tag/allTags/index.html",
    "revision": "8d9aee0fb7229ad691bd26f20fa614ad"
  },
  {
    "url": "tag/archlinux/index.html",
    "revision": "405185dafe42224b3aa65db2b0f9c09e"
  },
  {
    "url": "tag/arduino/index.html",
    "revision": "c2979b2695729867d7bf7320df827f66"
  },
  {
    "url": "tag/automation/index.html",
    "revision": "04b07440e933c54952387aad019b5a2e"
  },
  {
    "url": "tag/ctf-writeup/index.html",
    "revision": "ba287f927d6fed160d99640aacc75140"
  },
  {
    "url": "tag/lvm/index.html",
    "revision": "533c7e74afade5473166f9f2a2db8514"
  },
  {
    "url": "tag/posts/index.html",
    "revision": "30d1c88d157236bcb00488ff0c8a8748"
  },
  {
    "url": "tag/postsByYear/index.html",
    "revision": "550461a1523e8fff7a77ac30635be5a8"
  },
  {
    "url": "tag/radare/index.html",
    "revision": "7e60432052759ada0ad7e67e44668d14"
  },
  {
    "url": "tag/reversing/index.html",
    "revision": "0f66a8ffbe957457954986d0740d1270"
  },
  {
    "url": "tag/usb/index.html",
    "revision": "ef99ebaa105a55a9c26bf1e79f6fd1db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
