import{c as a}from"./utilidades-fSksbAym.js";import{a as t,i as e,b as i,r as d}from"./menuCarrinho-wJ_hAgN4.js";function n(){for(const o of a){const r=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${o.feminino?"feminino":"masculino"}' id="card-produto-${o.id}">
        <img
        src="./assets/img/${o.imagem}"
        alt="Produto 1 de Rosa Chic."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${o.marca}</p>
        <p class='text-sm'>${o.nome}</p>
        <p class='text-sm'>$${o.preco}</p>
        <button id='adicionar-${o.id}' class='bg-red-600 hover:bg-red-500 text-red-50'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=r}for(const o of a)document.getElementById(`adicionar-${o.id}`).addEventListener("click",()=>t(o.id))}document.addEventListener("DOMContentLoaded",function(){console.log("Página totalmente carregada"),n(),e(),i(),d()});
