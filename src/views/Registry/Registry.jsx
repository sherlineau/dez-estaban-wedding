import React from "react";
import target from "../../assets/images/target.png";
import amazon from "../../assets/images/available_at_amazon_US_EN_logo_stacked_RGB_SQUID.png";
import walmart from "../../assets/images/walmart.png";
import "./Registry.css";

const Registry = () => {
  return (
    <div className="container-center">
      <div className="registry">
        <div className="registry-card">
          <a href="https://www.target.com/" target="_blank" rel="noreferrer">
            <img src={target} alt={target} className="top"/>
            <button className="bottom">Target</button >
          </a>
        </div>

        <div className="registry-card">
          <a href="https://www.amazon.com/" target="_blank" rel="noreferrer">
            <img src={amazon} alt={amazon} />
            <button>Amazon</button>
          </a>
        </div>

        <div className="registry-card">
          <a href="https://www.walmart.com/" target="_blank" rel="noreferrer">
            <img src={walmart} alt={walmart} />
            <button>Walmart</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registry;
