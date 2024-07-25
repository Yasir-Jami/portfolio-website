import PropTypes from "prop-types";
import "./styles/ProjectCard.css"
import paddleImage from "./assets/paddle.png"
import shiftImage from "./assets/ShiftSmart.png"
import processSimulatorImage from "./assets/ProcessSimulatorGraph.png"

function ProjectCard(props){
  let imageSource = paddleImage; // default

  if (props.projectImage === shiftImage) {
    imageSource = shiftImage;
  }
  else if (props.projectImage === processSimulatorImage){
    imageSource = processSimulatorImage;
  }

  return(
    <div className = "project-card">
      <h2 style={{color: props.projectTitleColor}}>{props.projectName}</h2>
      <hr></hr>
      <h4 className="project-description">{props.projectDescription}</h4>
      <img className="project-image" src={imageSource} alt="image"></img>
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
  projectImage: "Image",
  projectTitleColor: "#b87333",
  projectDescription: "Description",
}

export default ProjectCard