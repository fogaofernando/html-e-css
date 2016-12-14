//Variavies iniciais
/*var peso = 100;
var altura = 5 ;
var jao;

//var diferenteDeZero = (altura!=0); //Booleana


//Calculo do IMC
if(altura == 0){
    console.log(">>>Erro: Altura Inválida");
}else{
    var imc  = peso / (altura * altura);
    console.log(imc);
}*/

var sal = prompt("Informe o salário mensal: ");


if (sal < 1000){
    console.log("5%");
}else if(sal < 2000){
    console.log("10%");
}else{
    console.log("15%");
}