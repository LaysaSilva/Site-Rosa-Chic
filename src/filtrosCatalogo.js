const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));
    
    for(const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderConjuntos() {
    exibirTodos();
    const produtosConjuntos = Array.from(catalogoProdutos.getElementsByClassName("conjunto"));

    for(const produto of produtosConjuntos) {
        produto.classList.add("hidden");
    }
}

function esconderVestidos() {
    exibirTodos();
    const produtosVestidos = Array.from(catalogoProdutos.getElementsByClassName("vestido"));

    for(const produto of produtosVestidos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-conjuntos").addEventListener("click", esconderVestidos);
    document.getElementById("exibir-vestidos").addEventListener("click", esconderConjuntos);
}