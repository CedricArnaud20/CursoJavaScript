class ContaBancaria {
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo
    }
    
    deposito(valor){
        this.saldo += valor;
    }
    
    sacar(valor) {
        if (valor > this.saldo ) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso.`);
        }
    }
    
    consultarSaldo (){
        return this.saldo;
    }
}

let conta = new ContaBancaria(237, 17000)


conta.sacar(15000)


console.log(conta.consultarSaldo())