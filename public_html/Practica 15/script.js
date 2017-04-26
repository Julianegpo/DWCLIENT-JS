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
}