package br.com.portalcidadao.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/** Proposta legislativa (projeto de lei) publicada por um vereador. */
public class Proposta {


    private static final DateTimeFormatter FORMATO_DATA = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    private int id;
    private String titulo;
    private String descricao;
    private String resumo;                  
    private LocalDate dataPublicacao;
    private SituacaoProposta situacao;      
    private int votosFavoraveis;            
    private int votosContrarios;

   
    private Vereador vereador;

   
    private double mediaEstrelas;
    private int totalAvaliacoes;

   
    public Proposta() {
    }

  
    public Proposta(String titulo, String descricao, String resumo, Vereador vereador) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.resumo = resumo;
        this.vereador = vereador;
        this.dataPublicacao = LocalDate.now();
        this.situacao = SituacaoProposta.EM_ANALISE;
    }

  
    public String linhaListagem() {
      
        return String.format("#%d | %s | %s | %s | %s | %s",
                id, titulo, situacao.getDescricao(), dataPublicacao.format(FORMATO_DATA),
                vereador.getNome(), textoAvaliacao());
    }

   
    public String detalhes() {
      
        StringBuilder sb = new StringBuilder();
        sb.append("#").append(id).append(" - ").append(titulo).append("\n");
        sb.append("Autor: ").append(vereador.getNome()).append(" (").append(vereador.getPartido()).append(")\n");
        sb.append("Publicada em: ").append(dataPublicacao.format(FORMATO_DATA)).append("\n");
        sb.append("Situação: ").append(situacao.getDescricao()).append("\n");
        sb.append("Votação: ").append(textoVotacao()).append("\n");
        sb.append("Avaliação dos cidadãos: ").append(textoAvaliacao()).append("\n");
        sb.append("\nResumo em linguagem simples:\n  ")
          .append(resumo == null || resumo.isBlank() ? "(o autor ainda não escreveu um resumo)" : resumo)
          .append("\n");
        sb.append("\nTexto da proposta:\n  ").append(descricao).append("\n");
        return sb.toString();
    }



    private String textoVotacao() {
        if (situacao == SituacaoProposta.EM_ANALISE) {
            return "ainda não foi votada";
        }
        return votosFavoraveis + " votos favoráveis x " + votosContrarios + " votos contrários";
    }

    private String textoAvaliacao() {
        if (totalAvaliacoes == 0) {
            return "sem avaliações";
        }
      
        return String.format("%.1f de 5 estrelas (%d %s)", mediaEstrelas, totalAvaliacoes,
                totalAvaliacoes == 1 ? "avaliação" : "avaliações");
    }

  

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getResumo() {
        return resumo;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public LocalDate getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }

    public SituacaoProposta getSituacao() {
        return situacao;
    }

    public void setSituacao(SituacaoProposta situacao) {
        this.situacao = situacao;
    }

    public int getVotosFavoraveis() {
        return votosFavoraveis;
    }

    public void setVotosFavoraveis(int votosFavoraveis) {
        this.votosFavoraveis = votosFavoraveis;
    }

    public int getVotosContrarios() {
        return votosContrarios;
    }

    public void setVotosContrarios(int votosContrarios) {
        this.votosContrarios = votosContrarios;
    }

    public Vereador getVereador() {
        return vereador;
    }

    public void setVereador(Vereador vereador) {
        this.vereador = vereador;
    }

    public double getMediaEstrelas() {
        return mediaEstrelas;
    }

    public void setMediaEstrelas(double mediaEstrelas) {
        this.mediaEstrelas = mediaEstrelas;
    }

    public int getTotalAvaliacoes() {
        return totalAvaliacoes;
    }

    public void setTotalAvaliacoes(int totalAvaliacoes) {
        this.totalAvaliacoes = totalAvaliacoes;
    }
}
