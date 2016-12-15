//Instanciamento do Id dos elementos
var trsPacientes = document.getElementsByClassName("paciente"); //Array de trs
var cont = 0;   

for(cont = 0; cont <= trsPacientes.length -1;cont++ ){
    var pacienteTr = trsPacientes[cont];
    
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    
    var pacienteAtual = {nome:tdNome.textContent, 
                         peso:tdPeso.textContent, 
                         altura: tdAltura.textContent,
                         imc:function(){
                            
                            if(this.altura <= 0 || this.peso <= 0){
                                console.log("Erro: Não é possivel ter uma altura ou peso igual ou inferior a Zero...");
                                imc = "Null";
                            }else{
                                var imc = this.peso/(this.altura * this.altura);
                            }
                             
                            return imc;
                         }};
                         
    
    tdImc.textContent = pacienteAtual.imc();
    console.log(tdImc.textContent);
}
