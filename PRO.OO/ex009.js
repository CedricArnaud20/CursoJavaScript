class Livro {
    constructor(autor, titulo, disponivbilidade) {
        this.autor = autor;
        this.titulo = titulo;
        this.disponiboniblidade = disponivbilidade;
    }


    emprestar() {
        if (this.disponiboniblidade == true) {
            this.disponiboniblidade = false;
            console.log("O livro esta disponivel para ser emprestado");
        } else {
            console.log("Ops o livro não se encontra disponível para ser emprestado")
        } 
    }


    devolucao(){
        if (this.disponiboniblidade == false) {
            this.disponiboniblidade = true;
            console.log("O livro foi devolvido com sucesso!!")
        }else {
            console.log("O livro já esta disponivél")
        } 
    }

    consultarDisponibilidade(){
        return this.disponiboniblidade
    }


}

let leitor = new Livro ('A batalha de todo Homem', 'John Wick', true);

leitor.emprestar()

console.log(leitor.consultarDisponibilidade())


leitor.devolucao()
console.log(leitor.consultarDisponibilidade())

