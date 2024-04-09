import{i as n,S as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(s){return s.map(({tags:t,largeImageURL:a,webformatURL:i,likes:e,views:r,comments:o,downloads:f})=>`
      <li class="gallery"><a href="${a}" class="gallery-link">
      <img src="${i}" alt="${t}" title="" class="picture"/>
      </a>
      <ul class = "img-info">
      <li class = "item-info">Likes<span class = "info-value">${e}</span></li>
      <li class = "item-info">Views<span class = "info-value">${r}</span></li>
      <li class = "item-info">Comments<span class = "info-value">${o}</span></li>
      <li class = "item-info">Downloads<span class = "info-value">${f}</span></li>
      </ul>
      </li>
`).join("")}function d(s=""){const t="43223956-11c63a864af473bf01df350b7",i=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length||n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e),u.insertAdjacentHTML("beforeend",h(e.hits)),new m(".gallery-link").refresh()}).catch(e=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>l.classList.remove("isactive"))}const c=document.querySelector(".search-form"),u=document.querySelector(".gallery-list"),l=document.querySelector(".loader");c.addEventListener("submit",g);function g(s){u.innerHTML="";const t=s.currentTarget.search.value.trim();s.preventDefault(),l.classList.add("isactive"),t.length?d(t).then(()=>c.reset()):(n.error({message:"Please fill the form!"}),l.classList.remove("isactive"))}
//# sourceMappingURL=commonHelpers.js.map
