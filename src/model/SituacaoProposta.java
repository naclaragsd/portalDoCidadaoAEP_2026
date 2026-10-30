package br.com.portalcidadao.model;

/**
 * Andamento da tramitação de uma proposta (RF08).
 *
 *
 */
public enum SituacaoProposta {

    // Cada constante chama o construtor lá embaixo passando o texto para exibir na tela
    EM_ANALISE("Em análise"),
    APROVADA("Aprovada"),
    REJEITADA("Rejeitada");

    private final String descricao;

    SituacaoProposta(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
