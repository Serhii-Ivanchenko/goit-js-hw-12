import{a as b,S,i as u}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/",H="43222860-c920ce4922a75b9f5ac3c35c2";async function h(s,e){const i=new URLSearchParams({key:H,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await b(`${w}?${i}`)).data}function y(s){return s.map(({webformatURL:e,largeImageURL:i,tags:n,likes:t,views:r,comments:l,downloads:v})=>`<li class="gallery-item">
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
                <li class="description-items"><span class="accent">Downloads </span>${v}</li>
              </ul>
        </div>
      </li>`).join("")}const g=document.querySelector(".js-search-form "),f=document.querySelector(".search-input"),m=document.querySelector("ul.gallery"),q=document.querySelector(".loader"),a=document.querySelector(".load-more");function c(){q.classList.toggle("hidden")}let p="";const L=new S(".gallery a",{captionsData:"alt",captionDelay:250});let o=1,d;g.addEventListener("submit",O);a.addEventListener("click",$);async function O(s){if(s.preventDefault(),m.innerHTML="",o=1,a.classList.contains("hidden")||a.classList.add("hidden"),f.value.trim()==="")return u.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});p=f.value,c();try{const e=await h(p,o);e.hits.length===0?u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}):(m.insertAdjacentHTML("beforeend",y(e.hits)),L.refresh(),d=e.totalHits/e.hits.length,o<d&&a.classList.remove("hidden"))}catch(e){alert(e.message)}finally{g.reset()}c()}async function $(){o+=1,a.classList.add("hidden"),c();try{const s=await h(p,o);m.insertAdjacentHTML("beforeend",y(s.hits)),L.refresh();const e=document.querySelector(".gallery-item");P(e),o>=d&&s.totalHits&&(c(),u.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1}))}catch(s){alert(s.message),a.classList.add("hidden")}finally{o>=d&&data.totalHits&&a.classList.add("hidden")}c(),a.classList.remove("hidden")}function P(s){const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
