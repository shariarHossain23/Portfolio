import { useState } from "react";
import MovingComponent from "react-moving-text";
import about from "../../assests/about3.png";
import "./About.css";

const AnimationsForChaining = ["fadeInFromLeft"];
const AnimationsForChaining2 = ["fadeInFromRight"];
const About = () => {
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
    <div id="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 about-left">
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
              <div className="about-right mt-5">
                <img className="img-fluid about-img" src={about} alt="" />
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
              {" "}
              <h2 className="text-white mb-3 mt-5">About Me</h2>
              <p className="about-text">
                I am an energetic and imaginative web developer. I am able to
                work alongside other talented IT professionals in creating
                website the website very highest standards. I have a high
                awareness of industry issues and trends, particularly in regard
                to accessibility, usability, emerging technologies, and
                open-source CMS. I am an ambitious type I want to get noticed
                and massive energy is needed to really make a difference
                project.
              </p>
            </MovingComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
