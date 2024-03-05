

class Banco  {
    constructor(saldo) {
        this.saldo = saldo;
    }


    Deposito(valor) {
        this.saldo += valor;    
    }

    saque(valor) {
        this.saldo -= valor;
    }
  
    
}

let conta = new  Banco(10000)

conta.Deposito(10000)

console.log(conta.saldo);

conta.saque(10000)

console.log(conta.saldo);



