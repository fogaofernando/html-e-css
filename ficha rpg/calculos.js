/*      Salvar dados por focusOut       */

input.forEach(function (valor){
    valor.addEventListener("focusout",function(){
        salvarDados();
        console.log("Salvo por input");
    });
});

select.forEach(function(valor){
    valor.addEventListener("focusout",function(){
        salvarDados();
        console.log("Salvo por select");
    });
});


/*      Verificar validade dos dados atributos       */


atributosB1.forEach(function (valor,cont){
    valor.addEventListener("focusout",function(){
        var ptsSoma = 0;
        
        //Calcula total de valores
        atributosB1.forEach(function(atual){
            ptsSoma += Number(atual.value);
        });
       // ptsSoma -= Number(atributosB1[Number(atributosB1.length)].value);
        ptsSoma = atributosB1[Number(atributosB1.length)-1].value;   
        console.log(">>>"+ptsSoma);
    });
});



