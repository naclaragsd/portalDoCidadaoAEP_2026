// ==========================================
// Classes — Modelagem Orientada a Objetos
// ==========================================

class Proposta {
    constructor(titulo, descricao, status, detalhes) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.detalhes = detalhes;
        this.curtidas = 0;
    }
}

class Comentario {
    constructor(nome, idade, projeto, opiniao, cidade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.projeto = projeto;
        this.opiniao = opiniao;
        this.cidade = cidade;
        this.nota = nota;
        this.curtidas = 0;
        this.timestamp = Date.now();
    }
}

// ==========================================
// Estrutura de dados — Lista e Pilha
// ==========================================

const listaComentarios = []; // armazena todos os comentários

function ordenarPorRecentes(lista) { // (lista) == listaComentarios
    const pilha = [];

    lista.forEach(item => pilha.push(item)); // percorre itens

    const resultado = [];

    while (pilha.length > 0) { //repete enquanto houver elementos na pilha
        resultado.push(pilha.pop()); //remove último elemento
    }

    return resultado;
} 

function ordenarPorCurtidas(lista) {
    return [...lista].sort((a, b) => b.curtidas - a.curtidas);
}

// ==========================================
// Dados das propostas por cidade
// ==========================================

const propostasPorCidade = {
    "Cianorte": [
        new Proposta(
            "PL 042/2026",
            "Expansão de ciclovias e áreas verdes.",
            "Em tramitação",
            "Este projeto prevê a construção de 15km de ciclovias interligando os bairros ao centro da cidade, além da criação de 3 novos parques públicos. O objetivo é incentivar o transporte sustentável e melhorar a qualidade de vida da população. Autor: Vereador João Silva. Data de apresentação: 10/02/2026."
        ),
        new Proposta(
            "PL 115/2026",
            "Programa de inclusão digital.",
            "Em análise",
            "Propõe a instalação de 20 telecentros gratuitos nos bairros periféricos, com computadores, internet de alta velocidade e cursos de informática para todas as idades. Autor: Vereadora Maria Souza. Data de apresentação: 28/02/2026."
        )
    ],
    "Maringá": [
        new Proposta(
            "PL 201/2026",
            "Melhoria no transporte público.",
            "Em votação",
            "Projeto que prevê a renovação de 40% da frota de ônibus por veículos elétricos, além da criação de corredores exclusivos de ônibus nas avenidas principais para reduzir o tempo de deslocamento. Autor: Vereador Carlos Oliveira. Data de apresentação: 05/01/2026."
        ),
        new Proposta(
            "PL 333/2026",
            "Projeto de arborização urbana.",
            "Em análise",
            "Visa o plantio de 10.000 árvores nativas nas ruas e avenidas da cidade ao longo de 2 anos, com manutenção garantida pelo município. Foco em espécies que oferecem sombra e contribuem para a redução da temperatura urbana. Autora: Vereadora Ana Lima. Data de apresentação: 15/02/2026."
        )
    ],
    "Curitiba": [
        new Proposta(
            "PL 501/2026",
            "Energia sustentável em prédios públicos.",
            "Aguardando votação",
            "Propõe a instalação de painéis solares em todos os prédios públicos municipais até 2028, com previsão de redução de 60% nos gastos com energia elétrica. A economia gerada será reinvestida em educação. Autor: Vereador Pedro Alves. Data de apresentação: 20/01/2026."
        ),
        new Proposta(
            "PL 777/2026",
            "Sistema inteligente de coleta seletiva.",
            "Em tramitação",
            "Implementação de coletores inteligentes com sensores IoT que avisam quando estão cheios, otimizando as rotas de coleta. Prevê também um aplicativo para que cidadãos reportem pontos irregulares de descarte. Autora: Vereadora Lucia Ferreira. Data de apresentação: 03/03/2026."
        )
    ]
};

// ==========================================
// Referências ao DOM
// ==========================================

const form = document.getElementById("formOpiniao");
const comentariosEl = document.getElementById("comentarios");
const cidadeSelect = document.getElementById("cidade");
const projetoSelect = document.getElementById("projeto");
const filtroProjeto = document.getElementById("filtroProjeto");
const ordenacaoSelect = document.getElementById("ordenacao");

// ==========================================
// Modal de detalhes
// ==========================================

function abrirModal(proposta) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-titulo").textContent = proposta.titulo;
    document.getElementById("modal-status").textContent = proposta.status;
    document.getElementById("modal-descricao").textContent = proposta.descricao;
    document.getElementById("modal-detalhes").textContent = proposta.detalhes;

    const totalOpinioes = listaComentarios.filter(c => c.projeto === proposta.titulo && c.cidade === cidadeSelect.value).length;
    document.getElementById("modal-opinioes").textContent = totalOpinioes + " opinião(ões) enviada(s)";

    modal.classList.add("ativo");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("ativo");
}

document.getElementById("modal-fechar").addEventListener("click", fecharModal);
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) fecharModal();
});

// ==========================================
// Funções principais
// ==========================================

function contarOpinioes(titulo, cidade) {
    return listaComentarios.filter(c => c.projeto === titulo && c.cidade === cidade).length;
}

