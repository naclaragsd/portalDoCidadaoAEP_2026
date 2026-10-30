package br.com.portalcidadao.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Participação de um usuário em uma proposta. É a classe base de Comentario e Avaliacao.
 *
 */
public abstract class Interacao {

    // [CONCEITO] protected: visível nesta classe e nas classes filhas (Comentario e Avaliacao),
    // que usam este formato no exibirInteracao() delas.
    protected static final DateTimeFormatter FORMATO_DATA = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    private int id;
    private Usuario usuario;    // quem fez: associação com Usuario
    private int propostaId;     // em qual proposta
    private LocalDateTime dataRegistro;

    public Interacao(int id, Usuario usuario, int propostaId, LocalDateTime dataRegistro) {
        this.id = id;
        this.usuario = usuario;
        this.propostaId = propostaId;
        this.dataRegistro = dataRegistro;
    }

    /**
     * Texto mostrado na tela de detalhes da proposta.
     */
    public abstract String exibirInteracao();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public int getPropostaId() {
        return propostaId;
    }

    public LocalDateTime getDataRegistro() {
        return dataRegistro;
    }
}
