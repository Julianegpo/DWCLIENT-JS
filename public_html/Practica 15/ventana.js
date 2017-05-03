var ventanaPadre = window.opener;
var cookie;
window.onload = function () {
    cookie = getCookie("nombre");
    ventanaPadre.cargarMensaje();
    setTimeout(saludar, 5000);

    document.getElementById("imprimirValor")
            .addEventListener("click", valorCookie, false)
    document.getElementById("tiempo")
            .addEventListener("click", contador, false)
}
function saludar() {
    var d = new Date();
    if (d.getHours >= 6 && d.getHours <= 14) {
        document.getElementById("cookie").
                innerHTML = "Buenos dias";
    } else if (d.getHours > 14 && d.getHours < 20) {
        document.getElementById("cookie").
                innerHTML = "Buenas tardes";
    } else {
        document.getElementById("cookie").
                innerHTML = "Buenas noches";
    }
}

var click = 0;
var interval;

function contador() {
    var segundo = 0;
    if (click == 0) {
        click = 1;
        interval = setInterval(
                function () {
                    segundo++;
                    document.getElementById("contador").innerHTML = segundo;
                }, 1000);
    } else if (click == 1) {
        clearInterval(interval);
        click = 0;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}