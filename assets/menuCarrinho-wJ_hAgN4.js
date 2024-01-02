import{l as g,c as d,s as a}from"./utilidades-fSksbAym.js";const n=g("carrinho")??{};function p(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function x(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function C(){Object.keys(n).length!==0&&(window.location.href="./checkout.html")}function $(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),r=document.getElementById("finalizar-compra");t.addEventListener("click",x),e.addEventListener("click",p),r.addEventListener("click",C)}function s(t){delete n[t],a("carrinho",n),i(),b()}function l(t){i(),n[t]++,a("carrinho",n),m(t)}function E(t){if(n[t]===1){s(t);return}n[t]--,a("carrinho",n),i(),m(t)}function m(t){document.getElementById(`quantidade-${t}`).innerText=n[t]}function u(t){const e=d.find(c=>c.id===t),r=document.getElementById("produtos-carrinho"),o=document.createElement("article"),h=["flex","bg-red-50","rounded-lg","p-1","relative"];for(const c of h)o.classList.add(c);const f=`<button id="remover-item-${e.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${e.imagem}"
      alt="Carrinho: ${e.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${e.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: ${e.tamanho}</p>
      <p class="text-green-700 text-lg">R$${e.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${e.id}'>-</button>
        <p id='quantidade-${e.id}' class='ml-2'>${n[e.id]}</p>
        <button class='ml-2' id='incrementar-produto-${e.id}'>+</button>
    </div>`;o.innerHTML=f,r.appendChild(o),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>E(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>l(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>s(e.id))}function b(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in n)u(e)}function y(t){t in n?l(t):(n[t]=1,u(t)),a("carrinho",n),i()}function i(){const t=document.getElementById("preco-total");let e=0;for(const r in n)e+=d.find(o=>o.id===r).preco*n[r];t.innerText=`Total: R$${e}`}export{y as a,i as b,$ as i,b as r};
