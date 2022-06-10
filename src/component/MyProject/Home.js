import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MyProject from "./MyProject";

const Home = () => {
  return (
    <div>
      <Banner />
      <MyProject />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
