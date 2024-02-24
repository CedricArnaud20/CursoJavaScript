
let Numero = [2,6,9,7,5,9,6,25,2,6,3]

let soma = 0
function sumUniqueNumbers () {
    for (let index = 0; index < Numero.length; index++) {
        
        soma += Numero[index]
    }
}

sumUniqueNumbers(Numero);
console.log(soma);


