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
    "revision": "7a13d18ec2eead1068e7d57f35a7bdd6"
  },
  {
    "url": "manifest.json",
    "revision": "09b68ed55c340b28cf2dd24c0ecb104f"
  },
  {
    "url": "post/cracker_barrel_writeup/index.html",
    "revision": "4a5b1a800686f6412110b5d4e5560e42"
  },
  {
    "url": "post/lvm/index.html",
    "revision": "c72055942dbca0c339d3605adf9d0329"
  },
  {
    "url": "post/plain_jane_writeup/index.html",
    "revision": "11e73217cdb9983d360e0185ab9d1124"
  },
  {
    "url": "post/vault-writeup/index.html",
    "revision": "2255f507cee55f03e32dcb2aacbdb5a6"
  },
  {
    "url": "post/wfh_hack_using_attiny85/index.html",
    "revision": "a93ed4e29873e3c7698ebc81b771b71d"
  },
  {
    "url": "tag/all/index.html",
    "revision": "2307c24cf3bd2b400b350f2aa7b71f20"
  },
  {
    "url": "tag/allTags/index.html",
    "revision": "0c80342c3cebcdda63d1f9e7ee13866f"
  },
  {
    "url": "tag/archlinux/index.html",
    "revision": "7225bd54685aa34252bbb89b838fb053"
  },
  {
    "url": "tag/arduino/index.html",
    "revision": "78ad5e2ef7985b2bf1b9c5f4ed83d8a9"
  },
  {
    "url": "tag/automation/index.html",
    "revision": "53653d1aa742a15beaca3f36719952d6"
  },
  {
    "url": "tag/ctf-writeup/index.html",
    "revision": "8c0743b9c53e6c2e90d7cfebd9039525"
  },
  {
    "url": "tag/lvm/index.html",
    "revision": "40db1a700af8c2919887698854ca925e"
  },
  {
    "url": "tag/posts/index.html",
    "revision": "784d507b354ab3e0a0636d5d872d307a"
  },
  {
    "url": "tag/postsByYear/index.html",
    "revision": "12d431e06e9ece3bc1ddbf6192ca4481"
  },
  {
    "url": "tag/radare/index.html",
    "revision": "de441f42de0b5827eb1d40bad06abd72"
  },
  {
    "url": "tag/reversing/index.html",
    "revision": "a224ceed4fd8802172d5e18a01146e5a"
  },
  {
    "url": "tag/usb/index.html",
    "revision": "5f29c44a86ed4f8c966b3a19425a1ff1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
