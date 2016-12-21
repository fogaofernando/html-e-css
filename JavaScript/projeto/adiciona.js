//document.querySelectorAll("table"); para pegar array
var botao = document.querySelector("#adicionar-paciente");   //id do botão

botao.addEventListener("click",function(event){
    event.preventDefault(); //impede comportamento padrão de atualizar página ao clicar botão
   
    
    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");
    
    var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+campoNome.value+"</td>"+
						"<td class='info-peso'>"+campoPeso.value+"</td>"+
						"<td class='info-altura'>"+campoAltura.value+"</td>"+
						"<td class='info-imc'></td>"+
					"</tr>"
    
    var tabela = document.querySelector("table");       //primeiro elemento tag
    tabela.innerHTML = tabela.innerHTML + pacienteNovo; //adicionando nova tabela
    
    campoNome.value = "";
    campoAltura.value = "";
    campoPeso.value = "";

});




