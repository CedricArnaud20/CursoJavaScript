

// Funçao para reescrever uma palavra ao contraio
function revertString(palavra) {
    const pala = palavra.split('').reverse().join('');
    return pala;

}

console.log(revertString("Ola"))



//Função para contar  vogais contida dentro de uma palavra

function countVowels(Vowel) {
    const vo = Vowel.match(/[aieouAIEUO]/g) || [];
    return vo.length;
}

// const minhaString = "Ola muno eai"
// const resultadoVogais = countVowels(minhaString)

// console.log(resultadoVogais)
console.log('a quantidae vogais é de :', countVowels("salut comment ça va?"))



// Fução para somar total de alunos passado dentero de uma string 

function SomaAlunos (array) {
    
    const Somador = array.reduce((total , numero) => total + numero, 0)
    
    return Somador;
}

const alunos = [20, 25, 35, 56]
const totalAkunos = SomaAlunos(alunos)

console.log(totalAkunos)

// Função para somar total de alunos passado dentro de uma string validandno se o numero é para antes de somar

function sumEvenNumbers(array) {
    // Verifica se array é um array
    if (!Array.isArray(array)) {
        console.error('O argumento não é um array válido.');
        return;
    }

    // Usa o método reduce para somar apenas os números pares no array
    const somaPares = array.reduce((total, numero) => {
        if (numero % 2 === 0) {
            return total + numero;
        }
        return total;
    }, 0);

    return somaPares;
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoSomaPares = sumEvenNumbers(numeros);

if (resultadoSomaPares !== undefined) {
    console.log('A soma dos números pares é:', resultadoSomaPares);
}