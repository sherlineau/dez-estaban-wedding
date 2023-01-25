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
  const { ceremony, reception } = props;

  const containerStyle = {
    width: "80%",
    height: "500px",
  };

  const center = useMemo(
    () => ({
      lat: 34.09737792437216,
      lng: -118.1051660796092,
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
        zoom={11}
        center={center}
        mapContainerStyle={containerStyle}
        options={options}
      >
        {display ? (
          <InfoWindow
            position={ceremony.coordinates}
            onCloseClick={(e) => setDisplay(false)}
          >
            <div>
              <p>Ceremony at:</p>
              <h3>{ceremony.place}</h3>
              <p>{ceremony.address}</p>
              <p>{ceremony.city}</p>
              <a href={ceremony.link} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </InfoWindow>
        ) : (
          ""
        )}
        <MarkerF
          position={ceremony.coordinates}
          onLoad={onLoad}
          onClick={(e) => setDisplay(true)}
        />
        {display ? (
          <InfoWindow
            position={reception.coordinates}
            onCloseClick={(e) => setDisplay(false)}
          >
            <div>
              <p>Reception at:</p>
              <h3>{reception.place}</h3>
              <p>{reception.address}</p>
              <p>{reception.city}</p>
              <a href={reception.link} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </InfoWindow>
        ) : (
          ""
        )}
        <MarkerF
          position={reception.coordinates}
          onLoad={onLoad}
          onClick={(e) => setDisplay(true)}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
