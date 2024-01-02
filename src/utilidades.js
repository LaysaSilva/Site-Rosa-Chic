export const catalogo = [
    {
      id: "1",
      marca: "Rosa Chic",
      nome: "Conjunto Social",
      preco: 70,
      imagem: "product-1.png",
      tamanho: "M",
      categoria: "conjunto"
    },
    {
      id: "2",
      marca: "Belle Split Thigh",
      nome: "Vestido Verde Escuro",
      preco: 65,
      imagem: "product-2.png",
      tamanho: "GG",
      categoria: "vestido"
    },
    {
      id: "3",
      marca: "Angela Model",
      nome: "Conjunto Casaco e Saia",
      preco: 75,
      imagem: "product-3.png",
      tamanho: "M",
      categoria: "conjunto"
    },
    {
      id: "4",
      marca: "A-Lows",
      nome: "Calça Alfaiataria com Botão",
      preco: 75,
      imagem: "product-4.png",
      tamanho: "GG",
      categoria: "conjunto"
    },
    {
      id: "5",
      marca: "Angela Model",
      nome: "Vestido Azul Bebê Simples",
      preco: 126,
      imagem: "product-5.png",
      tamanho: "P",
      categoria: "vestido",
      
    },
    {
      id: "6",
      marca: "Francy",
      nome: "Calça Jeans Pantalona",
      preco: 75,
      imagem: "product-6.png",
      tamanho: "P",
      categoria: "conjunto"
    },
  
  ];
  
  export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
  export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
  export function apagarLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
  export function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
      document.getElementById(idContainerHTML);
  
    const elementoArticle = document.createElement("article");
    const articleClasses = [
      "flex",
      "bg-red-50",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
      "w-96",
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
    const cartaoProdutoCarrinho = `
      <img
        src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-slate-400 text-xs">Tamanho: ${produto.tamanho}</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  }