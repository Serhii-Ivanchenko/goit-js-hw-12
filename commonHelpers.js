import{a as v,S,i as u}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",H="43222860-c920ce4922a75b9f5ac3c35c2";async function h(r,t){const i=new URLSearchParams({key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return(await v(`${w}?${i}`)).data}function y(r){return r.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:s,comments:l,downloads:b})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${t}"
                alt="${n}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${s}</li>
                <li class="description-items"><span class="accent">Comments </span>${l}</li>
                <li class="description-items"><span class="accent">Downloads </span>${b}</li>
              </ul>
        </div>
      </li>`).join("")}const f=document.querySelector(".js-search-form "),g=document.querySelector(".search-input"),d=document.querySelector("ul.gallery"),O=document.querySelector(".loader"),a=document.querySelector(".load-more");function c(){O.classList.toggle("hidden")}let p="";const L=new S(".gallery a",{captionsData:"alt",captionDelay:250});let o=1,m;f.addEventListener("submit",$);a.addEventListener("click",q);async function $(r){if(r.preventDefault(),d.innerHTML="",o=30,g.value.trim()==="")return u.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});p=g.value,c();try{const t=await h(p,o);t.hits.length===0?(u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}),c()):(d.insertAdjacentHTML("beforeend",y(t.hits)),L.refresh(),m=t.totalHits/t.hits.length,o<m&&a.classList.toggle("hidden"))}catch(t){alert(t.message)}finally{f.reset()}c()}async function q(){o+=1,a.classList.toggle("hidden"),c();try{const r=await h(p,o);d.insertAdjacentHTML("beforeend",y(r.hits)),L.refresh(),o>=m&&r.totalHits&&(a.classList.toggle("hidden"),u.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1}))}catch(r){alert(r.message),a.classList.toggle("hidden")}finally{f.reset()}c(),a.classList.toggle("hidden")}
//# sourceMappingURL=commonHelpers.js.map
