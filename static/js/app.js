var flightApp = angular.module('flightApp', ['ngRoute']);

flightApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mapController',
            access: {restricted: false}
        })
         .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutApplicationController',
            access: {restricted: false}
        })
        .otherwise({
            redirectTo: '/'
        });
});
