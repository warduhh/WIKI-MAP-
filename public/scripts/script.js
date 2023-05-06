let map;
let coords = { lat: -34.397, lng: 150.644 }
let marker;
async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");


  map = new Map(document.getElementById("map"), {
    center: coords,
    zoom: 8,
  });

  // create a marker when you click on the map
  map.addListener("click", (event) => {
    marker = new google.maps.Marker();
    marker.setPosition(event.latLng);
  marker.setMap(map);




    let isSaved = false;
    marker.addListener("click", () => {

        const infoWindow = new google.maps.InfoWindow({
          content: `
          <form>
            <div>
              <label for="title">Title:</label>
              <input type="text" id="title" name="title">
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <button type="button" onclick="savemarker()" class="savebtn">Save</button>
          </form>
          `,
        });
        infoWindow.open(map, marker);
    });




    // show title and description of saved markers when you hover over them in the map
    marker.addListener("mouseover", () => {
      if (isSaved) {
        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${marker.title}</h3><p>${marker.description}</p>`,
        });
        infoWindow.open(map, marker);
      }
    });

    marker.addListener("mouseout", () => {
      if (isSaved) {
        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${marker.title}</h3><p>${marker.description}</p>`,
        });
        infoWindow.close();
      }
    });
  });
}
////////////////////////////////////////////////

// saving marker to database
  function savemarker() {
  console.log('savebtn');
  console.log('map:',map);
  const title = $('#title').val();
  const description = $('#description').val();
  const latitude = marker.getPosition().lat();
  const longitude = marker.getPosition().lng();
  const map_id = 1; // replace with the actual map_id

  console.log("description:", description);
  console.log("longitude:", longitude);


  $.ajax({
    type: 'POST',
    url: '/points_of_interest',
    data: {
      title: title,
      description: description,
      latitude: latitude,
      longitude: longitude,
      map_id: map_id,
      user_id: 1
    },
    success: function(data) {
      console.log('Marker saved successfully!');
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.error('Error saving marker:', error);
      console.log(xhr.responseText);
    }
  });
};
