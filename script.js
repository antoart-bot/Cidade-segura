const problemas = {
  buraco: {
    titulo: "Ruas esburacadas",
    descricao: "Buracos nas vias causam danos nos veículos, acidentes e dificultam o trânsito.",
    imagem: "img/rua com buraco.jpg",
    prefeitura: [
      "✅ Fazer operação tapa-buracos com qualidade",
      "✅ Recapear as ruas mais críticas",
      "✅ Fiscalizar obras e serviços nas vias",
      "✅ Criar um canal rápido de atendimento"
    ],
    voce: [
      "✅ Reportar buracos para a prefeitura",
      "✅ Cobrar melhorias dos órgãos responsáveis",
      "✅ Avisar outros moradores",
      "✅ Acompanhar e fiscalizar as ações públicas"
    ]
  },

  iluminacao: {
    titulo: "Falta de iluminação",
    descricao: "Ruas escuras aumentam o risco de assaltos e acidentes durante a noite.",
    imagem: "img/rua escura.jpg",
    prefeitura: [
      "✅ Trocar lâmpadas queimadas rapidamente",
      "✅ Instalar iluminação LED em pontos críticos",
      "✅ Fazer manutenção preventiva",
      "✅ Melhorar a iluminação em praças e avenidas"
    ],
    voce: [
      "✅ Avisar a prefeitura sobre postes apagados",
      "✅ Evitar locais perigosos durante a noite",
      "✅ Cobrar melhorias no bairro",
      "✅ Organizar pedidos com moradores"
    ]
  },

  lixo: {
    titulo: "Acúmulo de lixo",
    descricao: "Lixo nas ruas causa mau cheiro, entupimentos e aumenta doenças.",
    imagem: "img/lixo.jpg",
    prefeitura: [
      "✅ Aumentar a frequência da coleta",
      "✅ Criar pontos de descarte correto",
      "✅ Aplicar multas para descarte irregular",
      "✅ Fazer campanhas de conscientização"
    ],
    voce: [
      "✅ Não jogar lixo na rua",
      "✅ Separar lixo reciclável",
      "✅ Denunciar descarte irregular",
      "✅ Participar de mutirões de limpeza"
    ]
  },

  transito: {
    titulo: "Trânsito desorganizado",
    descricao: "Falta de sinalização e imprudência causam acidentes e congestionamentos.",
    imagem: "img/carro.jpg",
    prefeitura: [
      "✅ Melhorar sinalização e faixas de pedestres",
      "✅ Instalar semáforos em pontos críticos",
      "✅ Criar fiscalização de trânsito mais forte",
      "✅ Planejar rotas e vias alternativas"
    ],
    voce: [
      "✅ Respeitar as leis de trânsito",
      "✅ Usar cinto e capacete",
      "✅ Não dirigir usando celular",
      "✅ Cobrar sinalização no seu bairro"
    ]
  }
};

// Seleciona elementos
const tituloProblema = document.getElementById("tituloProblema");
const descProblema = document.getElementById("descProblema");
const imagemProblema = document.getElementById("imgg");
const listaPrefeitura = document.getElementById("listaPrefeitura");
const listaVoce = document.getElementById("listaVoce");

const botoes = document.querySelectorAll(".btnSaiba");

// Função que muda tudo
function atualizarProblema(nome) {
  const dados = problemas[nome];

  tituloProblema.innerText = dados.titulo;
  descProblema.innerText = dados.descricao;
  imagemProblema.src = dados.imagem;

  // limpa listas
  listaPrefeitura.innerHTML = "";
  listaVoce.innerHTML = "";

  // adiciona itens prefeitura
  dados.prefeitura.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    listaPrefeitura.appendChild(li);
  });

  // adiciona itens voce
  dados.voce.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    listaVoce.appendChild(li);
  });
}

// Evento nos botões
botoes.forEach(botao => {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    const problemaEscolhido = this.dataset.problema;
    atualizarProblema(problemaEscolhido);

    // scroll suave pra seção
    document.querySelector("#saibamais").scrollIntoView({
      behavior: "smooth"
    });
  });
});
function setResposta(valor){
  document.getElementById("respostaInput").value = valor;
}