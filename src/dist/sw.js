if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B5xRDq8d.js",revision:null},{url:"assets/index-DJasEjUY.css",revision:null},{url:"index.html",revision:"fc723c16ab2d981d4cec71bc033b24b3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-192x192.png",revision:"0cdb0fd93dd2b7836a5281181c8f6004"},{url:"icons/icon-512x512.png",revision:"0cdb0fd93dd2b7836a5281181c8f6004"},{url:"manifest.webmanifest",revision:"e56c5cbbec046f075607b47e5298983d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
