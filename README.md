# O projeto está alinhado ao ODS 11 da ONU — Cidades e Comunidades Sustentáveis, e tem como objetivo aproximar a população das decisões legislativas do município por meio da tecnologia.

## 💡 Sobre o projeto

O Portal do Cidadão permite que os moradores acompanhem as propostas legislativas em tramitação na Câmara dos Vereadores de sua cidade e registrem opiniões e sugestões de forma simples e direta.

A plataforma centraliza as informações sobre as propostas, apresenta esses dados de maneira mais acessível e cria um espaço para a manifestação da população.

## ✨ Funcionalidades

- Cadastro de cidadãos (idade mínima de 16 anos)
- Consulta às propostas legislativas em tramitação
- Visualização dos detalhes de uma proposta, com os comentários já registrados
- Registro de comentários e opiniões sobre as propostas
- Envio de sugestões relacionadas às propostas

---

## 🧠 Conceitos aplicados

**Orientação a Objetos**
- `Usuario` — reúne dados como nome, idade e e-mail, com funcionalidades como login e envio de opiniões e sugestões
- `Vereador` — herda de `Usuario` e adiciona o partido e a visualização de sugestões
- `Proposta` — representa cada projeto de lei, com título, descrição e data de criação
- `Interacao` — classe base para `Avaliacao` e `Comentario`, associada à `Proposta` em relação 1:N
- **Herança** — `Vereador` herda de `Usuario`; `Avaliacao` e `Comentario` herdam de `Interacao`
- **Polimorfismo** — o método `exibirInteracao()` tem comportamento diferente conforme o tipo de interação

---

## 🛠️ Tecnologias utilizadas

- Java
- MySQL

---

## 📁 Estrutura do repositório

- `/src` — código-fonte da aplicação
- `/docs` — documentação do projeto e diagramas
- `/database` — scripts de criação e estruturação do banco de dados MySQL

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
