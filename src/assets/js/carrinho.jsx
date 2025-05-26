document.addEventListener("DOMContentLoaded", () => {
  const listaCarrinho = document.getElementById("lista-carrinho");
  const total = document.getElementById("total");
  const btnLimpar = document.getElementById("limpar-carrinho");

  function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    listaCarrinho.innerHTML = "";
    let totalGeral = 0;

    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}
        <button class="remover" data-index="${index}">Remover</button>
      `;
      listaCarrinho.appendChild(li);
      totalGeral += item.preco;
    });

    total.textContent = `Total: R$ ${totalGeral.toFixed(2)}`;

    // Adiciona evento aos botões de remover
    document.querySelectorAll(".remover").forEach(botao => {
      botao.addEventListener("click", () => {
        const index = botao.getAttribute("data-index");
        removerItem(index);
      });
    });
  }

  function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
  }

  btnLimpar.addEventListener("click", () => {
    localStorage.removeItem("carrinho");
    carregarCarrinho();
  });

  carregarCarrinho();
});
