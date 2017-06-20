function alteraTitulo(titulo)
{
	var cabecalho = document.getElementById('cabecalho');
	cabecalho.innerHTML = titulo;

	console.log("aqui 1");
}

function calcular()
{
	var valor1 = 1;
	    valor2 = 2;
		calc   = 0;
	var resuldado = document.getElementById('resuldado');
	
	valor1 = document.getElementById('valor1').value;
	valor2 = document.getElementById('valor2').value;
	calc = parseInt(valor1) + parseInt(valor2);
	
	
	resuldado.innerHTML = calc;


}