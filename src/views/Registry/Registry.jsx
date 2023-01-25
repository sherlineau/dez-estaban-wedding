import React from "react";
import amazon from "../../assets/images/amazon.png";
import "./Registry.css";

const Registry = () => {
  return (
    <div className="container-center">
      <div className="registry">
        <div className="content">
          We're looking forward to celebrating with you on our big day. Having
          you attend our wedding is the greatest gift of all. However, if you're
          looking for wedding gift ideas, we've registered on Amazon for things
          that we need to complete our new home and life together. Please click
          on the button below to view it!
        </div>
        <a
          href="https://www.amazon.com/wedding/share/TheCasta%C3%B1edas"
          target="_blank"
          rel="noreferrer"
        >
          <img src={amazon} alt={amazon} />
        </a>
      </div>
    </div>
  );
};

export default Registry;
