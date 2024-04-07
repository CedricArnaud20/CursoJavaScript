class Voo{
    constructor(codigoVoo, origem, destino, assentoDispo){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentoDispo = assentoDispo;

    }


    reservarAssento(qtdAssentos) {
        if (qtdAssentos <= 0) {
            console.log("Por favor, forneça uma quantidade válida de assentos para reservar.");
        } else if (this.assentoDispo < qtdAssentos) {
            console.log("Não há assentos disponíveis suficientes.");
        } else {
            this.assentoDispo -= qtdAssentos;
            console.log(`Assento(s) reservado(s) com sucesso: ${qtdAssentos}`);
        }
    }




    consultarAssentoDis(){
        return this.assentoDispo
    }


}


let Passageiro = new Voo(237, 'BSB-Brasília', 'PCG-Paris Charle de Gualle', 15);

Passageiro.reservarAssento(23)

console.log(Passageiro.consultarAssentoDis())