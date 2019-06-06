//class to be able to load the Leaflet library, 
//create and manage a map and popup

import Leaflet from 'leaflet';

//general before selecting specific location
const ontario={
    coords:[51.2538, -85.3232],
    zoom:5
};

//set default map zoom level
const defaultZoom=14;

class SimpleMap {
    //In the constructor we take selector (e.g., #map) 
    //and use that to have Leaflet create a map shows all of Ontario
    constructor(el){
        this.map = Leaflet.map(el);

    // Add the free Open Street Maps tile layer
    Leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
  
    // Show an initial map of Ontario zoomed out
    this.map.setView(ontario.coords, ontario.zoom);
  
    }

    //when user choose location, update and popup
    update(lat,lng,name){
        //convert lat/lng to Leaflet LatLng Object
        const coords=Leaflet.latLng(lat,lng);

        //reposition map to this location
        this.map.setView(coords,defaultZoom);

        //update popup window to the same position with new info
        if(this.popup){
            //update existing popup position and text info
            this.popup.setLatLng(coords);
            this.popup.setContent(name);
        }else{
            //no popup yet, create one
            this.popup=Leaflet.popup({
                closeButton:false,
                closeOnEscapeKey:false,
                closeOnClick:false
            })
            .setLatLng(coords)
            .setContent(name)
            .openOn(this.map);
        }
    }
}

//export thhe class to use
export default SimpleMap;