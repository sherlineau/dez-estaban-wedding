import React from "react";
import img from "../../assets/images/IMG_9182.jpg";
import "./OurStory.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audio from "../../assets/Perfect.mp3";

const OurStory = () => {
  return (
    <div className="container-center">
      <img src={img} alt="dez and estaban proposal" />
      <div className="story">
        <h1>Our Story</h1>
        <div className="our-story content">
          <div className="mb-2">
            <p>
              Let's celebrate our love and start off with our favorite song,
              "Perfect" by Coffey Anderson, as we tell our story.
            </p>
            <AudioPlayer
              autoPlay
              src={audio}
              onPlay={(e) => console.log("onPlay")}
            />
          </div>
          <p>
          Most people think our story started just a few years ago, however, our fairytale actually began 29 years ago in 1994 in Duarte, CA. During our party crew days (Cosmic Groove and Posse Outlaws), a mutual friend introduced the kid from below the tracks to a girl who went to school in South Pasadena. During the car ride back to South Pasadena, a spark was ignited, setting in motion a strategic plan by both where we exchanged "pager" numbers.
          </p>
          <br />
          <p>
          Immediately after graduating high school and prior to emails, cell phones, and social media, Esteban enlisted in the United States Marine Corps, so we put pen to paper in order to communicate. After some time, life took us to different parts of the world (Arizona and Asia), and we lost contact with one another.
          </p>
          <br />
          <p>
          "If you love something, set it free. If it comes back to you, it is yours."
          </p>
          <br />
          <p>
          In 2017, with the help of social media, we reconnected. After erasing doubts and voicing regrets, we realized we left things <span className="unfinished">#unfinished</span>, so we reunited one month later. Since then, we vowed never to lose each other again. We also decided to blend our family of boys, the Bigs and the Littles.
          </p>
          <br />
          <p>Thank you for being a part of our journey.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
