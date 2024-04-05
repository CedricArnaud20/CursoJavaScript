class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }


    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;

    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

    

}



let EndCliente = new Endereco ("Manoel Fonesca", "São Carlos", "Anápolis", "GO")

console.log(EndCliente)

EndCliente.novaRua = "Rua Fastone"

console.log(EndCliente)


