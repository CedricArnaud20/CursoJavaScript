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

Carro.prototype.cavalo = 'SD'
Carro.prototype.cavalo = 120

let Esportivo = new Carro('fiat','branca',1000);

console.log(Esportivo)

Esportivo.rodas()

console.log(Carro.prototype.marca)
console.log(Esportivo.cavalo)