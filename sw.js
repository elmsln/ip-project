if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>c(e,n),f={module:{uri:n},exports:o,require:t};i[n]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"4010ed61.js",revision:"222b44e9d099cddb294f01a2e913586c"},{url:"4ac514c8.js",revision:"33b36b02bd030b101afe27fd59be4362"},{url:"4ca26941.js",revision:"c24d14c3810cac09526683bceb9f8e5f"},{url:"5b157846.js",revision:"0e6d3ccb0ed1722d3a693202a76a6cc9"},{url:"9e53947f.js",revision:"4644697902a1c1f8af4ca828ae9701f0"},{url:"feb897d8.js",revision:"4e6811a4428f00f984f772282efcdeba"},{url:"index.html",revision:"c234c2ca6b2ba75736a34bd1f3b1a8c8"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
