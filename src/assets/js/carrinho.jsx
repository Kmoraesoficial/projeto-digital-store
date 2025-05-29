function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const listaCarrinho = document.getElementById('lista-carrinho');
  const msgVazio = document.getElementById('msg-carrinho-vazio');
  const btnLimparCarrinho = document.getElementById('btn-limpar-carrinho');

  if (!listaCarrinho) return;

  listaCarrinho.innerHTML = '';

  if (carrinho.length === 0) {
    if (msgVazio) {
      msgVazio.textContent = 'Seu carrinho está vazio.';
      msgVazio.style.textAlign = 'center';   // centralizar texto
      msgVazio.style.fontSize = '1.2em';
      msgVazio.style.marginTop = '20px';
    }
    if (btnLimparCarrinho) btnLimparCarrinho.style.display = 'none';
    atualizarQuantidadeCarrinho();
    return;
  } else {
    if (msgVazio) msgVazio.textContent = '';
    if (btnLimparCarrinho) btnLimparCarrinho.style.display = 'inline-block';
  }

  carrinho.forEach((produto, index) => {
    const item = document.createElement('div');
    item.classList.add('item-carrinho');
    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" width="80" style="vertical-align: middle; margin-right: 10px;" />
      <span>${produto.nome} - R$${parseFloat(produto.preco).toFixed(2)} x ${produto.quantidade}</span>
      <button onclick="removerDoCarrinho(${index})" style="margin-left: 10px;">Excluir 1 unidade</button>
      <button onclick="removerProdutoCompleto(${index})" style="margin-left: 5px; color: red;">Remover tudo</button>
    `;
    listaCarrinho.appendChild(item);
  });

  atualizarQuantidadeCarrinho();
}

function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    carrinho.splice(index, 1);
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// Nova função para remover todas as quantidades de um produto
function removerProdutoCompleto(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);  // remove o produto inteiro
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// Botão para limpar todo o carrinho
function limparCarrinho() {
  localStorage.removeItem('carrinho');
  carregarCarrinho();
}

function atualizarQuantidadeCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const qtdCarrinho = document.getElementById('qtd-carrinho');
  if (!qtdCarrinho) return;
  qtdCarrinho.textContent = carrinho.length;
}

// Certifique-se que seu HTML tem este botão, por exemplo:
// <button id="btn-limpar-carrinho" onclick="limparCarrinho()" style="display:none; margin: 10px auto; display: block;">Limpar carrinho</button>

carregarCarrinho();
