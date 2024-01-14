function Tamanho(Palavra) {
    if (Palavra.length > 10) {
        console.log("Texto Muito Longa")
    } else if (Palavra.length < 10) {
        console.log("Texto dentro do limite")
    }
}

Tamanho("Bom dia tu ")
Tamanho("Ola pai")