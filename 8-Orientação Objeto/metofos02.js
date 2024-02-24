const  homem = {
    raca:'preto',
    comer: function(){
        console.log("Comida")
    },
    andar:function(){
        console.log("A pé")
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raca desse homem é "+ this.raca;
    }
}

homem.andar()
homem.comer()

homem.setRaca('Africano')

console.log(homem.raca)
console.log(homem.getRaca())