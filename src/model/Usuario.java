package br.com.portalcidadao.model;


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

   
    public Usuario(String nome, String cpf, int idade, String cidade) {
        this(0, nome, cpf, idade, cidade);
    }

  
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
