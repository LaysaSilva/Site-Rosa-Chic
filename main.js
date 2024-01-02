import { renderizarCatalogo } from "./src/cartaoProduto";
import { atualizarPrecocarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página totalmente carregada"); 
    renderizarCatalogo();
    inicializarCarrinho();
    atualizarPrecocarrinho();
    renderizarProdutosCarrinho();
});