atualizarDados();


function atualizarDados(){
    importarDados("nome");
}


function salvarDados(){
    exportarDados("nome");
}



/*      Funçoes storage*/
function importarDados(valorS){
    document.getElementById(valorS).value = localStorage.getItem(valorS);
}

function exportarDados(valorS){
    localStorage.setItem(valorS,String(document.getElementById(valorS).value));
}