var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('app',
                    {url: '/',
                        views: {
                            'navbar': {
                                templateUrl: 'navbar.html',
                                controller: 'navbarController'
                            },
                            'body': {
                                templateUrl: 'myLists.html',
                                controller: 'bodyController'
                            },
                            'footer': {
                                templateUrl: 'footer.html',
                                controller: 'footerController'
                            }
                        }
                    })
    $urlRouterProvider.otherwise('/');
});