flightApp.controller('aboutApplicationController', function($scope) {
    $scope.projectName = "Drone Flight Planner";
    $scope.about = "This is a web application to allow customers to create and store flight plans for their drones. When the application is loaded, it shows a map and in one side of the page the list of the flight plans already stored. The user is able to create a flight plan by clicking on the map and inserting points. Each point is joint to the next one inserted with a straight line. Once the user has inserted all the points, he will be able to save the flight plan and load it at any time over the map.";
});