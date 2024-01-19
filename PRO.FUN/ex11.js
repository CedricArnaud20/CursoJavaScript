function Decrement(Number) {
    for (let i = Number; i > 0; i= i - 1){

        if (i % 2 == 0) {
            console.log(i)
        }
    
       
    }
}

Decrement(15)


function revertString(palavra) {
    const pala = palavra.split('').reverse().join('');
    return pala;

}

console.log(revertString("Ola"))