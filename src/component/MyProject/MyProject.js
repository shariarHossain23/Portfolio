import React, { useEffect, useState } from "react";
import { Lazy, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MyProject.css";
const MyProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="bg-project">
      <h1 className="text-center text-white mb-5">My Project</h1>
      <div className="container">
        <div className="row">
          <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              lazy={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Lazy, Pagination, Navigation]}
              className="mySwiper"
          >
            {projects.map((project) => (
              <>
                <SwiperSlide className="carousel" key={project.id}>
                  <div className="projects mx-auto">
                  
                    <img
                    height="400px"
                      className="img-fluid"
                      src={project.picture}
                      alt=""
                    />
                    <p className="text-white fs-4">Website: {project.name}</p>
                    <p className="text-white">Technology used: <span>{project.technology}</span></p>
                      <a className="hire-btn text-decoration-none" href={project.link}>Live Demo</a>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
