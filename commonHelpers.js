import{S as d,i as m}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.getElementById("gallery"),f=document.getElementById("form"),l=document.getElementById("input"),i={key:"41508094-b690cca5e0d97ff8185874dce",q:"kat",image_type:"photo",orientation:"horizontal",safesearch:"true"};f.addEventListener("submit",s=>{s.preventDefault();const n=l.value.trim();i.q=n,l.value="",u.innerHTML="";const o=new URLSearchParams(i);p(o)});function p(s){const n=new URL("https://pixabay.com/api/");n.search=s.toString(),y(),fetch(n).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(({hits:o})=>{const a=o.reduce((t,r)=>t+`<li class="gallery-item">
                <a href=${r.largeImageURL}>
                <img src=${r.webformatURL} class="foto" alt=${r.tags}/>
                </a>
                <div class="benefits">
                <div class="benefit-text">
                <span class="text-value">Likes</span><p class="number">${r.likes}</p></div>
                <div class="benefit-text">
                <span class="text-value">Views</span><p class="number">${r.views}</p></div>
                <div class="benefit-text">
                <span class="text-value">Comments</span><p class="number">${r.comments}</p></div>
                <div class="benefit-text">
                <span class="text-value">Downloads</span><p class="number">${r.downloads}</p></div>
                </div>
            </li>`,"");u.innerHTML=a,new d(".gallery a",{nav:!0,captionDelay:250,captionData:"alt",close:!0,enableKeyboard:!0,docClose:!0}).refresh(),c()}).catch(o=>{m.error({position:"bottomCenter",message:o.message}),c()})}function y(){const s=document.querySelector(".loader");s&&(s.style.display="block")}function c(){const s=document.querySelector(".loader");s&&(s.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
