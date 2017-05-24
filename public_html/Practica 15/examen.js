var ventanaPadre = window.opener;
var cookieAltura;
var cookieAnchura;
window.onload = function () {
    document.getElementById("getSize")
            .addEventListener("click", getSize, false);

    cookieAltura = getCookie("altura");
    cookieAnchura = getCookie("anchura");
}
function getSize() {
    cookieAltura = getCookie("altura");
    cookieAnchura = getCookie("anchura");

    ventanaPadre.mostrarDesdeHijo();
}
function cargarTamaños() {
    var div = document.getElementById("examen");
    var divHijo = document.createElement("div");
    divHijo.innerHTML = "Altura: " + cookieAltura;
    var divHijo2 = document.createElement("div");
    divHijo2.innerHTML = "Anchura: " + cookieAnchura;

    div.appendChild(divHijo);
    div.appendChild(divHijo2);
}
function contador() {
    var tiempo = getCookie("cuenta");
    var number = document.getElementById('cuentaAtras');
    var intervalo = setInterval(function () {
        tiempo--;
        number.innerHTML = tiempo;
        if (tiempo == 0) {
            clearInterval(intervalo);
            ventanaPadre.cerrarHijo();
        }
    }, 1000);    
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