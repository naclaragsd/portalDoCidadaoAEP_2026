# 🏛️ Portal do Cidadão — Câmara Municipal

Aplicação web desenvolvida como trabalho da AEP do curso de Engenharia de Software — UniCesumar.

O projeto está alinhado à **ODS 11 da ONU — Cidades Sustentáveis e Inclusivas**, e tem como objetivo aproximar a população das decisões legislativas do município por meio da tecnologia.

---

## 💡 Sobre o projeto

O Portal do Cidadão permite que moradores acompanhem as propostas legislativas em tramitação na Câmara dos Vereadores de sua cidade, e expressem suas opiniões e sugestões de forma simples e direta.

A plataforma incentiva a participação ativa da população no processo legislativo, promovendo transparência e inclusão política.

---

## ✨ Funcionalidades

- 📋 Visualização de propostas legislativas por cidade
- 🗳️ Envio de opiniões e sugestões com avaliação por estrelas (1 a 5)
- 💬 Exibição de comentários da população
- ♥️ Curtidas nos comentários
- 🔍 Filtro de comentários por projeto legislativo
- 🔃 Ordenação por mais recentes ou mais curtidos
- 🪟 Modal com detalhes completos de cada proposta
- ✅ Validação de idade mínima de 16 anos para participação

---

## 🏗️ Estrutura do projeto

```
📁 portal-cidadao/
├── aep.html       # Estrutura da página
├── aep.css        # Estilização e layout
└── aep.js         # Lógica e funcionalidades
```

---

## 🧠 Conceitos aplicados

**Orientação a Objetos**
- Classe `Proposta` — representa cada projeto legislativo com título, descrição, status, detalhes e curtidas
- Classe `Comentario` — representa cada opinião enviada com nome, idade, projeto, cidade, nota, curtidas e timestamp

**Estruturas de dados**
- **Lista** — `listaComentarios[]` armazena todos os comentários enviados, com uso de `push`, `filter` e `forEach`
- **Pilha (LIFO)** — utilizada na ordenação por "mais recentes", onde o último comentário adicionado é o primeiro a ser exibido

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

---

## 🚀 Como executar

1. Clone o repositório:
```bash
https://naclaragsd.github.io/portalDoCidadaoAEP_2026/
```

2. Abra o arquivo `aep.html` no navegador.

Não é necessário instalar nada — o projeto roda direto no browser.

---

## 📚 Referências

- ONU. **Objetivo de Desenvolvimento Sustentável 11 — Cidades e Comunidades Sustentáveis**. Disponível em: https://brasil.un.org/pt-br/sdgs/11
- NOVECK, Beth Simone. **Smart Citizens, Smarter State**. Harvard University Press, 2015.

---

## 👩‍💻 Autores

Desenvolvido por:
**Ana Clara Gomes De Andrade ||**
**Heloysa Fernandes ||**
**Thiago Lopes.**

— Engenharia de Software, UniCesumar.
