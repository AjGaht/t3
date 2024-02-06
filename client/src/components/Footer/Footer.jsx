import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://techtankbranch.ae/logo2.png" alt="" width={320} />
          {/*<span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>*/}
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Social Links</span>
          <span className="secondaryText">Follow Us on;</span>
          <div className="flexCenter f-menu">
            <span>
              <a href="https://www.linkedin.com/company/tech-tank-technology" target="_blank" rel="noopener noreferrer">linkedIn</a>
            </span>
            <span>
              <a href="https://www.facebook.com/techtanktechnology" target="_blank" rel="noopener noreferrer">Facebook</a>
            </span>
            <span>
              <a href="https://www.instagram.com/techtankdubai" target="_blank" rel="noopener noreferrer">Instagram</a>
            </span>
            <span>
              <a href="https://www.youtube.com/@techtankinformationtechnology" target="_blank" rel="noopener noreferrer">Youtube</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
