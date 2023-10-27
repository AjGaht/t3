import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Looking for a new challenge ?</span>
          <span className="secondaryText">
            Embark on a career with impact..
            <br />
            Join Our Dynamic, Passionate Team Today!
          </span>
          <button className="button" href>
            <a href='mailto:hr@techtank.ae?subject=T3%20Online%20Application%20for%20Sales%20%26%20Telesale%20Executive'>Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
