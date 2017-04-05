var numbers = new Array(5);
var index = numbers.indexOf(5);
function fillArray() {
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor((Math.random() * 100) + 1);
    }
}

angular.module('app', [])
        .controller('mainController', ['$scope', function ($scope) {
                fillArray();
                $scope.numbers = numbers;
                $scope.first = "-";
                $scope.last = "-";
                $scope.operator = "-";
                $scope.result = "-";
                var first = numbers[0];
                var last = numbers[numbers.length - 1];

                $scope.firstAndLastNumberFunc = function () {
                    $scope.first = first;
                    $scope.last = last;
                }

                $scope.calculateFunc = function () {
                    var total = "";
                    do {
                        op = window.prompt("Introduce una operacion (+ , - , / , *):");
                        $scope.operator = op;
                    } while (!isNaN(op) || op == null || op == "");
                    var result = "";
                    for (var i = 0; i < numbers.length; i++) {
                        result += numbers[i];
                        if (i != numbers.length - 1) {
                            result += op
                        }
                    }
                    total = eval(result);
                    $scope.result = total;
                }

                $scope.addLastNumberFunc = function () {
                    do {
                        num = window.prompt("Introduce el número:");
                    } while (isNaN(num) || num == null || num == "");

                    num = parseInt(num);
                    numbers.push(num);
                }

                $scope.addFirsttNumberFunc = function () {
                    do {
                        num = window.prompt("Introduce el número:");
                    } while (isNaN(num) || num == null || num == "");

                    num = parseInt(num);
                    numbers.unshift(num);
                }

                $scope.removeLastNumberFunc = function () {
                    numbers.pop();
                }

                $scope.removeFirstNumberFunc = function () {
                    numbers.shift();
                }

                $scope.removePositionFunc = function () {
                    do {
                        num = window.prompt("Introduce el número:");
                    } while (isNaN(num) || num == null || num == "");
                    num = parseInt(num);
                    if (num > numbers.length) {
                        alert("Nuemro no válido.");
                    } else {
                        numbers.splice(num - 1, 1);
                    }
                }

                $scope.removeSpecificNumber = function () {
                    do {
                        num = window.prompt("Introduce el número:");
                    } while (isNaN(num) || num == null || num == "");
                    num = parseInt(num);
                    var index = numbers.indexOf(num);
                    if (index > -1) {
                        numbers.splice(index, 1);
                    }
                    else{
                        alert("Número no encontrado.");
                    }
                }

            }]);