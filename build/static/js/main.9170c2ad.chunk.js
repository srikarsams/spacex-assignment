(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[1],[,function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return i}));var o="https://api.spacexdata.com/v3/launches?limit=100",a=[2006,2021],c="isSuccessfulLaunch",r="isSuccessfulLanding",i="year"},,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(5),r=t.n(c),i=(t(11),t(3)),s=t(2),u=t(1),l=function(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var a=t[o];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(n))return a.substring(n.length,a.length)}return""},d=function(e){var n=e.cookieName,t=e.cookieValue;null!==t&&(document.cookie="".concat(n,"=").concat(t,";"))},f=function(e){var n=e.isSuccessfulLaunch,t=e.isSuccessfulLanding,o=e.year,a=e.isServer,c=function(){var e=u.c;return e+=n?"&launch_success=".concat(n):"",e+=t?"&land_success=".concat(t):"",e+=o?"&launch_year=".concat(o):""};return a||n===l(u.b)&&t===l(u.a)&&o===l(u.d)?a?c():null:(d({cookieName:u.b,cookieValue:n}),d({cookieName:u.a,cookieValue:t}),d({cookieName:u.d,cookieValue:o}),c())},h=(t(12),Object(o.lazy)((function(){return t.e(6).then(t.bind(null,22))}))),m=Object(o.lazy)((function(){return t.e(4).then(t.bind(null,23))}));var g=function(e){var n=e.data,t=e.reqObj,c=void 0===t?{}:t,r={};c.isServer||(r=Object(s.a)(Object(s.a)({},c),window.__PRELOADED_STATE__));var u=Object(o.useState)(r.data||n||[]),l=Object(i.a)(u,2),d=l[0],g=l[1],v=Object(o.useState)(!1),p=Object(i.a)(v,2),b=p[0],w=p[1],k=Object(o.useCallback)((function(e){!function(e){"undefined"!==typeof window&&f(e)&&fetch(f(e)).then((function(e){return e.json()})).then((function(n){return e.setItems(n)})).catch((function(){return e.setError(!0)}))}(Object(s.a)(Object(s.a)({},e),{},{setItems:g,setError:w}))}),[]);return b?a.a.createElement("div",null,"Something went wrong!"):a.a.createElement(o.Suspense,{fallback:function(){return a.a.createElement("p",null,"Loading")}},a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h3",null,"SpaceX Launch Programs")),a.a.createElement("main",null,a.a.createElement(h,{triggerApi:k,reqObj:c}),a.a.createElement("section",{className:"card-container"},d.length?d.map((function(e){return a.a.createElement(m,{data:e,key:e.flight_number})})):a.a.createElement("p",{className:"no-data"},"Loading...")))))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()}],[[6,2,3]]]);
//# sourceMappingURL=main.9170c2ad.chunk.js.map