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