class Conta{
    constructor(saldo = 0.0){
        this._saldo = saldo;
    }
    
    get saldo(){
        return this._saldo;
    }
    
    atualizar(taxa){
        throw new Error("Deve sobrescrever o método atualizar");    
    }
}