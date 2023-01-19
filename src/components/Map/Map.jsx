import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.css"

const Map = () => {
  const [display, setDisplay] = useState(true);

  const containerStyle = {
    width: "80%",
    height: "500px",
  };

  const center = useMemo(
    () => ({
      lat: 34.150299466215195,
      lng: -117.9998414874454,
    }),
    []
  );

  const options = useMemo(
    () => ({
      mapId: "f7986e3dc3bd17be",
      disableDefaultUI: true,
      clickableIcons: true,
      zoomControl: true,
    }),
    []
  );

  const onLoad = (marker) => {
    console.log("marker", marker);
  };

  const GOOGLE_API = process.env.REACT_APP_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API,
  });

  if (!isLoaded) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="map">
      <GoogleMap
        zoom={17}
        center={center}
        mapContainerStyle={containerStyle}
        options={options}
      >
        {display ? 
        <InfoWindow position={center} onCloseClick={(e)=> setDisplay(false)}>
          <div>
            <h3>Bethel Fellowship Church</h3>
            <p>207 S. Encinitas Ave</p>
            <p>Monrovia, CA 91016</p>
          </div>
        </InfoWindow>:""
        }
        <MarkerF
          position={center}
          onLoad={onLoad}
          onClick={(e) => setDisplay(true)}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
