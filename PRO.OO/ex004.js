class Carro { 
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo;
    }


    Dirigir(km){

        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;

    }

    Abaster(Gas){
        let  tanque = Gas ;

        this.gasolinaRestante += tanque;

    }

}



let carro = new Carro("Fiat","Vemelho",100 ,10);// console.log(carro);

carro.Dirigir(10)

//carro.Abaster(200)

console.log(carro);


