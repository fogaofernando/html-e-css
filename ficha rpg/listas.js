/*---------Principal-----------*/

inicializaListas();


/*---------Fuções----------*/


/*      Funções de criação de campo por TAG     */

//Objetivo: Cria um novo campo mochila;
//Entrada:  Posição da tag;
function tagCampoMochila(posicaoTag){    
    var novoCampo =
            "<tr>"+
                "<td><input id='obj"+String(posicaoTag)+"-nome' class='listaMochila' type='text' placeholder='Objeto'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-caracteristicas' class='listaMochila'  placeholder='Caracteristicas do objeto'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-peso' class='labelNumero listaMochila' type='number' placeholder='Peso'></td>"+
                "<td><input id='obj"+String(posicaoTag)+"-quantidade' class='labelNumero listaMochila' type='number' placeholder='Quantidade'></td>"+
            "</tr>";
    
    tabela[0].innerHTML = tabela[0].innerHTML + novoCampo; 
}


//Objetivo: Cria um novo campo Armas;
//Entrada:  Posição da tag;
function tagCampoArmas(posicaoTag){    
    var novoCampo =
            "<tr>"+
                "<td><input id='arma"+String(posicaoTag)+"-nome' class='listaArmas' type='text' placeholder='Nome da arma'></td>"+
                "<td><input id='arma"+String(posicaoTag)+"-detalhes' class='listaArmas' type='text' placeholder='Detalhes da arma'></td>"+
                "<td><input id='arma"+String(posicaoTag)+"-peso' class='labelNumero listaArmas' type='number' placeholder='Peso'></td>"+
                "<td><input id='arma"+String(posicaoTag)+"-quantidade' class='labelNumero listaArmas' type='number' placeholder='Quantidade'></td>"+
            "</tr>";
    
    tabela[1].innerHTML = tabela[1].innerHTML + novoCampo; 
}


//Objetivo: Cria um novo campo Jutsus;
//Entrada:  Posição da tag;
function tagCampoJutsus(posicaoTag){    
    var novoCampo =
            "<tr>"+
                "<td><input id='jutsu"+String(posicaoTag)+"-nome' class='listaJutsus' type='text' placeholder='Nome do jutsu'></td>"+
                "<td><input id='jutsu"+String(posicaoTag)+"-Informacoes' class='listaJutsus' type='text' placeholder='Informações do jutsu'></td>"+
                "<td><input id='jutsu"+String(posicaoTag)+"-chacara' class='labelNumero listaJutsus' type='number' placeholder='Custo'></td>"+
            "</tr>";
    
    tabela[2].innerHTML = tabela[2].innerHTML + novoCampo; 
}



/*      Função de botão     */

//Objetivo: Quando clicado, adiciona um novo campo mochila;
function novoCampoMochila(){
    lista[0]++;
    salvarDados();
    tagCampoMochila(lista[0]);
    atualizaDados();
    
}


//Objetivo: Quando clicado, adiciona um novo campo armas;
function novoCampoArmas(){
    lista[1]++;
    salvarDados();
    tagCampoArmas(lista[1]);
    atualizaDados();
    
}


//Objetivo: Quando clicado, adiciona um novo campo jutsus;
function novoCampoJutsus(){
    lista[2]++;
    salvarDados();
    tagCampoJutsus(lista[2]);
    atualizaDados();
    
}



/*      Função de atualização de dados      */

//Objetivo: Atualiza os dados das listas ao iniciar o programa
function inicializaListas(){
    //Variaveis/inicialização
    var cont;
    
    //criando as tags
    for(cont =0;cont<=lista[0];cont++){
        tagCampoMochila(cont);       
    }
    
    for(cont =0;cont<=lista[1];cont++){
        tagCampoArmas(cont);       
    }
    
    for(cont =0;cont<=lista[2];cont++){
        tagCampoJutsus(cont);        
    }
    
    //atualizando os dados
    atualizaDados();
}


//Objetivo: Atualiza todos os dados das listas 
function atualizaDados(){
    //Atribuindo dados mochila
    for(cont =0;cont<=lista[0];cont++){
        listaMochila = document.querySelectorAll(".listaMochila");
        
        listaMochila.forEach(function (listaM,cont2){
            listaM.value = importarDados(listaM.id);
            
        });
    
    }
    
    //Atribuindo dados armas
    for(cont =0;cont<=lista[1];cont++){
       listaArmas = document.querySelectorAll(".listaArmas");
        
        listaArmas.forEach(function (listaA,cont2){
            listaA.value = importarDados(listaA.id);
            
        });
    
    }
    
    //Atribuindo dados jutsus
    for(cont =0;cont<=lista[2];cont++){
        listaJutsus = document.querySelectorAll(".listaJutsus");
        
        listaJutsus.forEach(function (listaJ,cont2){
            listaJ.value = importarDados(listaJ.id);
            
        });
    
    }
}

