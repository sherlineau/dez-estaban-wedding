import React from "react";
import Map from "../../components/Map/Map";
import "./VenueInfo.css";

const VenueInfo = () => {
  return (
    <div className="container-center">
      <div className="maps">
        <div className="venue">
          <Map
            coordinates={{
              lat: 34.14938524079817,
              lng: -118.00018707116448,
            }}
            info={{
              place: "First Baptist Church",
              address: "223 S. Encinitas Ave",
              city: "Monrovia, CA 91016",
              link: "https://www.google.com/maps/dir//223+South+Encinitas+Avenue,+Monrovia,+CA/@34.1493869,-118.0353031,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2d941e5049627:0x9910c29904750820!2m2!1d-118.0001978!2d34.1493919",
            }}
          />
          <h1>Ceremony</h1>
        </div>

        <div className="venue">
          <Map
            coordinates={{
              lat: 34.034363756679525,
              lng: -118.23169403896584,
            }}
            info={{
              place: "Seventh Place",
              address: "802 Mateo St",
              city: "Los Angeles, CA 90021",
              link: "https://www.google.com/maps/dir//802+Mateo+St,+Los+Angeles,+CA+90021/@34.0332257,-118.2475298,14.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c621a128eef5:0x2bc4f2135252f69b!2m2!1d-118.2320577!2d34.0334215",
            }}
          />
          <h1>Reception</h1>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
