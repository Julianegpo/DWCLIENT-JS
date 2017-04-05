$(document).ready(init);


function Car() {
    this.name;
    this.price;
    this.carExtras = ["ABS", "Control Cruise", "ESP", "Navegador", "Techo solar"];

    this.getName = function () {
        return this.name;
    }
    this.getPrice = function () {
        return this.price;
    }


    this.addExtra = function (extra) {
        this.carExtras.push(extra);
    }
    this.getExtra = function (num) {
        num = parseInt(num);
        if (num > this.carExtras.length) {
            alert("Nuemro no válido.");
        } else {
            return this.carExtras.splice(num - 1, 1);
        }
    }
}

function Concessionaire() {
    this.name;
    this.address;
    this.command = new Array();

    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setAddress = function (address) {
        this.address = address;
    }
    this.getAddress = function () {
        return this.address;
    }
    this.addCommand = function (car) {
        this.command.push(car);
    }
    this.getCommands = function () {
        return this.command;
    }
}

function init() {
    var myConcess = new Concessionaire();
    myConcess.setName("Batcueva");
    myConcess.setAddress("Gotham City");

    var nombreConces = $("<th>Nombre: " + myConcess.getName() + "</th>");
    var direcConces = $("<th colspan='1'>Dirección: " + myConcess.getAddress() + "</th>");
    $("#datosConces").append(nombreConces);
    $("#datosConces").append(direcConces);

    var car = new Car();
    car.name = "Fantastic";
    car.price = "70000€";

    var car2 = new Car();
    car2.name = "Batmóvil";
    car2.price = "1000000€";

    var addExtra = car.addExtra("Chofer de plástico");
    var numExtra = car.getExtra(3);
    
    myConcess.addCommand(car);
    myConcess.addCommand(car2);
    
    var allCommands = myConcess.getCommands();

    var tr = $("<tr>");

    var carName = $("<td>" + myConcess.command[0].getName() + "</td>");
    var carPrice = $("<td>" + allCommands[0].getPrice + "</td>");
    var carExtras = $("<td>" + allCommands[0].carExtras + "</td>");

    tr += carName;
    tr += carPrice;
    tr += carExtras;

    tr += $("</tr>");

    $("#tableBody").append(tr);
}

