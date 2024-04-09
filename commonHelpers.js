import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(s){return s.map(({tags:r,largeImageURL:n,webformatURL:o,likes:e,views:t,comments:i,downloads:f})=>`
      <li class="gallery"><a href="${n}" class="gallery-link">
      <img src="${o}" alt="${r}" title="" class="picture"/>
      </a>
      <ul class = "img-info">
      <li class = "item-info">Likes<span class = "info-value">${e}</span></li>
      <li class = "item-info">Views<span class = "info-value">${t}</span></li>
      <li class = "item-info">Comments<span class = "info-value">${i}</span></li>
      <li class = "item-info">Downloads<span class = "info-value">${f}</span></li>
      </ul>
      </li>
`).join("")}function h(s=""){const r="43223956-11c63a864af473bf01df350b7",o=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return console.log(e),e.json()}).then(e=>{u.insertAdjacentHTML("beforeend",d(e.hits)),new m(".gallery-link").refresh()}).catch(e=>{console.log(e),c.error({message:"Sorry, there are no images matching your search query. Please try again!"})})}const a=document.querySelector(".search-form");console.log(a);document.querySelector(".search-input");const u=document.querySelector(".gallery-list"),l=document.querySelector(".loader");a.addEventListener("submit",p);function p(s){u.innerHTML="";const r=s.currentTarget.search.value.trim();s.preventDefault(),l.classList.add("isactive"),r.length?h(r).then(()=>a.reset()):c.error({message:"Please fill the form!"}),l.classList.remove("isactive")}
//# sourceMappingURL=commonHelpers.js.map
