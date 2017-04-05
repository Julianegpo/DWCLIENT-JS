app.controller('navbarController', ['$scope',
    function ($scope) {
        $scope.titulo = "NAVBAR";
    }]);
app.controller('bodyController', ['$scope',
        function ($scope) {
        $scope.titulo = "BODY";
}]);
app.controller('footerController', ['$scope',
        function ($scope) {
        $scope.titulo = "FOOTER";
}]);