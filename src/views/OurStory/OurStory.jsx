import React from "react";
import img from "../../assets/images/IMG_9182.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="container-center">
      <img src={img} alt="dez and estaban proposal" />
      <div className="story">
        <h1>#unfinished</h1>
        <div className="our-story content">
          <p>
            Most people think our story started just a few years ago, however
            our fairytale actual began 29 years ago in 1994, in Duarte, CA.
            During our party crew days (Cosmic Groove and Posse Outlaws) a
            mutual friend introduced the kid from below the tracks to a girl who
            went to school in South Pas. During the car ride back to South Pas,
            a spark was ignited setting in motion a strategic plan by both where
            we exchange “pager” numbers.
          </p>
          <br />
          <p>
            Immediately after graduating High School and prior to emails, cell
            phones, and social media, Esteban enlisted into the United States
            Marine Corps. where they put pen to paper in order to communicate.
            After some time, life would eventually take us to different parts of
            the world (Arizona and Asia) and we lost contact with one another.
          </p>
          <br />
          <p>
            “If you love something, set it free. If it comes back to you, it is
            yours.”
          </p>
          <br />
          <p>
            In 2017, with the help of social media, we were reconnected. After
            erasing doubts and voicing regrets we reunited one month later.
            Since then, we vowed not to ever lose each other again. We also
            decided to blend our family of boys, the Bigs and the Littles.
          </p>
          <br />
          <p>Thank you for being a part of our journey.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
