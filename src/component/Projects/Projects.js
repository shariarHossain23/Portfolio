import { useNavigate } from "react-router-dom";
import "./Project.css";

const Projects = ({ project }) => {
  const { picture, link,name,technology,id } = project;
  const navigate = useNavigate()
  return (
    <div className="col-md-4 mt-5">
      <div class="card container-card" style={{ width: "20rem",height:"30rem" }}>
        <img src={picture}  height="200px" class="card-img-top img-fluid" alt="..." />
        <div class="card-body content">
          <h5 class="card-title ">{name}</h5>
          <p class="card-text fs-6">Technology used: {technology}</p>
          <a target='_blank' href={link} className="live mt-4" rel="noreferrer">
           Live
          </a>
          <a onClick={()=> navigate(`/details/${id}`)} href="" className="live ms-2 mt-4" rel="noreferrer">
           Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
