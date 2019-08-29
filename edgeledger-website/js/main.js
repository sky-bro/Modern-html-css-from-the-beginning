var map;
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map: map});
}