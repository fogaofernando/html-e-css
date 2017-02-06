class Negociacao{
    constructor(data,qtd,valor){
        this._data = new Date(data.getTime());
        this._quantidade = qtd;
        this._valor =valor;
        this.teste = 0;
        Object.freeze(this);
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
    
    get data(){
        return this._data;
    }
    
    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    
    
}