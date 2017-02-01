/*---------------PRINCIPAL---------------*/

/*Variaveis/inicialização*/

//DOM
var iniciais = document.querySelectorAll(".iniciais");
var atributosB1 = document.querySelectorAll(".atributosB1");
var atributosB2 = document.querySelectorAll(".atributosB2");
var mochila = document.querySelectorAll(".mochila");
var listaMochila = document.querySelectorAll(".listaMochila");
var listaArmas = document.querySelectorAll(".listaArmas");
var listaJutsus = document.querySelectorAll(".listaJutsus");


//Quantidade de tags por lista
var lista = [Number(importarDados("QT_LISTA_MOCHILA")),
             Number(importarDados("QT_LISTA_ARMAS")),
             Number(importarDados("QTLISTA_JUTSUS"))
            ];
var tabela = document.querySelectorAll("table");

/*Atualizando dados nas variaveis e nas tags*/
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


/*      Fuções campo das listas*/

//Cria um novo campo mochila;
function campoMochila(){
    lista[0]++;
    var novoCampo =
            "<tr>"+
                "<td><input id='obj"+String(lista[0])+"-nome' class='listaMochila' type='text' placeholder='Objeto'></td>"+
                "<td><input id='obj"+String(lista[0])+"-caracteristicas' class='listaMochila'  placeholder='Caracteristicas do objeto'></td>"+
                "<td><input id='obj"+String(lista[0])+"-peso' class='labelNumero listaMochila' type='number' placeholder='Peso'></td>"+
                "<td><input id='obj"+String(lista[0])+"-quantidade' class='labelNumero listaMochila' type='number' placeholder='Quantidade'></td>"+
            "</tr>";
    tabela[0].innerHTML = tabela[0].innerHTML + novoCampo; 
}

function campoArmas(){
    
}

function campoJutsus(){
    
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
