/*      Atualzar dados por focusOut do input e select       */

input.forEach(function (valor){
    valor.addEventListener("focusout",function(){
        dadosAtualizados();
        console.log("Salvo por input");
        
    });
});

select.forEach(function(valor){
    valor.addEventListener("focusout",function(){
        dadosAtualizados();
        console.log("Salvo por select");
        
    });
});



//Objetivo: Atualizar os dados através das chamada das funções abaixo
function dadosAtualizados(){
    salvarDados();
    calculaValoresAtt();
    atribuiPeso();
}


//Objetivo: Calcula total de valores nos atributosB1 e manda para o input de total de valores;
function calculaValoresAtt(){
    let ptsSoma = 0;
    
    //calcula total de valores
    atributosB1.forEach(function(atual){
        ptsSoma += Number(atual.value);
        
    });
    ptsSoma -=Number(atributosB1[atributosB1.length-1].value);
    
    //verificar dados
    
    atributosB1[Number(atributosB1.length)-1].value = ptsSoma;   
}


//Objetivo: Atrobui e valida peso dos itens;
function atribuiPeso(){
    var totalPeso = attPeso.reduce(function (atual,proximo){
        return Number(atual.value+proximo.value);
    });
    
    console.log(totalPeso);
}


        
    

