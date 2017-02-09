//Apresenta as posições X e Y do cursor do mouse;
class PosicaoMouse{
    
    constructor(){
        this._x = 2;
        this._y = 2;
    }
    
    inicializacao(event){
        this._x = event.clientX;
        this._y = event.clientY;
    }
    
    get x(){
        return this._x;
    }
    
    get y(){
        return this._y;
    }
}