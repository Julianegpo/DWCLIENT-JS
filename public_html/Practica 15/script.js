var cookie = document.cookie="";
window.onload = function () {
    var contenedor = document.getElementById("listaPropiedades");

    var lista = document.createElement("ul");

    //Elementos de la lista
    var maxNum = document.createElement("li");
    maxNum.innerHTML = Number.MAX_VALUE;

    var minNum = document.createElement("li");
    minNum.innerHTML = Number.MIN_VALUE;

    var screenwidth = document.createElement("li");
    screenwidth.innerHTML = window.innerWidth;

    var screenheight = document.createElement("li");
    screenheight.innerHTML = window.innerHeight;

    var webWidth = document.createElement("li");
    webWidth.innerHTML = document.documentElement.clientWidth;

    var webHeight = document.createElement("li");
    webHeight.innerHTML = document.documentElement.clientWidth;

    var url = document.createElement("li");
    url.innerHTML = window.location.href;

    var random = document.createElement("li");
    random.innerHTML = Math.floor(Math.random() * 200) + 0

    var nombrePagina = document.createElement("li");
    nombrePagina.innerHTML = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    var OSName = document.createElement("li");
    OSName.innerHTML = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
        OSName.innerHTML = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1)
        OSName.innerHTML = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1)
        OSName.innerHTML = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1)
        OSName.innerHTML = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1)
        OSName.innerHTML = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1)
        OSName.innerHTML = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac") != -1)
        OSName.innerHTML = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11") != -1)
        OSName.innerHTML = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux") != -1)
        OSName.innerHTML = "Linux";

    contenedor.appendChild(lista);
    lista.appendChild(maxNum);
    lista.appendChild(minNum);
    lista.appendChild(screenwidth);
    lista.appendChild(screenheight);
    lista.appendChild(webWidth);
    lista.appendChild(webHeight);
    lista.appendChild(url);
    lista.appendChild(random);
    lista.appendChild(nombrePagina);
    lista.appendChild(OSName);
    
    document.getElementById("comprobar").
            addEventListener("click", comprobarCookie, false);
    document.getElementById("nombrePagina").
            addEventListener("click", cambiarNombrePagina, false);
    document.getElementById("ventana").
            addEventListener("click", crearVentanaNueva, false);
    
    setTimeout(
            function(){
                var cookie = getCookie("nombre");
                console.log(cookie);
            }, 5000);
}

function comprobarCookie (){
    if(cookie==""){
        var nombre = window.prompt("Introduce tu nombre de usuario: ")
        cookie = "nombre="+nombre;
        console.log(cookie);
    }
    var div = document.createElement("div");
    div.innerHTML="Valor de la cookie: "+cookie;
    document.getElementById("valorCookie").appendChild(div);
}
function cambiarNombrePagina(){
    var nombrePag;
    do {
        nombrePag=window.prompt("Introduce el nuevo nombre de la página:");        
    } while (nombrePag == null || nombrePag == "");
    nombrePag.toUpperCase();
    document.title=nombrePag;
}

function crearVentanaNueva(){
    var valores;
    do{
        valores = window.prompt("Introduce 2 números: ");
        var valor1 = valores.split(",")[0];
        var valor2 = valores.split(",")[1];
    }while(valor1 < 200 || valor1 > 800 || valor2 < 200 || valor2 > 800);
    
    window.open("http://localhost:8383/DWCLIEN/Practica%2015/ventana.html", "nuevo", "width="+valor1+", height="+valor2+"");
}