class Carro {   
    constructor(marca, cor, preco){
        this.marca = marca;
        this.cor = cor;
        this.preco = preco;
    }   

    rodas(){
        console.log(4)
    }

    get getcor(){
        return this.cor;

    }

    set setcor(cor){
        this.cor = cor;
    }


}


let Esportiva = new Carro('Chevrolet', 'cinza')

console.log(Esportiva)

Esportiva.setcor = 'Verde'

console.log(Esportiva.getcor)
