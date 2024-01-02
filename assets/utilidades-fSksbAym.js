(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=[{id:"1",marca:"Rosa Chic",nome:"Conjunto Social",preco:70,imagem:"product-1.png",tamanho:"M",categoria:"conjunto"},{id:"2",marca:"Belle Split Thigh",nome:"Vestido Verde Escuro",preco:65,imagem:"product-2.png",tamanho:"GG",categoria:"vestido"},{id:"3",marca:"Angela Model",nome:"Conjunto Casaco e Saia",preco:75,imagem:"product-3.png",tamanho:"M",categoria:"conjunto"},{id:"4",marca:"A-Lows",nome:"Calça Alfaiataria com Botão",preco:75,imagem:"product-4.png",tamanho:"GG",categoria:"conjunto"},{id:"5",marca:"Angela Model",nome:"Vestido Azul Bebê Simples",preco:126,imagem:"product-5.png",tamanho:"P",categoria:"vestido"},{id:"6",marca:"Francy",nome:"Calça Jeans Pantalona",preco:75,imagem:"product-6.png",tamanho:"P",categoria:"conjunto"}];function d(a,r){localStorage.setItem(a,JSON.stringify(r))}function m(a){return JSON.parse(localStorage.getItem(a))}function u(a){localStorage.removeItem(a)}function p(a,r,c){const o=l.find(i=>i.id===a),e=document.getElementById(r),t=document.createElement("article"),n=["flex","bg-red-50","rounded-lg","p-1","relative","mb-2","w-96"];for(const i of n)t.classList.add(i);const s=`
      <img
        src="./assets/img/${o.imagem}"
        alt="Carrinho: ${o.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${o.nome}
        </p>
        <p class="text-slate-400 text-xs">Tamanho: ${o.tamanho}</p>
        <p class="text-green-700 text-lg">$${o.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${o.id}' class='ml-2'>${c}</p>
      </div>`;t.innerHTML=s,e.appendChild(t)}export{u as a,l as c,p as d,m as l,d as s};
