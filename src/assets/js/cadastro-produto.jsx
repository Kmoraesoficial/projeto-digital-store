// cadastro-produto.js
document.getElementById("form-cadastro").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {
    nome: formData.get("nome"),
    descricao: formData.get("descricao"),
    preco: parseFloat(formData.get("preco")),
    imagem: formData.get("imagem")
  };

  try {
    // Simulando o envio para uma API (use sua URL real aqui depois)
    // Quando o backend estiver pronto: Você só precisa substituir a URL do fetch "https://sua-api.com/produtos"
    // Exemplo: "http://localhost:3000/produtos"



    const resposta = await fetch("https://sua-api.com/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (resposta.ok) {
      alert("Produto cadastrado com sucesso!");
      document.getElementById("form-cadastro").reset();
    } else {
      alert("Erro ao cadastrar produto.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro de conexão com o servidor.");
  }
});
