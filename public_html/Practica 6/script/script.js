$(document).ready(init);

var numList = new Array(5);

function init() {
    fillArray();

    $("#firstAndLast").click(firstAndLast);
    $("#calculate").click(calculate);

    $("#addLast").click(addLast);
    $("#addFirst").click(addFirst);

    $("#removeLast").click(removeLast);
    $("#removeFirst").click(removeFirst);

    $("#removePosition").click(removePosition);
    $("#removeNumber").click(removeNumber);
}
function printArray() {
    $("#ex1").children().remove();
    $("#ex1").append("<div>" + numList + "</div>");
}
function fillArray() {
    for (var i = 0; i < numList.length; i++) {
        numList[i] = Math.floor((Math.random() * 100) + 1);
    }
    printArray();
}

function firstAndLast() {
    var first = numList[0];
    var last = numList[numList.length - 1];

    $("#result").empty();
    $("#result").append("<div class='row'><strong> First number: </strong>" + first + "</div>");
    $("#result").append("<div class='row'><strong> Last number: </strong>" + last + "</div>");
}

function addLast() {
    do {
        num = window.prompt("Introduce el número:");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);
    numList.push(num);
    printArray();
}

function addFirst() {
    do {
        num = window.prompt("Introduce el número:");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);
    numList.unshift(num);
    printArray();
}

function removeLast() {
    numList.pop();
    printArray();
}

function removeFirst() {
    numList.shift();
    printArray();
}

function removePosition() {
    do {
        num = window.prompt("Introduce el número:");
    } while (isNaN(num) || num == null || num == "");
    num = parseInt(num);
    if (num > numList.length) {
        alert("Nuemro no válido.");
    } else {
        numList.splice(num - 1, 1);
        printArray();
    }

}

function removeNumber() {
    do {
        num = window.prompt("Introduce el número:");
    } while (isNaN(num) || num == null || num == "");
    num = parseInt(num);
    var index = numList.indexOf(num);
    if (index > -1) {
        numList.splice(index, 1);
    } else {
        alert("Número no encontrado.");
    }
    printArray();
}

function calculate() {
    $("#result").children().remove();
    var total = "";
    do {
        op = window.prompt("Introduce una operacion (+ , - , / , *):");
    } while (!isNaN(op) || op == null || op == "");
    var result = "";
    for (var i = 0; i < numList.length; i++) {
        result += numList[i];
        if (i != numList.length - 1) {
            result += op
        }
    }
    total = eval(result);
    $("#result").append("<div><strong>Total:</strong> " + total + "</div>");
}