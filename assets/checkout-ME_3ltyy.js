import{l as t,d as e,s as n,a as s}from"./utilidades-fSksbAym.js";import{b as c}from"./menuCarrinho-wJ_hAgN4.js";function u(){const o=t("carrinho")??{};for(const a in o)e(a,"container-produto-checkout",o[a]);c()}function h(o){o.preventDefault(o);const a=t("carrinho")??{};if(Object.keys(a).length===0)return;const r={dataPedido:new Date,pedido:a},i=t("historico")??[],d=[r,...i];n("historico",d),s("carrinho"),window.location.href="./pedidos.html"}u();document.addEventListener("submit",o=>h(o));
