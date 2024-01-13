let Idade = 20;


function verificarIdadeVotacao(Idade) {

   if (Idade < 16) {
      return "Votação não permitido";
   } else if (Idade === 17 || Idade === 18) {
      return "Votação opcional"
   } else if (Idade >= 20) { 
      return "Votação Obrigatória"
   }else{
      return "Não relacionado"
   }
}


console.log(verificarIdadeVotacao(Idade));