function restart(){location.reload()}function restart2(){location.reload()}function abrirabout(){document.getElementById("acercade").style.display="block",document.getElementById("instrucciones").style.display="none",stop()}function cerrarabout(){document.getElementById("acercade").style.display="none",start()}function abririnst(){document.getElementById("instrucciones").style.display="block",document.getElementById("acercade").style.display="none",stop()}function cerrarinst(){document.getElementById("instrucciones").style.display="none",start()}function start(){timer=setInterval(function(){moverNave()},1e3*dt),document.getElementById("coheteencendido").style.display="none"}function stop(){clearInterval(timer)}function moverNave(){v+=a*dt,document.getElementById("velocidad").innerHTML=v.toFixed(2),y+=v*dt,document.getElementById("altura").innerHTML=(70-y).toFixed(2),70>y?document.getElementById("nave").style.top=y+"%":(stop(),finalizarJuego(),document.getElementById("altura").innerHTML=0)}function finalizarJuego(){v>2?(document.getElementById("coheteapagado").src="img/blast2.png",document.onkeydown=motorOff,document.getElementById("gameover").style.display="block"):(document.getElementById("ganado").style.display="block",document.onkeydown=motorOff)}function motorOn(){a=-g,document.getElementById("coheteencendido").style.display="block",document.getElementById("coheteapagado").style.display="none",null==timerFuel&&(timerFuel=setInterval(function(){actualizarFuel()},10))}function motorOff(){a=g,document.getElementById("coheteencendido").style.display="none",document.getElementById("coheteapagado").style.display="block",clearInterval(timerFuel),timerFuel=null}function actualizarFuel(){fuel-=.1,document.getElementById("fuel").innerHTML=fuel.toFixed(),0>=fuel&&(document.onkeydown=motorOff,document.getElementById("fuel").innerHTML=0)}var y=10,v=0,g=1.622,a=g,dt=.016683,timer=null,timerFuel=null,fuel=100;window.onload=function(){document.getElementById("showm").onclick=function(){document.getElementsByClassName("c")[0].style.display="block",stop()},document.getElementById("hidem").onclick=function(){document.getElementsByClassName("c")[0].style.display="none",start()},document.getElementById("showm2").onclick=function(){document.getElementsByClassName("z")[0].style.display="block",stop()},document.getElementById("hidem2").onclick=function(){document.getElementsByClassName("z")[0].style.display="none",start()},document.onkeydown=motorOn,document.onkeyup=motorOff,document.onclick=function(){a==g?motorOn():motorOff()},start(),document.getElementById("restart").onclick=function(){restart()},document.getElementById("restart2").onclick=function(){restart2()},document.getElementById("about").onclick=function(){abrirabout()},document.getElementById("acercade").onclick=function(){cerrarabout()},document.getElementById("i").onclick=function(){abririnst()},document.getElementById("instrucciones").onclick=function(){cerrarinst()}};