if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next/static/A9hyhZKWyJLzCyUOUficC/_buildManifest.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/A9hyhZKWyJLzCyUOUficC/_ssgManifest.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/417-3051b894bd77e54ca6d0.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/608-d9bb9c67dd1961969597.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/620-46e6bfaa24266c7db6e7.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/676-d136151190438820a67b.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/framework-0441fae7fd130f37dee1.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/main-1b0f1fd287f08bad6012.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/_app-d54291f5f6f891ef8963.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/expenses-c03293731774f4287537.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/income-170cd127bea375aea0ca.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/index-c64fb5e0bf11a3a15f78.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/profile-bcd830d70c42f65c7eec.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/pages/register-041f92bfd97df58495a9.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/chunks/webpack-e6c1964abab17dafbea0.js",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/css/7b48d5e3f9c70a09adad.css",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/image/images/close.dbf4a056bb627916a7cf3c9d61faaab7.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/image/images/logo.761a2b7ef78869b0b935a7196c8f50e5.png",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/image/images/profile.e0cd17273bf2895fafe64fc54f5ad005.png",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/Montserrat-Regular.3db65dc4b858f0fed4fb155f8a5ecab9.woff",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/Montserrat-SemiBold.197213592de7a2a62e0699fa36095221.woff",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/burger.4360ae41893013151b5311d2ddeb8282.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/check-mark.cb303cf003c639c96b1d5bbcc7aad9a4.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/delete.1e6d18455568f39df017545f4e3cd329.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/file.b8a84549551d215edf8a9a8273268e94.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/hiddenPassword.b855ae690720c5e54e6281bef6de9583.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/plus.679bcdfeee5d848d82bffaacdae7d5f1.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/_next/static/media/visiblePassword.215a0fe5402a9a34a37679346265fc32.svg",revision:"A9hyhZKWyJLzCyUOUficC"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-big.png",revision:"c57a672361ee5025ce508e6c87e34154"},{url:"/icon-small.png",revision:"490ccf6f31737692a35ee8bf345ed4af"},{url:"/index.html",revision:"f54f6294501757d206a8b3b983325a18"},{url:"/manifest.json",revision:"9565f487eccbe9de20e474f68eb55660"},{url:"/service-worker.js",revision:"3b233e8f2e5c8f28c42f3c49a1ca0340"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
