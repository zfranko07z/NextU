window.onload = function (){ //Acciones tras cargar la p&aacute;gina
pantalla=document.getElementById("display"); //elemento pantalla de salida
document.onkeydown = teclado; //funci&oacute;n teclado disponible

document.getElementById('on').onclick=borradoTotal;
on.addEventListener('mousedown', function () {
on.setAttribute("style", "transform:scale(0.95,0.95)");
})
on.addEventListener('mouseup', function () {
on.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('sign').onclick=opuest;
sign.addEventListener('mousedown', function () {
sign.setAttribute("style", "transform:scale(0.95,0.95)");
})
sign.addEventListener('mouseup', function () {
sign.setAttribute("style", "transform:scale(1,1)");
})


document.getElementById('raiz').onclick=raizc;
raiz.addEventListener('mousedown', function () {
raiz.setAttribute("style", "transform:scale(0.95,0.95)");
})
raiz.addEventListener('mouseup', function () {
raiz.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('dividido');
dividido.addEventListener("click",function () {
operar("/");
})
dividido.addEventListener('mousedown', function () {
dividido.setAttribute("style", "transform:scale(0.95,0.95)");
})
dividido.addEventListener('mouseup', function () {
dividido.setAttribute("style", "transform:scale(1,1)");
})

var doc7 = document.getElementById("7");
doc7.addEventListener("click",function () {
numero(7);
})
doc7.addEventListener('mousedown', function () {
doc7.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc7.addEventListener('mouseup', function () {
doc7.setAttribute("style", "transform:scale(1,1)");
})

var doc8 = document.getElementById("8");
doc8.addEventListener("click",function () {
numero(8);
})
doc8.addEventListener('mousedown', function () {
doc8.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc8.addEventListener('mouseup', function () {
doc8.setAttribute("style", "transform:scale(1,1)");
})

var doc9 = document.getElementById("9");
doc9.addEventListener("click",function () {
numero(9);
})
doc9.addEventListener('mousedown', function () {
doc9.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc9.addEventListener('mouseup', function () {
doc9.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('por');
por.addEventListener("click",function () {
operar("*");
})
por.addEventListener('mousedown', function () {
por.setAttribute("style", "transform:scale(0.95,0.95)");
})
por.addEventListener('mouseup', function () {
por.setAttribute("style", "transform:scale(1,1)");
})

var doc4 = document.getElementById("4");
doc4.addEventListener("click",function () {
numero(4);
})
doc4.addEventListener('mousedown', function () {
doc4.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc4.addEventListener('mouseup', function () {
doc4.setAttribute("style", "transform:scale(1,1)");
})

var doc5 = document.getElementById("5");
doc5.addEventListener("click",function () {
numero(5);
})
doc5.addEventListener('mousedown', function () {
doc5.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc5.addEventListener('mouseup', function () {
doc5.setAttribute("style", "transform:scale(1,1)");
})

var doc6 = document.getElementById("6");
doc6.addEventListener("click",function () {
numero(6);
})
doc6.addEventListener('mousedown', function () {
doc6.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc6.addEventListener('mouseup', function () {
doc6.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('menos');
menos.addEventListener("click",function () {
operar("-");
})
menos.addEventListener('mousedown', function () {
menos.setAttribute("style", "transform:scale(0.95,0.95)");
})
menos.addEventListener('mouseup', function () {
menos.setAttribute("style", "transform:scale(1,1)");
})

var doc1 = document.getElementById("1");
doc1.addEventListener("click",function () {
numero(1);
})
doc1.addEventListener('mousedown', function () {
doc1.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc1.addEventListener('mouseup', function () {
doc1.setAttribute("style", "transform:scale(1,1)");
})

var doc2 = document.getElementById("2");
doc2.addEventListener("click",function () {
numero(2);
})
doc2.addEventListener('mousedown', function () {
doc2.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc2.addEventListener('mouseup', function () {
doc2.setAttribute("style", "transform:scale(1,1)");
})

var doc3 = document.getElementById("3");
doc3.addEventListener("click",function () {
numero(3);
})
doc3.addEventListener('mousedown', function () {
doc3.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc3.addEventListener('mouseup', function () {
doc3.setAttribute("style", "transform:scale(1,1)");
})

var doc0 = document.getElementById("0");
doc0.addEventListener("click",function () {
numero(0);
})
doc0.addEventListener('mousedown', function () {
doc0.setAttribute("style", "transform:scale(0.95,0.95)");
})
doc0.addEventListener('mouseup', function () {
doc0.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('punto');
punto.addEventListener("click",function () {
numero(".");
})
punto.addEventListener('mousedown', function () {
punto.setAttribute("style", "transform:scale(0.95,0.95)");
})
punto.addEventListener('mouseup', function () {
punto.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('igual');
igual.addEventListener("click",function () {
igualar();
})
igual.addEventListener('mousedown', function () {
igual.setAttribute("style", "transform:scale(0.95,0.95)");
})
igual.addEventListener('mouseup', function () {
igual.setAttribute("style", "transform:scale(1,1)");
})

document.getElementById('mas');
mas.addEventListener("click",function () {
operar("+");
})
mas.addEventListener('mousedown', function () {
mas.setAttribute("style", "transform:scale(0.95,0.95)");
})
mas.addEventListener('mouseup', function () {
mas.setAttribute("style", "transform:scale(1,1)");
})
}
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el n&uacute;mero pulsado en el argumento.
         if (x=="0" || xi==1  ) {	// inicializar un n&uacute;mero,
            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar n&uacute;mero
            if (xx==".") { //si escribimos una coma al principio del n&uacute;mero
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar n&uacute;mero
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un n&uacute;mero
               if (xx=="." && coma==0) { //si escribimos una coma decimal p�r primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acci&oacute;n.
               else if (xx=="." && coma==1) {}
               //Resto de casos: escribir un n&uacute;mero del 0 al 9:
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el n&uacute;mero est&aacute; iniciado y podemos ampliarlo.
         }
function operar(s) {
         igualar() //si hay operaciones pendientes se realizan primero
         ni=x //ponemos el 1� n&uacute;mero en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operaci&oacute;n.
         xi=1; //inicializar pantalla.
}
function igualar() {
        if (op=="no") { //no hay ninguna operaci&oacute;n pendiente.
          pantalla.innerHTML=x;	//mostramos el mismo n&uacute;mero
          }
        else { //con operaci&oacute;n pendiente resolvemos
          sl=ni+op+x; // escribimos la operaci&oacute;n en una cadena
          sol=eval(sl) //convertimos la cadena a c&oacute;digo y resolvemos
          pantalla.innerHTML=sol //mostramos la soludi&oacute;n
          x=sol; //guardamos la soluci&oacute;n
          op="no"; //ya no hayn operaciones pendientes
          xi=1; //se puede reiniciar la pantalla.
          }
}

function raizc() {
          x=Math.sqrt(x) //resolver ra&iacute;z cuadrada.
          pantalla.innerHTML=x; //mostrar en pantalla resultado
          op="no"; //quitar operaciones pendientes.
          xi=1; //se puede reiniciar la pantalla
}

function porcent() {
          x=x/100 //dividir por 100 el n&uacute;mero
          pantalla.innerHTML=x; //mostrar en pantalla
          igualar() //resolver y mostrar operaciones pendientes
          xi=1 //reiniciar la pantalla
}

function opuest() {
          nx=Number(x); //convertir en n&uacute;mero
          nx=-nx; //cambiar de signo
          x=String(nx); //volver a convertir a cadena
          pantalla.innerHTML=x; //mostrar en pantalla.
}


function retro(){ //Borrar s&oacute;lo el &uacute;ltimo n&uacute;mero escrito.
          cifras=x.length; //hayar n&uacute;mero de caracteres en pantalla
          br=x.substr(cifras-1,cifras) //describir &uacute;ltimo caracter
          x=x.substr(0,cifras-1) //quitar el ultimo caracter
          if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
          if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
          pantalla.innerHTML=x; //mostrar resultado en pantalla
}


function borradoTotal() {
          pantalla.innerHTML=0; //poner pantalla a 0
          x="0"; //reiniciar n&uacute;mero en pantalla
          coma=0; //reiniciar estado coma decimal
          ni=0 //indicador de n&uacute;mero oculto a 0;
          op="no" //borrar operaci&oacute;n en curso.
}

function teclado (elEvento) {
          evento = elEvento || window.event;
          k=evento.keyCode; //número de código de la tecla.
         //teclas númericas del teclado alfamunérico
          if (k>47 && k<58) {
            p=k-48; //buscar número a mostrar.
            p=String(p) //convertir a cadena para poder añádir en pantalla.
            numero(p); //enviar para mostrar en pantalla
            }
         //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
          if (k>95 && k<106) {
            p=k-96;
            p=String(p);
            numero(p);
            }
            if (k==110 || k==190) {numero(".")} //teclas de coma decimal
            if (k==106) {operar('*')} //tecla multiplicación
            if (k==107) {operar('+')} //tecla suma
            if (k==109) {operar('-')} //tecla resta
            if (k==111) {operar('/')} //tecla división
            if (k==32 || k==13) {igualar()} //Tecla igual: intro o barra espaciadora
            if (k==46) {borradoTotal()} //Tecla borrado total: "supr"
            if (k==8) {retro()} //Retroceso en escritura : tecla retroceso.
            if (k==36) {borradoParcial()} //Tecla borrado parcial: tecla de inicio.
}
