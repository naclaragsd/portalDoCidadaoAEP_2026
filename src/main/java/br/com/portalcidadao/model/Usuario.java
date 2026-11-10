package br.com.portalcidadao.model;

/**
 * Usuário da plataforma. Por padrão representa um cidadão;
 * a classe Vereador herda daqui e muda só o que é diferente.
 *
 *.
 */
public class Usuario {

    
    public static final int IDADE_MINIMA = 16;

    
    private int id;
    private String nome;
    private String cpf;
    private int idade;
    private String cidade;

    public Usuario(int id, String nome, String cpf, int idade, String cidade) {
        
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.cidade = cidade;
    }

    /**
     * [CONCEITO] Sobrecarga de construtor: dois construtores com o mesmo nome e parâmetros
     * diferentes. Este é usado para um usuário NOVO, que ainda não tem id
     * (quem gera o id é o AUTO_INCREMENT do banco). this(...) chama o outro construtor.
     */
    public Usuario(String nome, String cpf, int idade, String cidade) {
        this(0, nome, cpf, idade, cidade);
    }

    // Os três métodos abaixo são sobrescritos na classe Vereador.
    
    /** Valor gravado na coluna tipo_usuario do banco. */
    public String getTipo() {
        return "CIDADAO";
    }

    public boolean isVereador() {
        return false;
    }

    public String getDescricaoTipo() {
        return "Cidadão";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public int getIdade() {
        return idade;
    }

    public String getCidade() {
        return cidade;
    }
}
