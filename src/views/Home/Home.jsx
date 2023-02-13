import React from "react";
import "./Home.css";
import img from "../../assets/images/IMG_9089.jpg";

const Home = () => {
  const today = new Date().getTime();
  const rsvp = new Date(2023, 3, 13).getTime();
  return (
    <div className="container-center home">
      <h1>#unfinished</h1>
      <img src={img} alt="dez and estaban horse-back riding" />
      <div className="rsvp">
          {today > rsvp ? (
            ""
          ) : (
            <button className="rsvp-btn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfyWGwLNA-AK4-wQ-EMb6KGQpeCKMNmxqSPYn-0vybsQhqjSw/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              RSVP by April 13
            </a>
            </button>
          )}
        <p>May 13, 2023 @ 1:00PM</p>
      </div>
    </div>
  );
};

export default Home;
