import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import image from "../../assests/portfolio.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 banner-left">
            <h1 className="text-white">Hello! I’m</h1>
            <h1 className="text-white">Shariar Hossain</h1>
            <p>Junior Web Developer</p>
            <div>
              <button className="banner-btn mt-4">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1I2mWz_HNXcJWci1Jvq2dL3_V7CCNuM0r/view?usp=sharing"
                  download
                  rel="noreferrer"
                >
                  Get Resume
                </a>
              </button>
              <div>
                <div className="d-flex align-items-center mt-3">
                  <span className="icon-text">
                    Follow Me
                    <div className="line"></div>
                  </span>
                  <div className="icon-div">
                    <a
                      className="icon-social"
                      target="_blank"
                      href="https://www.facebook.com/sh.shariar17/"
                      rel="noreferrer"
                    >
                      <FaFacebook className="icon"></FaFacebook>
                    </a>
                    <a
                      className="icon-social"
                      target="_blank"
                      href="https://www.instagram.com/shariar1723/"
                      rel="noreferrer"
                    >
                      <FaInstagram className="icon"></FaInstagram>
                    </a>
                    <a
                      className="icon-social"
                      target="_blank"
                      href="https://www.linkedin.com/in/shariarhossain23/"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="icon"></FaLinkedin>
                    </a>
                    <a
                      className="icon-social"
                      target="_blank"
                      href="https://github.com/shariarHossain23"
                      rel="noreferrer"
                    >
                      <FaGithub className="icon"></FaGithub>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-img mx-auto text-center">
              <img className="img-fluid" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
