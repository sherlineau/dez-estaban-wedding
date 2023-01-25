import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.css";

const Map = (props) => {
  const [display, setDisplay] = useState(true);
  const { coordinates, info } = props;
  const { place, address, city, link } = info;

  const containerStyle = {
    width: "80%",
    height: "500px",
  };

  const center = useMemo(() => coordinates, []);

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
        {display ? (
          <InfoWindow position={center} onCloseClick={(e) => setDisplay(false)}>
            <div>
              <h3>{place}</h3>
              <p>{address}</p>
              <p>{city}</p>
              <a href={link} target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </InfoWindow>
        ) : (
          ""
        )}
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
