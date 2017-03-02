class ContaPoupanca extends Conta{
    atualizar(taxa){
        this._saldo += (taxa * 2);
    }
    
}