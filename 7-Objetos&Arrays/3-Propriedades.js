let carro = {
    motor: 1.0,
    marca: 'chevrolet',
    cambio : 'Auto'
}

let adicionais = {
    tetoSolat: true,
    arCondicionad: true
}

console.log(carro)
console.log(adicionais)

Object.assign(carro,adicionais)

console.log(carro)