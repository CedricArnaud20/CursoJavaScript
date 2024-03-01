function Carros (marca, rodas, cor) {
    this.marca = marca;
    this.rodas = rodas;
    this.cor = cor;
    
}

Carros.prototype.roncos = function(){
    console.log("Vrummmmmmmmmmm")
}

Carros.prototype.marchas = function(){
    console.log("4")
}


let Esportivo = new Carros('Chevrolet', 4, 'vermelho')

let marcha = new Carros('')

Esportivo.roncos()

marcha.marchas()