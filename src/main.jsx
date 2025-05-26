document.addEventListener("DOMContentLoaded", () => {
  const listaProdutos = document.getElementById("lista-produtos");
  const qtdCarrinho = document.getElementById("qtd-carrinho");

  const produtos = [
    { id: 1, nome: "Mouse Gamer RGB", preco: 89.90, imagem: "assets/img/mouse.jpg" },
    { id: 2, nome: "Teclado Mecânico", preco: 229.00, imagem: "assets/img/teclado.jpg" },
    { id: 3, nome: "Headset Surround", preco: 159.90, imagem: "assets/img/headset.jpg" }
  ];

  function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    qtdCarrinho.textContent = carrinho.length;
  }

  function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
  }

  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button data-id="${produto.id}">Adicionar ao carrinho</button>
    `;
    listaProdutos.appendChild(div);

    const botao = div.querySelector("button");
    botao.addEventListener("click", () => adicionarAoCarrinho(produto));
  });

  atualizarCarrinho();
});
