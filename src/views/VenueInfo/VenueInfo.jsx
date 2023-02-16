import React from "react";
import Map from "../../components/Map/Map";
import "./VenueInfo.css";

const VenueInfo = () => {
  const ceremony = {
    coordinates: { lat: 34.14938524079817, lng: -118.00018707116448 },
    place: "First Baptist Church",
    address: "223 S. Encinitas Ave",
    city: "Monrovia, CA 91016",
    link: "https://www.google.com/maps/dir//223+South+Encinitas+Avenue,+Monrovia,+CA/@34.1493869,-118.0353031,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2d941e5049627:0x9910c29904750820!2m2!1d-118.0001978!2d34.1493919",
  };

  const reception = {
    coordinates: { lat: 34.034363756679525, lng: -118.23169403896584 },
    place: "Seventh Place",
    address: "802 Mateo St",
    city: "Los Angeles, CA 90021",
    link: "https://www.google.com/maps/dir//802+Mateo+St,+Los+Angeles,+CA+90021/@34.0332257,-118.2475298,14.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c621a128eef5:0x2bc4f2135252f69b!2m2!1d-118.2320577!2d34.0334215",
  };

  return (
    <div className="container-center">
      <div className="maps">
        <div className="venue">
          <Map ceremony={ceremony} reception={reception} />
        </div>
        <div className="parking">
          <h3>Ceremony Parking:</h3>
          <ul>
            <li>
              116 E Palm Ave{" "}
              <a
                href="https://www.google.com/maps/dir//116+E+Palm+Ave,+Monrovia,+CA/@34.1489527,-118.0009171,18z"
                target="_blank"
                rel="noreferrer"
              >
                Free
              </a>
            </li>
            <li>
              209 South Encinitas Ave{" "}
              <a
                href="https://www.google.com/maps/dir//209+S+Encinitas+Ave,+Monrovia,+CA+91016/@34.1499699,-118.0351089,13z"
                target="_blank"
                rel="noreferrer"
              >
                Free
              </a>
            </li>
          </ul>
          <h3>Reception Parking:</h3>
          <ul>
            <li>
              2011 E 7th Pl Parking{" "}
              <a
                href="https://www.google.com/maps/dir//2011+East+7th+Street,+Los+Angeles,+CA/@34.0346423,-118.233905,17z"
                target="_blank"
                rel="noreferrer"
              >
                Paid
              </a>
            </li>
            <li>
              826 Mateo St{" "}
              <a
                href="https://www.google.com/maps/dir//826+Mateo+St,+Los+Angeles,+CA+90021/@34.0328173,-118.2667819,13z"
                target="_blank"
                rel="noreferrer"
              >
                Free
              </a>
            </li>
            <li>
              801 Mateo St{" "}
              <a
                href="https://www.google.com/maps/dir//801+Mateo+St,+Los+Angeles,+CA/@34.0336501,-118.3727162,11z/"
                target="_blank"
                rel="noreferrer"
              >
                Street
              </a>
            </li>
          </ul>
          <h3>Nearby Hotels</h3>
          <ul>
            <li>Hyatt Place Pasadena <a href="https://www.hyatt.com/en-US/hotel/california/hyatt-place-pasadena/laczp?src=corp_lclb_gmb_seo_laczp#quickbook" target="_blank" rel="noreferrer">Link</a></li>
            <li>Sheraton Pasadena Hotel <a href="https://www.marriott.com/en-us/hotels/laxsp-sheraton-pasadena-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target="_blank" rel="noreferrer">Link</a></li>
            <li>Hilton Pasadena <a href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=PASPHHF" target="_blank" rel="noreferrer">Link</a></li>
            <li>The Westin Pasadena <a href="https://www.marriott.com/en-us/hotels/laxpw-the-westin-pasadena/" target="_blank" rel="noreferrer">Link</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
