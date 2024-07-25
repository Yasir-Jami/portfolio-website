import PropTypes from "prop-types";
import "./styles/ProjectCard.css"
import projectImage from "./assets/paddle.png"

function ProjectCard(props){
  return(
    <div className = "project-card">
      <h2 style={{color: props.projectTitleColor}}>{props.projectName}</h2>
      <hr></hr>
      <h4 className="project-description">{props.projectDescription}</h4>
      <img className="project-image" src={projectImage} alt="project image"></img>
    </div>
  );
}

ProjectCard.proptypes = {
  projectName: PropTypes.string,
  projectImage: PropTypes.string,
  projectTitleColor: PropTypes.string,
  projectDescription: PropTypes.string,
}

ProjectCard.defaultProps = {
  projectName: "Project",
  projectImage: "Image Link",
  projectTitleColor: "#b87333",
  projectDescription: "Description",
}

export default ProjectCard