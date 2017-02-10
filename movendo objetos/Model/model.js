//------------------------VARIAVEIS/INSTANCIAMENTO---------------------//
var posMouse;
var inputs = getDOM('input');
var caixa = getDOM('.caixa');

//------------------------FUNÇÕES---------------------//

//Objetivo: Buscar elemento(s) html;
//Entrada:  String com o seletor do elemento;
//Retorno:  DOM;
function getDOM(att){
    let valorDOM = document.querySelectorAll(att);
    
    if(valorDOM.length == 1){
        return valorDOM[0];
    }else{
        return valorDOM;
    }
}

