//------------------------VARIAVEIS/INSTANCIAMENTO---------------------//
posMouse = new PosicaoMouse();


//------------------------FUNÇÕES---------------------//

//Objetivo: Inicializar valores da posição do mouse;
function inicializaçãoPosicaoMouse(event){
    posMouse.inicializacao(event);
}


function arrastarCaixa(ev){
    let dragObjeto = 1;
    ev.preventDefault();
    document.addEventListener("mousemove",function(){
        if(dragObjeto){
            seguirMouse(caixa);
        }
    });
    
    
    document.addEventListener("mouseup",function (){
        dragObjeto = 0;
    });
    
}


function teste(){
       
}

//Objetivo: O elemento recebe as coordenadas da caixa passada por parametro;
//Entrada:  Elemento HTML;
function seguirMouse(objeto){
    objeto.style.left = posMouse.x;
    objeto.style.top = posMouse.y; 
}


