function numerosPares(titulo)
{
    mudaTitulo(titulo);
	var log = document.getElementById('log');
    log.innerHTML =" <br />";
	for (i = 0; i <= 100; i += 2)
        {
             log.innerHTML += i+" <br />";
         }
}


function diasSemana(titulo)
{   mudaTitulo(titulo);
    var log = document.getElementById('log');
    
	log.innerHTML =" <br />";
for (i = 0; i <= 100; i += 2)
        {
             log.innerHTML += i+" <br />";
         }
}

function pedeNumero(menssagem)
{
	valor = prompt(menssagem);
	
	if (isNaN(valor) == true)
	{
		return parseInt(valor);
	}
	else
	{
		alert ("Não é numero");
		return pedeNumero(menssagem);
		
	}
}

function triangulo(titulo)
{ /*Ao clicar no botão o programa deve mostrar um alerta informando se o triângulo
   formado pelos três valores é equilátero (todos iguais) isósceles (dois lados iguais) 
   ou escaleno (os três são diferentes).*/
   mudaTitulo(titulo);
    var log = document.getElementById('log');
    log.innerHTML =" <br />";
	var valorA = pedeNumero("lado a");//prompt('Lado A:');
	
	var valorB = prompt('Lado B:');
	
	var valorC = prompt('Lado C:');
	
	if ((valorA == valorB) && (valorA == valorC))
    {
		retorno = "equilátero";
	}
	
	if (((valorA == valorB) && (valorA != valorC)) ||
	   ((valorA != valorB) && (valorA == valorC)) ||
	   ((valorA |= valorB) && (valorB == valorC)) )
    {
		retorno = "isósceles";
	}
	else
	{
		retorno = "escaleno";
	}
	
	
	log.innerHTML += retorno+" <br />";
	
}

function fizzBuzz(titulo)
{ 	/*Exercício: Fizz Buzz
		Faça uma programa que liste os número de 1 a 100
		Para os múltiplos de 3, ao invés do número, escreva “Fizz”.
		Para os múltiplos de 5, ao invés do número escreva “Buzz”.
		Para os que são múltiplos de 3 e 5, ao invés do número escreva “FizzBuzz”.
	*/
    mudaTitulo(titulo);
    var log = document.getElementById('log');
    log.innerHTML =" <br />";
	for (i = 1; i <= 100; i += 1)
    {
        if (((i%3)==2) && ((i%5)==0))
		{
			log.innerHTML += i+" “FizzBuzz” <br />";
		}else{if ((i%3)==0)
		{
			log.innerHTML +=i+" “Fizz” <br />";
		}else{if ((i%5)==0)
		{
			log.innerHTML +=i+" “Fizz” <br />";
		}else
        {
			log.innerHTML +=i+" <br />";
		}}}	
		
    }
	
}  
var limite = 12;
 
function concatenando(titulo)
{ 	/*Exercício: Fizz Buzz
		Faça uma programa que liste os número de 1 a 100
		Para os múltiplos de 3, ao invés do número, escreva “Fizz”.
		Para os múltiplos de 5, ao invés do número escreva “Buzz”.
		Para os que são múltiplos de 3 e 5, ao invés do número escreva “FizzBuzz”.
	*/
    mudaTitulo(titulo);
    var log = document.getElementById('log');
    log.innerHTML = "<textarea id='texto' onkeyup='contar()'></textarea><br /><label><span id='restantes'>"+limite+"</span> caracteres restantes</label>";
	
}

function contar(){
    var texto = document.getElementById('texto');
    var digitados = texto.value.length;
    var restantes = limite - digitados;
    var span = document.getElementById('restantes');
    span.innerHTML = restantes;
    if(restantes < 0){
        span.style.color = 'red';
    } else {
        span.style.color = 'black';   
    }
}


function mudaTitulo(novoTitulo)
{
	var titulo  = document.getElementById('titulo');
	titulo.innerHTML = novoTitulo;
	
}


