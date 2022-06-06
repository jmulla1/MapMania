



var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

        var marker = new google.maps.Marker({position:{lat:32.6810,lng:-117.1783}, map:gMap});
        marker.setIcon('https://www.google.com/mapfiles/marker.png');
        
        
        var infoWindow = new google.maps.InfoWindow({content:'Coronado Island, California'});
        marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
        });




var marker2 = new google.maps.Marker({position:{lat:32.8503,lng:-117.2730}, map:gMap});
marker2.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow2 = new google.maps.InfoWindow({content:'La Jolla Cove, California'});
marker2.addListener('click', function() {
    infoWindow2.open(gMap, marker2);
});

var marker3 = new google.maps.Marker({position:{lat:28.3200,lng:-80.6076}, map:gMap});
marker3.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow3 = new google.maps.InfoWindow({content:'Cocoa Beach, Florida'});
marker3.addListener('click', function() {
    infoWindow3.open(gMap, marker3);
});

var marker4 = new google.maps.Marker({position:{lat:35.6532,lng:-83.5070}, map:gMap});
marker4.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow4 = new google.maps.InfoWindow({content:'Smoky Mountains, Tennessee'});
marker4.addListener('click', function() {
    infoWindow4.open(gMap, marker4);
});

var marker5 = new google.maps.Marker({position:{lat:36.0544,lng:-112.1401}, map:gMap});
marker5.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow5 = new google.maps.InfoWindow({content:'Grand Canyon, Arizona'});
marker5.addListener('click', function() {
    infoWindow5.open(gMap, marker5);
});

var marker6 = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
marker6.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow6 = new google.maps.InfoWindow({content:'Chicago, Illinois'});
marker6.addListener('click', function() {
    infoWindow6.open(gMap, marker6);
});

var marker7 = new google.maps.Marker({position:{lat:26.1837,lng:-98.1231}, map:gMap});
marker7.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow7 = new google.maps.InfoWindow({content:'Alamo, Texas'});
marker7.addListener('click', function() {
    infoWindow7.open(gMap, marker7);
});

var marker8 = new google.maps.Marker({position:{lat:21.3099,lng:-157.8581}, map:gMap});
marker8.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow8 = new google.maps.InfoWindow({content:'Honolulu, Hawaii'});
marker8.addListener('click', function() {
    infoWindow8.open(gMap, marker8);
});

google.maps.event.addListener(gMap, 'idle', function() {
    updateGame()
});



    }


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;


    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}





function initApplication() {
    console.log('Map Mania Lite - Starting!');
}