//EJERCICIO 2
function ejercicio2a() {
    var numero;
    do {
        numero = window.prompt("Introduce el número:");
    } while (isNaN(numero) || numero == null || numero == "");

    numero = parseInt(numero);
    for (var i = 0; i <= numero; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
}

function ejercicio2b() {
    var numero;
    do {
        numero = window.prompt("Introduce el número:");
    } while (isNaN(numero) || numero == null || numero == "");

    numero = parseInt(numero);
    cantidadProg = numero;

    for (var i = 0; i <= cantidadProg; i++) {
        var mostrar = document.getElementById('progresion');
        var add = document.createElement("li");
        var numMostrar = numero--;
        add.innerHTML = "<li>" + numMostrar + "</li>";
        mostrar.appendChild(add);
    }
}

function ejercicio2c() {
    var n1;
    var n2;
    do {
        n1 = window.prompt("Introduce el segundo número:");
    } while (isNaN(n1) || n1 == null || n1 == "");
    do {
        n2 = window.prompt("Introduce el primer número:");
    } while (isNaN(n2) || n2 == null || n2 == "");

    if (n1 > n2) {
        console.log(n1 + " es más grande");
        document.getElementById('resultado').innerHTML = ("El mayor es " + n1);
    } else {
        console.log(n2 + " es más grande");
        document.getElementById('resultado').innerHTML = ("El mayor es " + n2);
    }
}

function ejercicio2d() {
    var dia;
    do {
        dia = window.prompt("Introduce el día de la semana deseado:").toLowerCase();
    } while (dia == null || dia === "");

    switch (dia) {
        case "lunes":
            document.write("Lunes es el primer dia de la semana.");
            break;
        case "martes":
            document.write("Martes es el segundo dia de la semana.");
            break;
        case "miercoles":
            document.write("Miercoles es el tercer dia de la semana.");
            break;
        case "jueves":
            document.write("Jueves es el cuarto dia de la semana.");
            break;
        case "viernes":
            document.write("Viernes es el quinto dia de la semana.");
            break;
        case "sabado":
            document.write("Sabado es el sexto dia de la semana.");
            break;
        case "domingo":
            document.write("Domingo es el septimo dia de la semana.");
            break;
    }
}

function ejercicio2e() {
    var numAdivinar = Math.floor((Math.random() * 100) + 1);
    console.log(numAdivinar);
    var resultado = document.getElementById('resultadoE');
    var numero;
    var intentos = 0;

    do {
        intentos++;
        numero = window.prompt("Escoge un número para jugar");
        if (isNaN(numero) || numero == null || numero == "") {
            numero = window.prompt("Número no válido, elige otro");
        }

        numero = parseInt(numero);

        if (numero < numAdivinar) {
            resultado.innerHTML = ("El número que buscas es mayor que " + numero);
            console.log("mas grande");
        } else if (numero > numAdivinar) {
            resultado.innerHTML = ("El número que buscas es menor que " + numero);
            console.log("más pequeño");
        } else if (numero == numAdivinar) {
            resultado.innerHTML = ("Enhorabuena, has acertado con " + intentos + " intentos.");
        }
    } while (numero != numAdivinar);
}

//EJERCICIO 3 CON BOOTSTRAP
var numero;
var numeroDos;
var vent;
var result;

function suma() {
    //numero = parseInt(window.prompt("Introduce el primer numero"));
    //numeroDos = parseInt(window.prompt("Introduce el segundo valor"));

    numero = parseInt(document.getElementById('n1').value);
    numeroDos = parseInt(document.getElementById('n2').value);
    result = numero + numeroDos;
    vent = alert("La suma de " + numero + " y " + numeroDos + " es " + result);

    document.getElementById('n1').innerHTML.value = "Primer número";
    document.getElementById('n2').innerHTML.value = "Segundo número";
}

function resta() {

    numero = parseInt(document.getElementById('n1').value);
    numeroDos = parseInt(document.getElementById('n2').value);

    result = numero - numeroDos;
    vent = alert("La resta de " + numero + " y " + numeroDos + " es " + result);

    document.getElementById('n1').innerHTML.value = "Primer número";
    document.getElementById('n2').innerHTML.value = "Segundo número";
}

function multi() {

    numero = parseInt(document.getElementById('n1').value);
    numeroDos = parseInt(document.getElementById('n2').value);

    result = numero * numeroDos;

    var lista = document.getElementById('lista');
    var i = numero;
    lista.innerHTML = "<ul>";
    while (i != result) {
        lista.innerHTML += "<li>" + i + "</li>";

        i += numero;
    }
    lista.innerHTML += "<li>" + result + "</li>";
    lista.innerHTML += "</ul>";

    document.getElementById('n1').innerHTML.value = "Primer número";
    document.getElementById('n2').innerHTML.value = "Segundo número";
}

function divi() {

    var alerta = document.getElementById('alerta');
    numero = parseInt(document.getElementById('n1').value);
    numeroDos = parseInt(document.getElementById('n2').value);


    while (numeroDos == 0) {
        numeroDos = parseInt(window.prompt("Introduce de nuevo el segundo valor"));
    }

    result = numero / numeroDos;

    alerta.innerHTML += "<div class='alert alert-success'><strong>DIVISIÓ: </strong>" + numero + " entre " + numeroDos + " es " + result + "</div>";

    document.getElementById('n1').innerHTML.value = "Primer número";
    document.getElementById('n2').innerHTML.value = "Segundo número";
}