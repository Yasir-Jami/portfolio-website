import PropTypes from "prop-types";
import "./styles/ProjectCard.css"

function ProjectCard(props){
  return(
    <div className = "project">
      <h2 style={{color: props.projectTitleColor}}>{props.projectName}</h2>
      <hr></hr>
      <h4>This project</h4>
    </div>
    
  );
}

ProjectCard.proptypes = {
  projectName: PropTypes.string,
  projectImage: PropTypes.string,
  projectTitleColor: PropTypes.string,
}

ProjectCard.defaultProps = {
  projectName: "Project",
  projectImage: "Image Link",
  projectTitleColor: "#b87333", // Copper
}

export default ProjectCard