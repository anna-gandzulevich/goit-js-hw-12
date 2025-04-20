import{S as b,a as v,i as n}from"./assets/vendor-Dbn66z2c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const M=({largeImageURL:s,webformatURL:e,tags:o,likes:c,views:r,comments:a,downloads:i})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${e}" alt="${o}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${c}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${r}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${a}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${i}</p>
          </li>
        </ul>
        </a>
      </div>
    `,m=s=>s.map(e=>M(e)).join(""),u=new b(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}),w="https://pixabay.com/api/",p=async(s,e)=>{try{const o={q:s,page:e,key:"49821114-4fd29475c454a2f5ef41f6df5",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return await v.get(w,{params:o})}catch(o){console.log(o.message)}},t={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},g=15;let y,l,d,f;t.loader.style.display="none";function h(){t.loader.style.display="block"}function L(){t.loader.style.display="none"}const P=async s=>{try{if(s.preventDefault(),l=1,t.gallery.innerHTML="",t.btnLoadMore.classList.remove("is-visible"),d=s.currentTarget.elements.search_text.value.trim(),d===""){n.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),t.btnLoadMore.classList.remove("is-visible"),s.currentTarget.elements.search_text.value="";return}h();const{data:{hits:e}}=await p(d,l);if(e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.searchForm.reset(),t.btnLoadMore.classList.remove("is-visible");return}t.gallery.innerHTML=m(e),u.refresh(),l+=1,e.length<g?t.btnLoadMore.classList.remove("is-visible"):t.btnLoadMore.classList.add("is-visible"),f=document.querySelector(".gallery-wrapper").getBoundingClientRect().height}catch(e){n.error({title:"Error",message:e.message})}finally{L()}},S=async()=>{try{h();const{data:{totalHits:s,hits:e}}=await p(d,l);if(t.gallery.insertAdjacentHTML("beforeend",m(e)),u.refresh(),window.scrollBy({top:f*2,left:0,behavior:"smooth"}),y=Math.ceil(s/g),l===y||e.length<g){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),t.btnLoadMore.classList.remove("is-visible");return}l+=1,t.btnLoadMore.classList.add("is-visible")}catch(s){n.error({message:s.message,position:"topRight"}),console.log(s.message)}finally{L()}};t.searchForm.addEventListener("submit",P);t.btnLoadMore.addEventListener("click",S);
//# sourceMappingURL=index.js.map
