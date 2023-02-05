import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audio from "../../assets/Perfect.mp3";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="player">
        <AudioPlayer
          autoPlay
          src={audio}
          onPlay={(e) => console.log("onPlay")}
        />
        <span>Perfect by Coffey Anderson</span>
      </div>
    </div>
  );
};

export default Footer;
