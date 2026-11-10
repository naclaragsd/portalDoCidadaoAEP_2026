package br.com.portalcidadao.model;

import java.time.LocalDateTime;

/**
 * Comentário (opinião) de um usuário sobre uma proposta (RF02).
 *
 * 
 */
public class Comentario extends Interacao {

    public static final int TAMANHO_MAXIMO = 500; /

    private String texto;
    private int curtidas;

   
    public Comentario(int id, Usuario usuario, int propostaId, LocalDateTime dataRegistro,
                      String texto, int curtidas) {
        super(id, usuario, propostaId, dataRegistro);
        this.texto = texto;
        this.curtidas = curtidas;
    }

    /** Comentário novo, ainda não salvo: sem id, com data de agora e nenhuma curtida. */
    public Comentario(Usuario usuario, int propostaId, String texto) {
        this(0, usuario, propostaId, LocalDateTime.now(), texto, 0);
    }

   
    @Override
    public String exibirInteracao() {
        // getId(), getUsuario()... são herdados de Interacao
        return String.format("[Comentário #%d] %s em %s (%d curtida%s)%n    \"%s\"",
                getId(), getUsuario().getNome(), getDataRegistro().format(FORMATO_DATA),
                curtidas, curtidas == 1 ? "" : "s", texto);
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public int getCurtidas() {
        return curtidas;
    }
}
