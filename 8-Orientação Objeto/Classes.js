let carro = {
    rodas: 4,
    marca:'sm',
    
    ronco: function (params) {
      console.log('Vrummm')   
    }
}


let Mercedes  = Object.create(carro);

Mercedes.ronco();

Mercedes.marca ="Alto padrão";

console.log(Mercedes.rodas);
console.log(Mercedes.marca);