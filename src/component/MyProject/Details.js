import { useParams } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../CustomHook/useDataHook";
import '../MyProject/Detail.css';

const Details = () => {
  const { detailId } = useParams();
  const project = data.find((p) => p.id === detailId);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
    <>
      <Swiper
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 60,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
       className="mySwiper"
      >
        <SwiperSlide width="400px" style={{width:"500px"}}>
            <img className="fluid" width='' height="" src={project.picture} alt="" />
        </SwiperSlide>
        <SwiperSlide width="400px" style={{width:"500px"}}>
            <img className="fluid" width='' height="" src={project.img1} alt="" />
        </SwiperSlide>
        <SwiperSlide width="400px" style={{width:"500px"}}>
            <img className="fluid" width='' height="" src={project.img2} alt="" />
        </SwiperSlide>
        <SwiperSlide width="400px" style={{width:"500px"}}>
            <img className="fluid" width='' height="" src={project.img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </> 
       <div className="project-text">
           <h1 className="text-white">{project.name}</h1>
           <p>{project.about}</p>
           <p>Technology used: <span>{project.technology}</span></p>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
  
    