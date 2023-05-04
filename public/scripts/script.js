let map;
let coords = { lat: -34.397, lng: 150.644 }

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");


  map = new Map(document.getElementById("map"), {
  // return new Map(document.getElementById("map"), {
    center: coords,
    zoom: 8,
  });


  const marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition() );
    }, 3000);
  });

  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition() );
  });






// return map;
}

// const map = initMap()
// initMap();

//  for line 22 const map = initMap()
//git stash
