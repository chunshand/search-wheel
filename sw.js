if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-bc55f1ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.2c563b4b.js",revision:null},{url:"assets/index.4345c370.js",revision:null},{url:"assets/index.a9b4bd50.css",revision:null},{url:"assets/index.cbf20dfb.js",revision:null},{url:"assets/vendor.da2614c1.js",revision:null},{url:"index.html",revision:"bc5c114931d1f817bae7a527db9c26fb"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"6d82a49487b60c70b66f85ce69093a66"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
