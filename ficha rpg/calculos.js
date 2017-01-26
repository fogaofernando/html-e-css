/*---------------PRINCIPAL---------------*/

//Variaveis/Instanciamento
var input = document.querySelectorAll("input"); 
var dadosI = new Array(3);
var atributosB1 = new Array(13);
var atributosB2 = new Array(12);
var mochila = new Array(3);
var listaMochila = new Array(4);
var listaArmas = new Array(4);
var listaJutsus = new Array(3);

//Desenvolvimento
atualizarDados();
organizaInputs();



/*---------------FUNÇÕES---------------*/

function organizaInputs(){
    input.forEach(function(inputAtual,cont){
        
        if(cont<3){
            dadosI[cont] = inputAtual;
        
        }else if(cont<16){
            atributosB1[cont-3] = inputAtual;
        
        }else if(cont<28){
            atributosB2[cont-16] = inputAtual;
        
        }else if(cont<31){
            mochila[cont-28] = inputAtual;
        
        }else if(cont<35){
            listaMochila[cont-31] = inputAtual;
        
        }else if(cont<39){
            listaArmas[cont-35] = inputAtual;
        
        }else{
            listaJutsus[cont-39] = inputAtual;
        } 
    });
    
    
}


function atualizarDados(){
    importarDados("nome");
}


function salvarDados(){
    exportarDados("nome");
}



/*      Funçoes storage     */
function importarDados(valorS){
    document.getElementById(valorS).value = localStorage.getItem(valorS);
}

function exportarDados(valorS){
    localStorage.setItem(valorS,document.getElementById(valorS).value);
}

//Obs: localStorage só trabalha com retorno de string