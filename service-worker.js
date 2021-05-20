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
    "revision": "ac408c5b69e2b0b7b8227676b01c6594"
  },
  {
    "url": "manifest.json",
    "revision": "09b68ed55c340b28cf2dd24c0ecb104f"
  },
  {
    "url": "post/cracker_barrel_writeup/index.html",
    "revision": "013948a5ac44958ae684a8cd02c64856"
  },
  {
    "url": "post/lvm/index.html",
    "revision": "613578c319b472da32f302f5f088f408"
  },
  {
    "url": "post/plain_jane_writeup/index.html",
    "revision": "8816ee02f8722a2795bd38a48f4d3050"
  },
  {
    "url": "post/vault-writeup/index.html",
    "revision": "685874fa9cffc5c1d11f83f85ffd7ff3"
  },
  {
    "url": "post/wfh_hack_using_attiny85/index.html",
    "revision": "b1155d9316650b0c233c3becf83ef543"
  },
  {
    "url": "tag/all/index.html",
    "revision": "31b6930bbe0a42092bad75cc2b829477"
  },
  {
    "url": "tag/allTags/index.html",
    "revision": "6c398e9afd8a7446d0d1b2ff5b4e885c"
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
    "revision": "bf69d2f383f6ee5cf26711353e10e5dc"
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
