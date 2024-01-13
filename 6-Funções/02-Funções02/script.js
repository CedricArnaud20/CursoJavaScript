function multiplicadorTresNumero (x,y,z) {
   return x * y * z;
   
}

console.log(multiplicadorTresNumero(2,3,5))

const mult = multiplicadorTresNumero(5,6,6)


console.log("Valor de multa " + mult)



function PermissaoDirigir(idade, cnh) {
   
   if (idade >= 18 && cnh == true) {
      console.log("Pode dirigir")
   } else {
      console.log("Não pode dirigir")
   }
}


console.log(PermissaoDirigir(17,false));
console.log(PermissaoDirigir(20,true));


function JogarGames(Idade) {
   if (Idade >= 7) {
      console.log('Pode Jogar FIFA')
   } else {
      console.log('Espera um pouco mais')
   }
}

console.log(JogarGames(1))