class Mercadinho{
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }


    AdicionarProduto(Produto){
        
        for(let ProdutoCarrinho in this.itens){
        if(this.itens[ProdutoCarrinho].id == Produto.id){
           this.itens[ProdutoCarrinho].qtd += Produto.qtd; 
        }
        }

        this.qtd += Produto.qtd;
        this.valorTotal += Produto.preco * Produto.qtd;

    }


}

let carrinho = new Mercadinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },

    {
        id: 2,
        nome: "Calça",
        qtd: 1,
        preco: 20
    }


])

console.log(carrinho)

carrinho.AdicionarProduto({id:1, nome: "Camisa", qtd:2 , preco: 50});

