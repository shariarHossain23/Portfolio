import React from "react";
import about from "../../assests/about.png";
import "./About.css";
const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 about-left">
            <div className="about-right mt-5">
              <img className="img-fluid about-img" src={about} alt="" />
            </div>
          </div>
          <div className="col-md-6">
              <h2 className="text-white mb-3">About Me</h2>
            <p className="about-text">
              I am an energetic and imaginative web developer. I am able to work
              alongside other talented IT professionals in creating website the
              website very highest standards. I have a high awareness of
              industry issues and trends, particularly in regard to
              accessibility, usability, emerging technologies, and open-source
              CMS. I am an ambitious type I want to get noticed and massive
              energy is needed to really make a difference project. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
