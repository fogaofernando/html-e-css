/*---------------PRINCIPAL---------------*/

var iniciais = document.querySelectorAll(".iniciais");
var atributosB1 = document.querySelectorAll(".atributosB1");
var atributosB2 = document.querySelectorAll(".atributosB2");
var mochila = document.querySelectorAll(".mochila");
var listaMochila = document.querySelectorAll(".listaMochila");
var listaArmas = document.querySelectorAll(".listaArmas");
var listaJutsus = document.querySelectorAll(".listaJutsus");

/*---------------FUNÇÕES---------------*/


function atualizarDados(){
    input.forEach(function (valorAtual,cont){
        //input[] = 5;
    });
}


function salvarDados(){
    exportarDados("nome");
}


/*      Funçoes storage     */

function importarDados(nome){
    recebeDados = localStorage.getItem(nome);
    return recebeDados;
}

function exportarDados(valorS){
    localStorage.setItem(valorS,document.getElementById(valorS).value);
}

//Obs: localStorage só trabalha com retorno de string