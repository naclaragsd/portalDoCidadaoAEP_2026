package br.com.portalcidadao.model;


public class Vereador extends Usuario {

    private String partido;

    public Vereador(int id, String nome, String cpf, int idade, String cidade, String partido) {
      
        super(id, nome, cpf, idade, cidade);
        this.partido = partido;
    }

   

    @Override
    public String getTipo() {
        return "VEREADOR";
    }

    @Override
    public boolean isVereador() {
        return true;
    }

    @Override
    public String getDescricaoTipo() {
        return "Vereador - " + partido;
    }

    public String getPartido() {
        return partido;
    }
}
