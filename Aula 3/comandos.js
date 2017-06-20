
function mudaTitulo(novoTitulo)
{
	var titulo  = document.getElementById('titulo');
	titulo.innerHTML = novoTitulo;
	
}
var pessoa = {
    
    // Atributos da pessoa
    primeiroNome:"João",
    ultimoNome:"da Silva",
    nascimento: new Date("1980-10-25"),
    
    // Nome completo
	nomeCompleto: function() {
		return this.primeiroNome + ' ' + this.ultimoNome;
	},
    
    // Calcula a idade
    idade: function() {
        var dataAtual = new Date();
        return dataAtual.getYear() - this.nascimento.getYear();
    }
};



function ExemploObjeto(titulo)
{
    mudaTitulo(titulo);
	
	// Mostra informações da pessoa
	var info = document.getElementById('log');
	info.innerHTML = pessoa.nomeCompleto() + 
		" tem " + pessoa.idade() + " anos.";
	
}



 function Pessoa()
 {
    
    // Atributos da pessoa
    primeiroNome = "José";
    ultimoNome="da Silveira";
    nascimento= new Date("1989-10-25");
    
    // Nome completo
	nomeCompleto = function() {
		return this.primeiroNome + ' ' + this.ultimoNome;
	};
    
    // Calcula a idade
    idade = function() {
        var dataAtual = new Date();
        return dataAtual.getYear() - this.nascimento.getYear();
    }
};



function ExemploObjetoDeclarado(titulo)
{
    mudaTitulo(titulo);
	oPessoa = new Pessoa();
	// Mostra informações da pessoa
	var info = document.getElementById('log');
	info.innerHTML = oPessoa.nomeCompleto() + 
		" tem " + oPessoa.idade() + " anos.";
	
}


function Quadrado(altura, largura){
    this.altura = altura;
    this.largura = largura;
    this.area = function(){
        return this.altura * this.largura;
    }
}

Quadrado.prototype.info = function(){
	return 'Altura: ' + this.altura + ' Largura: ' + this.largura;
}

function ExProfQuadrado(titulo)
{
    mudaTitulo(titulo);

	var q = new Quadrado(5, 3);
	alert(q.area());
	alert(q.info());
}

String.prototype.hola = function(){
    alert('Hola!!!!!');
}

function ExProfHola(titulo)
{
    mudaTitulo(titulo);
	
	var nome = 'João';
	nome.hola();

}


function ordena()
{
	var numeros = document.getElementById('numeros').value;
	var retorno = document.getElementById('resultado');
	vetNum = numeros.split(';');
	
	for(i = 0; i<5; i++)
	{ 
		for( j = 0; j<4; j++)
		{ 
			if(parseInt(vetNum[j]) > parseInt(vetNum[j + 1]))
			{ 
				aux = vetNum[j]; 
				vetNum[j] = vetNum[j+1];
				vetNum[j+1] = aux; 
			} 
		} 
	} 
	
	retorno.innerHTML = vetNum.join(",");

}

function bubbleSort(titulo)
{
	
    mudaTitulo(titulo);
	// Mostra informações da pessoa
	var info = document.getElementById('log');
	info.innerHTML  = "<input type='text' id='numeros'></input>";
	info.innerHTML += "<input type='button' onclick='ordena()' value='Ordenar'></input>";
	info.innerHTML += "<div id='resultado'></div>";
	
}

var Fila = ['joão','ana'];

function AddFim()
{
	nome = document.getElementById('nomeDigitado'); 
	Fila.push(nome.value);
	carregaResultado();
	nome.value = '';
	
}

function RemoveInicio()
{
	carregaResultado();
	Fila.shift();
	carregaResultado();
	
}
function carregaResultado()
{
	var resultado = document.getElementById('resultado');
	resultado.innerHTML = '';
	for(i = 0; i<Fila.length; i++)
	{ 
		resultado.innerHTML += Fila[i]+"</br>";
	} 
	
}

function filaAtendimento(titulo)
{
	
    mudaTitulo(titulo);
	var info = document.getElementById('log');
	info.innerHTML  = "<input type='text' id='nomeDigitado'></input>";
	info.innerHTML += "<input type='button' onclick='AddFim()' value='Add'></input>";
	info.innerHTML += "<input type='button' onclick='RemoveInicio()' value='Remover'></input></br>";
	info.innerHTML += "<div id='resultado'></div></br>";
	
	
	carregaResultado();
	
	
}



function AdivinheNumero(titulo)
{
	var NumeroSegredo = parseInt(Math.random()*100);	
    mudaTitulo(titulo);
	var info = document.getElementById('log');
	info.innerHTML  = '';
	do{
		numJute = parseInt(prompt("Informe um nomero:"));
		
		if (numJute > NumeroSegredo)
		{
			info.innerHTML  = 'Menor que '+numJute;
		}
		else if(numJute < NumeroSegredo)
		{
			info.innerHTML  = 'Maior que '+numJute;
		}else if (numJute == NumeroSegredo)
		{
			info.innerHTML  = "Acertou "+numJute;
		}
		
		
	}
	while(numJute!=NumeroSegredo);
	
}

function EventosMostraHora(titulo)
{
	//var agora = new Date();
    
	var info = document.getElementById('log');
	info.innerHTML  = "<div id='horario' class='divRelogio'></div>";
	
}

