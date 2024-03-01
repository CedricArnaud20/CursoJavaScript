class Carro {   
    constructor(marca, cor, preco){
        this.marca = marca;
        this.cor = cor;
        this.preco = preco;
    }   

    rodas(){
        console.log(4)
    }
}

let Esportivo = new Carro('fiat','branca',1000);

console.log(Esportivo)
