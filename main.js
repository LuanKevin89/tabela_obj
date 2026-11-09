const produtos = [
  {
    produto: "God of War Ragnarök",
    categoria: "Ação e Aventura",
    quantidade: 10,
    preco: 249.90
  },
  {
    produto: "Minecraft",
    categoria: "Sandbox",
    quantidade: 15,
    preco: 99.90
  },
  {
    produto: "FIFA 25",
    categoria: "Esportes",
    quantidade: 8,
    preco: 199.90
  },
  {
    produto: "GTA V",
    categoria: "Mundo Aberto",
    quantidade: 20,
    preco: 129.90
  },
  {
    produto: "The Last of Us Part II",
    categoria: "Ação e Aventura",
    quantidade: 12,
    preco: 179.90
  }
];

const corpoDaTabela = document.getElementById("corpoDaTabela");

for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
    <td>${produto.produto}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>
    <td class="preco">${produto.preco.toLocaleString(
        "pt-BR",{
            style: "currency",
            currency: "BRL"
        }
    )}</td>
    `
    corpoDaTabela.appendChild(linha)
}

