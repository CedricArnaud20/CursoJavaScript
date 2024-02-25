function VideogGames (tipo,controles,valor,versao) {
    let Games = Object.create({});
    Games.tipo = tipo;
    Games.contoles = controles;
    Games.valor = valor;
    Games.versao = versao;

    return Games;
}

let Playstation = VideogGames('SONY',2, 3.500, 'PS5');

let Xbone = VideogGames('SEA GAME', 1 , 2600, 'Serie s')
 
console.log(Playstation)

console.log(Xbone)