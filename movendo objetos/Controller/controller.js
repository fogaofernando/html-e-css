//------------------------VARIAVEIS/INSTANCIAMENTO---------------------//
posMouse = new PosicaoMouse();


//------------------------FUNÇÕES---------------------//

//Objetivo: Inicializar valores da posição do mouse;
function inicializaçãoPosicaoMouse(event){
    posMouse.inicializacao(event);
}

function seguirMouse(){
    caixa[0].style.left = posMouse.x - 25+(caixa[0].style.width/2);
    caixa[0].style.top = posMouse.y - 25+(caixa[0].style.height/2);
}