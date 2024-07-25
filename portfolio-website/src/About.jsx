import profilePicture from "./assets/profilepicture.png"
import "./styles/About.css"

function About(){
  return(
    <div className="about">
      <h2 className="intro">I'm Yasir!</h2>
      <h3 className="blurb">I create software projects.</h3>
      <img className="profile-image" src={profilePicture} alt="profile picture"></img>
    </div>
  )
}

export default About