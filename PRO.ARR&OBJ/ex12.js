
let NumeroInt = [2,6,9,7,5,9,6,25,2,6,3]
let numeroPares = []

function AcharInteiros (NumeroInt) {
    for (let i = 0; i < NumeroInt.length; i++) {
        if (NumeroInt[i] % 2 == 0) {
            numeroPares.push(NumeroInt[i]);
        }
    }
}

AcharInteiros(NumeroInt);
console.log("Números pares encontrados:", numeroPares);