function upCaseText(titulo)
{
	mudaTitulo(titulo);
	
	var log = document.getElementById('log');
    log.innerHTML = "<textarea id='texto' onkeyup='upperCaseText()'></textarea><br />";
	
}

function upperCaseText()
{
	var texto = document.getElementById('texto');
	
	texto.value = texto.value.toUpperCase();
	
}
var textoOriginal = "null";

function pesquisar(){
    
    var texto = document.getElementById('texto');
    var termo = document.getElementById('find').value;
    
    if(texto.innerHTML.indexOf(termo) < 0){
        
        alert('Não encontrado!');
        
    } else {
        
        texto.innerHTML = texto.innerHTML.replace(
            termo, 
            '<span class="destaque">' + termo + '</span>'
        );
        
    }
}

function findInText()
{ 


	var termo = document.getElementById('find').value;
	var texto = document.getElementById('texto');
	if (textoOriginal == 'null')
	{
		textoOriginal = texto.value;
	}
    var valorTexto = texto.value;
    var teste = valorTexto.indexOf(termo);
	if (teste >-1 )
	{    
        textoConv = valorTexto.replace(termo,'<span class="destaca">aqui'+termo+'</span>');
		texto.innerHTML = textoConv;
	}
	
	
	
}

function findText(titulo)
{
	mudaTitulo(titulo);
	
	var log = document.getElementById('log');
    log.innerHTML  = "<input id='find' onkeyup='pesquisar()'></input> <br />";
	log.innerHTML += "<p id='texto'> Faroeste Caboclo Legião Urbana Não tinha medo o tal João de Santo Cristo Era o que todos diziam quando ele se perdeu Deixou pra trás </p><br />";
	
}

var SEGUNDO = 1000;
var MINUTO = SEGUNDO * 60;
var HORA = MINUTO * 60;
var DIA = HORA * 24;
var MES = DIA * 30;
var ANO = 365 * DIA;

function idade(){
    
    // Pega os campos
    var ano = document.getElementById('ano').value;
    var mes = document.getElementById('mes').value;
    var dia = document.getElementById('dia').value;
    var hora = document.getElementById('hora').value;
    var minuto = document.getElementById('minuto').value;
    var segundo = document.getElementById('segundo').value;
    
    // Decrementa o mês pois o JS usa 0 para Janeiro
    mes--;
    
    // Cria objeto de data de nascimento
    var nascimento = new Date(ano, mes, dia, hora, minuto, segundo, 0);
    
    // Cria objeto de data atual
    var dataAtual = new Date();
    
    // Calcula a idade em milissegundos
    var idade = dataAtual.getTime() - nascimento.getTime();
    
    // Calcula quantos anos
    ano = Math.floor(idade / ANO);
    idade = idade % ANO;

    // Calcula quantos anos    
    mes = Math.floor(idade / MES);
    idade = idade % MES;
    
    // Calcula quantos dias    
    dia = Math.floor(idade / DIA);
    idade = idade % DIA;
    
    // Calcula quantas horas    
    hora = Math.floor(idade / HORA);
    idade = idade % HORA;
    
    // Calcula quantos minutos    
    minuto = Math.floor(idade / MINUTO);
    
    alert('Você tem ' + ano + ' anos ' + mes + ' meses ' + dia + ' dias ' + hora + ' horas ' + minuto + ' minutos');
}

function tempoVida(titulo)
{
	mudaTitulo(titulo);
	
	var log = document.getElementById('log');
    log.innerHTML  = "Dia<input type='number' id='dia' value='24' /><br />";
	log.innerHTML += "Mês<input type='number' id='mes' value='4' /><br />";
	log.innerHTML += "Ano <input type='number' id='ano' value='2000' /><br />";
	log.innerHTML += "Hora <input type='number' id='hora' value='18' /><br />";
	log.innerHTML += "Minuto <input type='number' id='minuto' value='30' /><br />";
    log.innerHTML += "Segundo <input type='number' id='segundo' value='15' /><br />";
	log.innerHTML += "<input type='button' onclick='idade()' value='Idade' /><br />";
	log.innerHTML += "<span id ='resultado'><span>";
	
}
