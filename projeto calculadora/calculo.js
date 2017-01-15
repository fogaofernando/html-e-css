//variaveis iniciais
var botao = document.querySelector("#botao-adicao");
var ad = ["1","2"]; 
var x = new Array(2);


botao.addEventListener("click",function(event){
    teste();
    console.log(x);
    
    event.preventDefault(); //cancela atualização da página ao clicar
    ad[0] = document.querySelector("#ad1");
    ad[1] = document.querySelector("#ad2");

    var elementResult = document.getElementById("adicao");
    elementResult.textContent = soma(ad[0].value,ad[1].value);
   
});


function teste(){
    x[0] = x[1]+1;
    
}


function soma(v1,v2){
    return Number(v1)+Number(v2);
}