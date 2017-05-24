var contenedor = document.getElementById("listaPropiedades");
var ventanaExamen;
var webWidth;
var webHeight;
window.onload = function () {

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
    document.getElementById("ventanaExamen")
            .addEventListener("click", crearVentanaExamen, false);
    document.getElementById("guardarTamaños")
            .addEventListener("click", guardarTamaños, false);
    document.getElementById("cuentaAtras")
            .addEventListener("click", cuentaAtras, false)
}

function comprobarCookie() {
    if (getCookie("nombre") == "") {
        var nombre = window.prompt("Introduce tu nombre de usuario: ")
        setCookie("nombre", nombre, 4);
    }
    var div = document.createElement("div");
    div.innerHTML = "Valor de la cookie: " + getCookie("nombre");
    document.getElementById("valorCookie").appendChild(div);
}
function cambiarNombrePagina() {
    var nombrePag;
    do {
        nombrePag = window.prompt("Introduce el nuevo nombre de la página:");
    } while (nombrePag == null || nombrePag == "");
    nombrePag.toUpperCase();
    document.title = nombrePag;
}
function crearVentanaNueva() {
    var valores;
    do {
        valores = window.prompt("Introduce 2 números: ");
        var valor1 = valores.split(",")[0];
        var valor2 = valores.split(",")[1];
    } while (valor1 < 200 || valor1 > 800 || valor2 < 200 || valor2 > 800);
    window.open("ventana.html", "ventana", "width=" + valor1 + ", height=" + valor2 + "");
}
function cargarMensaje() {
    var strong = document.createElement("strong");
    var div = document.createElement("div");
    div.innerHTML = "Ventana emergente cargada";
    strong.appendChild(div);
    contenedor.appendChild(strong);
}
function setCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}
function getCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

//examen
function crearVentanaExamen() {
    ventanaExamen = window.open("examen.html", "examen", "width=400,height=400");
}
function guardarTamaños() {
    var webWidth = document.documentElement.clientWidth;
    var webHeight = document.documentElement.clientWidth;

    setCookie("altura", webHeight, 5);
    setCookie("anchura", webWidth, 5);

    ventanaExamen.cargarTamaños();
}
function cuentaAtras() {
    var valor;
    do {
        valor = window.prompt("Introduce un número: ");
    } while (valor == 0 || valor < 0);
    setCookie("cuenta", valor, 5);
    ventanaExamen.contador();
}

function mostrarDesdeHijo() {
    var div = document.getElementById("propiedades");
    var divHijo = document.createElement("div");
    divHijo.innerHTML = "Altura: " + getCookie("altura");
    var divHijo2 = document.createElement("div");
    divHijo2.innerHTML = "Anchura: " + getCookie("anchura");

    div.appendChild(divHijo);
    div.appendChild(divHijo2);
}
function cerrarHijo(){
    ventanaExamen.close();
}