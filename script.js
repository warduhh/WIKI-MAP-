let map;
let location = { lat: -34.397, lng: 150.644 }

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: location,
    zoom: 8,
  });
}

initMap();