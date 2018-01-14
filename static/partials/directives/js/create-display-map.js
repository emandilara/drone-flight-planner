flightApp.directive("createDisplayMap", function() {
    return {
        restrict: 'AE',
        templateUrl: 'partials/directives/templates/create-display-map.html',
        controller: 'mapController'
    }
});
