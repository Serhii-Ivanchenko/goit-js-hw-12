import{a as w,S as H,i as m}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const q="https://pixabay.com/api/",M="43222860-c920ce4922a75b9f5ac3c35c2";async function y(s,e){const i=new URLSearchParams({key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await w(`${q}?${i}`)).data}function g(s){return s.map(({webformatURL:e,largeImageURL:i,tags:n,likes:t,views:r,comments:c,downloads:S})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${e}"
                alt="${n}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${t}</li>
                <li class="description-items"><span class="accent">Views </span>${r}</li>
                <li class="description-items"><span class="accent">Comments </span>${c}</li>
                <li class="description-items"><span class="accent">Downloads </span>${S}</li>
              </ul>
        </div>
      </li>`).join("")}const L=document.querySelector(".js-search-form "),h=document.querySelector(".search-input"),p=document.querySelector("ul.gallery"),O=document.querySelector(".loader"),d=document.querySelector(".load-more");function a(){O.classList.toggle("hidden")}function l(){d.classList.add("hidden")}function v(){d.classList.remove("hidden")}function $(s){const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}let f="";const b=new H(".gallery a",{captionsData:"alt",captionDelay:250});let o=1,u;L.addEventListener("submit",P);d.addEventListener("click",B);async function P(s){if(s.preventDefault(),p.innerHTML="",o=1,d.classList.contains("hidden")||l(),h.value.trim()==="")return m.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});f=h.value,a();try{const e=await y(f,o);e.hits.length===0?m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}):(p.insertAdjacentHTML("beforeend",g(e.hits)),b.refresh(),u=e.totalHits/e.hits.length,o<u&&v())}catch(e){alert(e.message)}finally{L.reset()}a()}async function B(){o+=1,l(),a();try{const s=await y(f,o);p.insertAdjacentHTML("beforeend",g(s.hits)),b.refresh();const e=document.querySelector(".gallery-item");$(e),o>=u&&s.totalHits&&(a(),l(),m.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1})),a(),v()}catch(s){alert(s.message),l()}finally{o>=u&&(l(),a())}}
//# sourceMappingURL=commonHelpers.js.map
