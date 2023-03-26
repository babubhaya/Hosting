function initMap() {
    // The location of islamabad
    var islamabad = { lat: 33.614265, lng: 73.134877 };
    // The map, centered at islamabad
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: islamabad,
    });
    // The marker, positioned at islamabad
    var marker = new google.maps.Marker({
      position: islamabad,
      map: map,
    });
  }
  
  window.initMap = initMap;

  