import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import data from "../../CustomHook/useDataHook";
import Projects from "../Projects/Projects";
import "./MyProject.css";


const MyProject = () => {
  return (
    <div className="bg-project">
      <h1 className="text-center text-white mb-5">My Project</h1>
      <div className="container">
        <div className="row">
          {data.map((project) => (
            <Projects key={project.id} project={project}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
