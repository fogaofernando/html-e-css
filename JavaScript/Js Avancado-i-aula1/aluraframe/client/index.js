//Capturando campos
var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];
console.log(campos);

var tbody = document.querySelector('table tbody');


//Adicionando novo campo quando o botão do form for clicado e todos os dados preenchidos
document.querySelector('.form').addEventListener('submit',function (event){
	
	event.preventDefault();
	var tr = document.createElement('tr');

	//Criando/Atribuindo elementos DOM com os valores da data, quantidade e valor
	campos.forEach(function (campo){
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	//Volume
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value + campos[2].value;
	tr.appendChild(tdVolume);

	//atribuindo no tbody
	tbody.appendChild(tr);

	//Limpando campos
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0,0;
	campos[0].focus();
});