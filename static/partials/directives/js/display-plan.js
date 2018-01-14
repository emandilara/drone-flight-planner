flightApp.directive("displayPlan", function() {
    return {
        restrict: 'AE',
        templateUrl: 'partials/directives/templates/display-plan.html',
        controller: 'mapController'
    }
});
