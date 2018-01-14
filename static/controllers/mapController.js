flightApp.controller('mapController', function($scope, $rootScope) {

    // Initialize scope variables
    $scope.mapContainerId = "map";
    $scope.savedMapContainerId = "savedMap";
    $scope.createViewFlag = true;
    $scope.planName = "";
    $scope.flightPoints = [];
    $scope.savedFlightPlans = [];
    $scope.flightPlanCoordinates = [];
    $scope.emptySavedPlansFlag = true;
    $scope.emptySavedPlansMessage = "No flight plans have been saved yet";
    $scope.mapCenter = { lat: 46.52, lng: 6.63 };

    // Initialize a map and bind it to a Click event listener
    $scope.initMap = function(container, flightPlanCoordinates) {

        $scope.flightPlanCoordinates = flightPlanCoordinates;

        var map = renderMap(container, $scope.mapCenter);

        google.maps.event.addListener(map, 'click', function(event) {
           $scope.$apply( function(){
               $scope.flightPlanCoordinates.push(event.latLng);
               $scope.flightPoints.push({lat: event.latLng.lat(), lng: event.latLng.lng()});
           })
           makeLine(map, $scope.flightPlanCoordinates);
           placeMarker(map, event.latLng);
        });

        return map;
    };

    // Save a new flight plan
    $scope.savePlan = function(){

        // Check if saved plans list was empty and if yes switch emptySavedPlansFlag to false
        if($scope.flightPoints.length > 0){
            $scope.emptySavedPlansFlag = false;
        }

        // Push new plan's data to the savedFlightPlans array
        $scope.savedFlightPlans.push( {
            "name": $scope.planName,
            "coordinates": $scope.flightPoints,
            "flightPlanCoordinates" : $scope.flightPlanCoordinates
        } );

        // Notify customer that their plan was saved
        alert("Plan " + $scope.planName +" was successfully saved.");

        // Re-initialize map parameters to allow customers to create a new plan
        $scope.resetPlan();
    };

    // Display saved plan on click
    $scope.displayPlan = function(plan){

        // Search the data about the flight plan that was selected
        for (var i=0; i < $scope.savedFlightPlans.length; i++){
            if ($scope.savedFlightPlans[i].name == plan){
                savedFlightPlanCoordinates = $scope.savedFlightPlans[i].flightPlanCoordinates;
                break;
            }
        }

        $scope.displayedMapName = plan;

        $scope.savedMapContainer = document.getElementById($scope.savedMapContainerId);
        if($scope.savedMapContainer){

            // Render the map centered at the first point, and the flight plan corresponding to the stored data
            $scope.savedMap = renderMap($scope.savedMapContainer, $scope.savedFlightPlans[0].coordinates[0]);
            makeLine($scope.savedMap, savedFlightPlanCoordinates);
        }

        // Hide the view to create a plan, show the view for displaying a plan
        $scope.createViewFlag = false;
    };

    // Clear all user given inputs, plan name and points on the map
    $scope.resetPlan = function(){
        $scope.planName = "";
        $scope.flightPoints = [];
        $scope.flightPlanCoordinates = [];
        $scope.initMap($scope.mapContainer, $scope.flightPlanCoordinates);
    };

    // Re-initialize map and plan parameters
    $scope.createNewPlan = function(){
        $scope.createViewFlag = true;
        $scope.resetPlan();
    };

    // Get map container and render initial map
    $scope.mapContainer = document.getElementById($scope.mapContainerId);
    if($scope.mapContainer){
        $scope.map = $scope.initMap($scope.mapContainer, $scope.flightPlanCoordinates);
    };

});