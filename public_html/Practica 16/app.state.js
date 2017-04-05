var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'navbar@': {
                        templateUrl: 'navbar.html',
                        controller: 'navbarCtrl'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('myLists', {
                parent: 'app',
                templateUrl: 'myLists.html'
            })
            .state('suscribed', {
                parent: 'app',
                url:'/suscribed',
                templateUrl: 'suscribedLists.html'
            })
            .state('search', {
                parent: 'app',
                url:'/search',
                templateUrl: 'suscribedLists.html'
            })
            .state('about', {
                parent: 'app',
                url:'/about-me',
                templateUrl: 'aboutMe.html'
            });
    $urlRouterProvider.otherwise('/');

});