function mostrarCards(cidade) {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";

    propostasPorCidade[cidade].forEach(function (proposta) {
        const total = contarOpinioes(proposta.titulo, cidade);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${proposta.titulo}</h3>
            <p>${proposta.descricao}</p>
            <span class="status">${proposta.status}</span>
            <span class="contagem-opinioes">${total} opinião(ões)</span>
            <button class="btn-detalhes">Ver detalhes</button>
        `;
        card.querySelector(".btn-detalhes").addEventListener("click", function () {
            abrirModal(proposta);
        });
        cards.appendChild(card);
    });
}

function atualizarSelectProjetos(cidade) {
    projetoSelect.innerHTML = "";
    filtroProjeto.innerHTML = `<option value="todos">Todos</option>`;

    propostasPorCidade[cidade].forEach(function (proposta) {
        const optionProjeto = document.createElement("option");
        optionProjeto.textContent = proposta.titulo;
        optionProjeto.value = proposta.titulo;
        projetoSelect.appendChild(optionProjeto);

        const optionFiltro = document.createElement("option");
        optionFiltro.textContent = proposta.titulo;
        optionFiltro.value = proposta.titulo;
        filtroProjeto.appendChild(optionFiltro);
    });
}

function mostrarComentarios(lista) {
    if (!lista.length) {
        comentariosEl.innerHTML = `<div class="empty-state">Nenhuma opinião ainda. Seja o primeiro!</div>`;
        return;
    }

    comentariosEl.innerHTML = "";

    lista.forEach(function (item, index) {
        const estrelas = "★".repeat(item.nota) + "☆".repeat(5 - item.nota);
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario");
        novoComentario.innerHTML = `
            <h3>${item.nome} (${item.idade} anos)</h3>
            <span class="projeto-comentario">${item.projeto}</span>
            <span class="estrelas">${estrelas}</span>
            <p>${item.opiniao}</p>
            <button class="btn-curtir" data-index="${index}">
                ♥ Curtir (${item.curtidas})
            </button>
        `;
        comentariosEl.appendChild(novoComentario);
    });

    document.querySelectorAll(".btn-curtir").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const idx = parseInt(btn.getAttribute("data-index"));
            lista[idx].curtidas++;
            filtrarComentarios();
        });
    });
}

function filtrarComentarios() {
    const cidadeAtual = cidadeSelect.value;
    const projetoFiltro = filtroProjeto.value;
    const ordenacao = ordenacaoSelect.value;

    let filtrados = listaComentarios.filter(function (item) {
        return item.cidade === cidadeAtual;
    });

    if (projetoFiltro !== "todos") {
        filtrados = filtrados.filter(function (item) {
            return item.projeto === projetoFiltro;
        });
    }

    if (ordenacao === "recentes") {
        filtrados = ordenarPorRecentes(filtrados);
    } else if (ordenacao === "curtidas") {
        filtrados = ordenarPorCurtidas(filtrados);
    }

    mostrarComentarios(filtrados);
}

// ==========================================
// Eventos
// ==========================================

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const projeto = document.getElementById("projeto").value;
    const opiniao = document.getElementById("opiniaoTexto").value;
    const cidade = cidadeSelect.value;
    const nota = parseInt(document.getElementById("nota").value);

    if (nome.trim() === "" || idade.trim() === "" || opiniao.trim() === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (parseInt(idade) < 16) {
        alert("É necessário ter no mínimo 16 anos para participar.");
        return;
    }

    const novoComentario = new Comentario(nome, idade, projeto, opiniao, cidade, nota);
    listaComentarios.push(novoComentario);

    mostrarCards(cidade);
    filtrarComentarios();
    form.reset();
    document.getElementById("nota").value = "3";
    atualizarEstrelas(3);
});

filtroProjeto.addEventListener("change", filtrarComentarios);
ordenacaoSelect.addEventListener("change", filtrarComentarios);

cidadeSelect.addEventListener("change", function () {
    const cidadeEscolhida = cidadeSelect.value;
    mostrarCards(cidadeEscolhida);
    atualizarSelectProjetos(cidadeEscolhida);
    filtrarComentarios();
});

// ==========================================
// Estrelas interativas
// ==========================================

function atualizarEstrelas(valor) {
    document.querySelectorAll(".estrela-btn").forEach(function (btn) {
        const v = parseInt(btn.getAttribute("data-valor"));
        btn.textContent = v <= valor ? "★" : "☆";
        btn.style.color = v <= valor ? "#f59e0b" : "#cbd5e1";
    });
    document.getElementById("nota").value = valor;
}

document.querySelectorAll(".estrela-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        atualizarEstrelas(parseInt(btn.getAttribute("data-valor")));
    });
    btn.addEventListener("mouseenter", function () {
        atualizarEstrelas(parseInt(btn.getAttribute("data-valor")));
    });
});

document.querySelector(".estrelas-input").addEventListener("mouseleave", function () {
    atualizarEstrelas(parseInt(document.getElementById("nota").value));
});

// ==========================================
// Inicialização
// ==========================================

mostrarCards("Cianorte");
atualizarSelectProjetos("Cianorte");
atualizarEstrelas(3);