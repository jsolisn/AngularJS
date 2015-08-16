angular.module('navigation', ['ngRoute'])

.config(function($stateProvider, $urlRouteProvider) {
    $stateProvider

    .state('home',{
    	url:'/',
    	templateUrl:'views/home.html'
    	//controller:'HomeController'
    })

    .state('about',{
    	url:'/about',
    	templateUrl:'views/about.html'
    	//controller:'HomeController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});