import{a as S,S as v,i as u}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/",H="43222860-c920ce4922a75b9f5ac3c35c2";async function g(s,e){const i=new URLSearchParams({key:H,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await S(`${w}?${i}`)).data}function h(s){return s.map(({webformatURL:e,largeImageURL:i,tags:n,likes:t,views:r,comments:l,downloads:b})=>`<li class="gallery-item">
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
                <li class="description-items"><span class="accent">Comments </span>${l}</li>
                <li class="description-items"><span class="accent">Downloads </span>${b}</li>
              </ul>
        </div>
      </li>`).join("")}const y=document.querySelector(".js-search-form "),f=document.querySelector(".search-input"),d=document.querySelector("ul.gallery"),q=document.querySelector(".loader"),o=document.querySelector(".load-more");function c(){q.classList.toggle("hidden")}let p="";const L=new v(".gallery a",{captionsData:"alt",captionDelay:250});let a=1,m;y.addEventListener("submit",O);o.addEventListener("click",$);async function O(s){if(s.preventDefault(),d.innerHTML="",a=1,f.value.trim()==="")return u.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});p=f.value,c();try{const e=await g(p,a);e.hits.length===0?(u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}),c()):(d.insertAdjacentHTML("beforeend",h(e.hits)),L.refresh(),m=e.totalHits/e.hits.length,a<m&&o.classList.toggle("hidden"))}catch(e){alert(e.message)}finally{y.reset()}c()}async function $(){a+=1,o.classList.toggle("hidden"),c();try{const s=await g(p,a);d.insertAdjacentHTML("beforeend",h(s.hits)),L.refresh();const e=document.querySelector(".gallery-item");M(e),a>=m&&s.totalHits&&(o.classList.toggle("hidden"),u.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1}))}catch(s){alert(s.message),o.classList.toggle("hidden")}c(),o.classList.toggle("hidden")}function M(s){const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
