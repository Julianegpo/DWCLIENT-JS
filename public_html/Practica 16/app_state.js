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
                    'content@': {
                        templateUrl: 'myLists.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('suscribed', {
                parent: 'app',
                url: '^/suscribed',
                views: {
                    'content@': {
                        templateUrl: 'suscribedLists.html'
                    }
                }
            })
            .state('about', {
                parent: 'app',
                url: '^/about',
                views: {
                    'content@': {
                        templateUrl: 'aboutMe.html'
                    }
                }
            })
            .state('search', {
                parent: 'app',
                url: '^/search',
                views: {
                    'content@': {
                        templateUrl: 'searchList.html'
                    }
                }
            })
    $urlRouterProvider.otherwise('/');
});
