
class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    
    calcularArea(area){
        
        this.area = this.largura * this.altura;
    }
    
    calcularPerimetro(perimetro){
        
        this.perimetro = (2 * (this.largura + this.altura));
    }
    
}


let NovoRetangulo = new Retangulo(10,2);

NovoRetangulo.calcularArea();
NovoRetangulo.calcularPerimetro();


console.log("Área:", NovoRetangulo.area);
console.log("Perímetro:", NovoRetangulo.perimetro);




