-- =============================================================
-- Portal do Cidadão — script de criação do banco (MySQL 8.0.16+)
-- Sprint 1 — Épico "Esqueleto"
-- Tabelas usadas no CRUD de propostas pelo vereador.
-- (comentario e avaliacao entram nas próximas sprints)
-- =============================================================

-- Garante que os acentos sejam gravados certo, qualquer que seja o cliente.
SET NAMES utf8mb4;

CREATE DATABASE IF NOT EXISTS portal_cidadao
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE portal_cidadao;

-- -------------------------------------------------------------
-- Tabela usuario
-- Guarda cidadãos e vereadores na mesma tabela.
-- tipo_usuario diferencia os dois ('CIDADAO' ou 'VEREADOR');
-- partido só é preenchido quando o usuário é vereador.
-- Idade mínima de 16 anos para participar (RF01).
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuario (
    usuario_id    INT          NOT NULL AUTO_INCREMENT,
    nome          VARCHAR(100) NOT NULL,
    cpf           VARCHAR(20)  NOT NULL,
    idade         INT          NOT NULL,
    cidade        VARCHAR(100),
    tipo_usuario  VARCHAR(20)  NOT NULL,
    partido       VARCHAR(100),
    CONSTRAINT pk_usuario PRIMARY KEY (usuario_id),
    CONSTRAINT uq_usuario_cpf UNIQUE (cpf),
    CONSTRAINT ck_usuario_tipo CHECK (tipo_usuario IN ('CIDADAO', 'VEREADOR')),
    CONSTRAINT ck_usuario_idade CHECK (idade >= 16)
);

-- -------------------------------------------------------------
-- Tabela proposta
-- Cada proposta pertence a um vereador (vereador_id -> usuario).
-- A FK só garante que o usuário existe; quem confere se ele é
-- mesmo VEREADOR é a camada de serviço no Java.
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS proposta (
    proposta_id      INT          NOT NULL AUTO_INCREMENT,
    titulo           VARCHAR(150) NOT NULL,
    descricao        TEXT         NOT NULL,
    data_publicacao  DATE         NOT NULL,
    vereador_id      INT          NOT NULL,
    CONSTRAINT pk_proposta PRIMARY KEY (proposta_id),
    CONSTRAINT fk_proposta_vereador FOREIGN KEY (vereador_id)
        REFERENCES usuario (usuario_id)
);

-- Próximas sprints: quando criar as tabelas comentario e avaliacao,
-- a FK delas para proposta deve usar ON DELETE CASCADE, senão
-- excluir uma proposta que já tem comentários vai dar erro.

-- -------------------------------------------------------------
-- Dados de teste (nomes fictícios)
-- INSERT IGNORE: se o script rodar de novo, não duplica.
-- -------------------------------------------------------------
INSERT IGNORE INTO usuario (usuario_id, nome, cpf, idade, cidade, tipo_usuario, partido) VALUES
    (1, 'Carlos Almeida',  '111.111.111-11', 52, 'Cianorte', 'VEREADOR', 'Partido A'),
    (2, 'Juliana Costa',   '222.222.222-22', 38, 'Cianorte', 'VEREADOR', 'Partido B'),
    (3, 'Rafael Moreira',  '333.333.333-33', 19, 'Cianorte', 'CIDADAO',  NULL);

INSERT IGNORE INTO proposta (proposta_id, titulo, descricao, data_publicacao, vereador_id) VALUES
    (1, 'Ciclovia na Avenida América',
        'Cria uma ciclovia de 3 km ligando o centro ao terminal rodoviário.',
        '2026-09-01', 1),
    (2, 'Iluminação em LED nas praças',
        'Substitui a iluminação das praças públicas por lâmpadas de LED para reduzir o consumo de energia.',
        '2026-09-10', 2),
    (3, 'Coleta seletiva nos bairros',
        'Amplia a coleta seletiva para todos os bairros, com recolhimento semanal de recicláveis.',
        '2026-09-15', 1);
