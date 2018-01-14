flightApp.directive("planPoints", function() {
    return {
        restrict: 'AE',
        templateUrl: 'partials/directives/templates/plan-points.html',
        controller: 'mapController'
    }
});
