app.controller('navbarCtrl', ['$scope','$state',
    function ($scope, $state) {
        $scope.vista = $state.current.name;
    }]);