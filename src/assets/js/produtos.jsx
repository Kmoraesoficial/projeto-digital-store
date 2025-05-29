function carregarProdutos() {
  const lista = document.getElementById('lista-produtos');
  if (!lista) return;

  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  if (produtos.length === 0) {
    lista.innerHTML = '<p>Nenhum produto cadastrado.</p>';
    return;
  }

  lista.innerHTML = ''; // limpa antes

  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('produto');

    card.innerHTML = `
      <img src="${produto.imagem || 'https://via.placeholder.com/150'}" alt="${produto.nome}" width="150">
      <h3>${produto.nome}</h3>
      <p>R$ ${parseFloat(produto.preco).toFixed(2)}</p>
      <p>${produto.descricao || ''}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
    `;

    lista.appendChild(card);
  });
}

function adicionarAoCarrinho(idProduto) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const produto = produtos.find(p => p.id === idProduto);
  if (!produto) return;

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Verifica se o produto já está no carrinho
  const itemCarrinho = carrinho.find(item => item.id === idProduto);

  if (itemCarrinho) {
    // Se já existe, incrementa a quantidade
    itemCarrinho.quantidade += 1;
  } else {
    // Se não existe, adiciona com quantidade 1
    carrinho.push({...produto, quantidade: 1});
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  alert(`${produto.nome} foi adicionado ao carrinho!`);
}


// Função para cadastrar produto no formulário
function cadastrarProduto(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);
  const descricao = document.getElementById('descricao').value.trim();
  const imagem = document.getElementById('imagem').value.trim();

  if (!nome || isNaN(preco)) {
    alert('Por favor, preencha o nome e o preço corretamente.');
    return;
  }

  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome,
    preco,
    descricao,
    imagem
  };

  produtos.push(novoProduto);
  localStorage.setItem('produtos', JSON.stringify(produtos));

  alert('Produto cadastrado com sucesso!');

  // Limpar form
  document.getElementById('form-produto').reset();

  // Atualizar lista se estiver na página principal
  carregarProdutos();
}

document.addEventListener('DOMContentLoaded', () => {
  carregarProdutos();

  const form = document.getElementById('form-produto');
  if (form) {
    form.addEventListener('submit', cadastrarProduto);
  }

  atualizarQuantidadeCarrinho();
});
