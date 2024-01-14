function RetornarNumero (Maxi = 60 ) {
  return  Math.floor(Math.random() * Maxi);
}

console.log(RetornarNumero())


// Segunda Forma 

function RetornarNumero02 (Min) {
    return Math.floor(Math.random() * Min) + 1;
}

console.log(RetornarNumero02(105))