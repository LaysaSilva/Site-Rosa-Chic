import { desenharProdutoCarrinhoSimples, lerLocalStorage, apagarLocalStorage, salvarLocalStorage } from "./src/utilidades";
import { atualizarPrecocarrinho } from "./src/menuCarrinho";


function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
      desenharProdutoCarrinhoSimples(idProduto, "container-produto-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
  }

  atualizarPrecocarrinho();
}
function finalizarCompra(evento) {
    evento.preventDefault(evento);
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }

    const historicoDePedidos = lerLocalStorage("historico") ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    apagarLocalStorage("carrinho");
    window.location.href = "./pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));