var Idade = 28;
let CNHT= true;
let CNH= false;


if (Idade >= 18 && CNH === false) {
    console.log("Voce tem 18 anos ou mais , mas não possui cnh Consquentemente não pode dirigir")
} else if(Idade >= 18 && CNHT === true) {
    console.log("Voce tem 18 anos e possui cnh pode dirigir")
} else if(Idade <= 18 && CNH === false){
    console.log("Voce não tem 18 anos mas não possui cnh Consquentemente não pode dirigir")
} else {
        console.log("Condição não tratada.");
    }

