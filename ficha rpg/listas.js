/*---------Principal-----------*/

inicializaListasMochila();


/*---------Fuções----------*/

//Objetivo: Cria um novo campo mochila;
function campoMochila(posicaoTag){    
    var novoCampo =
            "<tr>"+
                "<td><input id='obj"+String(posicaoTag)+"-nome' class='listaMochila' type='text' placeholder='Objeto'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-caracteristicas' class='listaMochila'  placeholder='Caracteristicas do objeto'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-peso' class='labelNumero listaMochila' type='number' placeholder='Peso'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-quantidade' class='labelNumero listaMochila' type='number' placeholder='Quantidade'></td>"+
            "</tr>";
    
    tabela[0].innerHTML = tabela[0].innerHTML + novoCampo; 
}

function campoArmas(){
    
}

function campoJutsus(){
    
}


//Objetivo: Quando clicado, adiciona um novo campo mochila;
function novoCampoMochila(){
    lista[0]++;
    campoMochila(lista[0]);
    
}


//Objetivo: Atualiza os dados das listas ao iniciar o programa
function inicializaListasMochila(){
    //Variaveis/inicialização
    var cont;
    
    
    //criando as tags
    for(cont =0;cont<=lista[0];cont++){
        campoMochila(cont);
        listaMochila = document.querySelectorAll(".listaMochila");
    }
    
   atualizaDadosMochila();
}


//Objetivo: Atualiza os dados da mochila no HTML
function atualizaDadosMochila(){
    //Atribuindo dados
    for(cont =0;cont<=lista[0];cont++){
        listaMochila[cont].value = importarDados(listaMochila[cont].id);
        //listaMochila[cont].value =  10;
    }
}