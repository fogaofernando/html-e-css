let loop;
var limiteY = 500;

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





class Funcoes{
    static gravidade(obj){
        
        loop = setInterval(function(){
            
            obj.style.top = obj.offsetTop+10;
            limiteGravidade(obj);        
        }, 18);
        
        
    }
    
    static limiteGravidade(obj){
        
        /*if(obj.offsetTop >= limiteY){
            clearInterval(loop);
        }*/
    }
    
    
}