/*---------------PRINCIPAL---------------*/

//DOM
var iniciais = document.querySelectorAll(".iniciais");
var atributosB1 = document.querySelectorAll(".atributosB1");
var atributosB2 = document.querySelectorAll(".atributosB2");
var mochila = document.querySelectorAll(".mochila");
var listaMochila = document.querySelectorAll(".listaMochila");
var listaArmas = document.querySelectorAll(".listaArmas");
var listaJutsus = document.querySelectorAll(".listaJutsus");

carregarDados();
/*---------------FUNÇÕES---------------*/


//Objetivo: Salva todos os dados quando chamado;
function salvarDados(){
    var cont;
    
    iniciais.forEach(auxiliaSalvarDOM);
    atributosB1.forEach(auxiliaSalvarDOM);
    atributosB2.forEach(auxiliaSalvarDOM);
    mochila.forEach(auxiliaSalvarDOM);
    
    listaMochila.forEach(auxiliaSalvarDOM);
    listaArmas.forEach(auxiliaSalvarDOM);
    listaJutsus.forEach(auxiliaSalvarDOM);
}


//Objetivo: Carrega todos os dados salvos quando chamado;
function carregarDados(){
    var cont;
    
    for(cont =0;cont<iniciais.length;cont++){
        iniciais[cont].value = importarDados(iniciais[cont].id);
    }
    
    for(cont =0;cont<atributosB1.length;cont++){
        atributosB1[cont].value = importarDados(atributosB1[cont].id);
    }
    
    for(cont =0;cont<atributosB2.length;cont++){
        atributosB2[cont].value = importarDados(atributosB2[cont].id);
    }
    
    for(cont =0;cont<mochila.length;cont++){
        mochila[cont].value = importarDados(mochila[cont].id);
    }
    
    for(cont =0;cont<listaMochila.length;cont++){
        listaMochila[cont].value = importarDados(listaMochila[cont].id);
    }
    
    for(cont =0;cont<listaArmas.length;cont++){
        listaArmas[cont].value = importarDados(listaArmas[cont].id);
    }
    
    for(cont =0;cont<listaJutsus.length;cont++){
        listaJutsus[cont].value = importarDados(listaJutsus[cont].id);
    }
}


//Objetivo: Auxilia em salvar os dados DOM (em array) no localStorage;
//Entrada:  Valor(DOM);
//Retorno:  Null;
function auxiliaSalvarDOM(valor){
    exportarDados(valor.id,valor.value)
}


//Objetivo: Auxilia em carregar os dados do DOM(em array) salvos no localStorage 
//Entrada:  Valor(DOM) e um contador (percorrendo array);
//Retorno:  Null;
function auxiliaCarregarDOM(valor, cont){
    iniciais = importarDados(valor.id,valor.value)
}


/*      Funções storage     */

//Objetivo: Trazer um valor salvos no localStorage;
//Entrada:  Recebe o nome chave do dado salvo;
//Retorno:  Retorna o valor salvo no localStorage daquela chave específica;
function importarDados(nome){
    recebeDados = localStorage.getItem(nome);
    return recebeDados;
}


//Objetivo: Salva um valor dado no localStorage;
//Entrada:  Nome da Key e valor(string);
//Retorno:  Null;
function exportarDados(nome,valor){
    localStorage.setItem(nome,String(valor));
}
