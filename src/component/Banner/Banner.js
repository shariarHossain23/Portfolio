import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MovingComponent from "react-moving-text";
import image from "../../assests/portfolio.png";
import "./Banner.css";

const AnimationsForChaining = ["fadeInFromLeft"];
const AnimationsForChaining2 = ["fadeInFromRight"];
const Banner = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);
  const [animationIndex2, setAnimationIndex2] = useState(0);
  const [animationType2, setAnimationType2] = useState(
    AnimationsForChaining2[0]
  );
  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType([animationIndex + 1]);
  };
  const handleChainAnimation2 = () => {
    setAnimationIndex2(animationIndex2 + 1);
    setAnimationType2([animationIndex2 + 1]);
  };
  return (
    <div id="home" className="banner">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 banner-left">
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
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
            </MovingComponent>
          </div>
          <div className="col-md-6">
            <MovingComponent
              onAnimationEnd={handleChainAnimation2}
              type={animationType2}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
              <div className="banner-img mx-auto text-center">
                <img className="img-fluid" src={image} alt="" />
              </div>
            </MovingComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
