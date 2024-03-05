
class Mamifero {
    constructor(perna) {
        this.perna = perna;
    }
}


let Homem = new Mamifero(2);

console.log(Homem)


class elefante extends Mamifero{
    constructor(perna, raca) {
        super(perna, raca);
      this.raca = raca;
    }


    latir(){
        console.log('Não')
    }

}


let ele01 = new elefante(4,'Ser vivo');

console.log(ele01)

console.log(new elefante instanceof Mamifero)

console.log(Homem instanceof Mamifero)