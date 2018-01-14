makeLine = function(map, flightPlanCoordinates){
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    flightPath.setMap(map);
}

renderMap = function(container, flightPlanCoordinates, center) {
    var map = new google.maps.Map(container, {
            zoom: 15,
            center: center,
            mapTypeId: 'terrain'
    });

    google.maps.event.addListenerOnce(map, 'idle', function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    return map;
}

placeMarker = function(map, location) {
    var marker = new google.maps.Marker({
            position: location,
            map: map
    });
}