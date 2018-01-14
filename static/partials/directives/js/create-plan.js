flightApp.directive("createPlan", function() {
    return {
        restrict: 'AE',
        templateUrl: 'partials/directives/templates/create-plan.html',
        controller: 'mapController'
    }
});
