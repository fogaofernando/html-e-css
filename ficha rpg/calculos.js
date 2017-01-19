
alert(localStorage.getItem("lastname"));
alert(localStorage.lastName);
function salvar(){
    localStorage.setItem("lastname",String(document.getElementById("nome").value));
}