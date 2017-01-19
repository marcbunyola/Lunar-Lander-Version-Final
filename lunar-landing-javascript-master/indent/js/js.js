var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}

		document.getElementById("showm2").onclick = function () {
		document.getElementsByClassName("z")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem2").onclick = function () {
		document.getElementsByClassName("z")[0].style.display = "none";
		start();
	}
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}

	//Empezar a mover nave
	start();

	document.getElementById("restart").onclick=function() {restart()};
	document.getElementById("restart2").onclick=function() {restart2()};
	document.getElementById("about").onclick=function() {abrirabout()};
	document.getElementById("acercade").onclick=function() {cerrarabout()};
	
	document.getElementById("i").onclick=function() {abririnst()};
	document.getElementById("instrucciones").onclick=function() {cerrarinst()};
	
}
	
//Definición de funciones

function restart(){
	location.reload();
}
function restart2(){
	location.reload();
}

function abrirabout(){
	document.getElementById("acercade").style.display="block";
	document.getElementById("instrucciones").style.display="none";
	stop();
}
	
function cerrarabout(){
	document.getElementById("acercade").style.display="none";
	start();
}

function abririnst(){
	document.getElementById("instrucciones").style.display="block";
	document.getElementById("acercade").style.display="none";
	stop();
}
	
function cerrarinst(){
	document.getElementById("instrucciones").style.display="none";
	start();
}

function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
	document.getElementById("coheteencendido").style.display="none";
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=(70-y).toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		finalizarJuego();
		document.getElementById("altura").innerHTML=0;	
	}
}
function finalizarJuego(){
	if (v>2){
		document.getElementById("coheteapagado").src="img/blast2.png";
		document.onkeydown = motorOff;
		document.getElementById("gameover").style.display="block";
	} else {
		document.getElementById("ganado").style.display="block";
		document.onkeydown = motorOff;
	}
}

function motorOn(){
	a=-g;
	document.getElementById("coheteencendido").style.display="block";
	document.getElementById("coheteapagado").style.display="none";
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
}
function motorOff(){
	a=g;
	document.getElementById("coheteencendido").style.display="none";
	document.getElementById("coheteapagado").style.display="block";
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=0.1;
	document.getElementById("fuel").innerHTML=fuel.toFixed();	
	if (fuel<=0){
	document.onkeydown = motorOff;	
	document.getElementById("fuel").innerHTML=0;		
	}
	
}
