/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

  const myLatlng = { lat: 56.48413745892002, lng: -3.01848828792572 };

  const map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 18,
    center: myLatlng,
  });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "You are here",
    position: myLatlng,
  });

  infoWindow.open(map);

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    console.log(mapsMouseEvent.latLng.toJSON())
    infoWindow.open(map);
  });
}

initMap();
export {};
