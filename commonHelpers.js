import{a as f,S as y,i as c}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="43222860-c920ce4922a75b9f5ac3c35c2";async function L(r){const s=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return(await f(`${g}?${s}`)).data}function b(r){return r.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${i}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${a}</li>
                <li class="description-items"><span class="accent">Downloads </span>${d}</li>
              </ul>
        </div>
      </li>`).join("")}const m=document.querySelector(".js-search-form "),l=document.querySelector(".search-input"),u=document.querySelector("ul.gallery"),S=document.querySelector(".loader");function n(){S.classList.toggle("visible")}let p="";const v=new y(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",$);async function $(r){if(r.preventDefault(),u.innerHTML="",l.value.trim()==="")return c.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});p=l.value,n();try{const s=await L(p);s.hits.length===0?(c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}),n()):(u.insertAdjacentHTML("beforeend",b(s.hits)),v.refresh(),n())}catch(s){alert(s.message)}finally{m.reset()}}
//# sourceMappingURL=commonHelpers.js.map
