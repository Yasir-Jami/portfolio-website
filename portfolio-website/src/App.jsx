import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
import ProjectCard from "./ProjectCard.jsx"
import processSimulatorImage from "./assets/process_sim.png"
import paddleImage from "./assets/paddle.png"
import shiftImage from "./assets/ShiftSmart.png"

function App() {
  return(
    <>
      <Header />
      <About />
      <ProjectCard 
        projectName="Paddle"
        projectTitleColor="#b87333" 
        projectDescription="Two-player web game made with HTML and JavaScript. 
        Play the game by hitting the ball past your opponent's paddle. 
        The winner is the one who scores 9 goals first."
        projectImage={paddleImage}
      />
      <ProjectCard 
        projectName="ShiftSmart" 
        projectTitleColor="#b87333" 
        projectDescription="A Java mobile application used to schedule shifts for employees. 
        Developed in a four-person team while following Agile methodology for project management."
        projectImage={processSimulatorImage}
      />
      <ProjectCard 
        projectName="Linux Process Simulator" 
        projectTitleColor="#b87333"
        projectDescription="Program that simulates the queueing and running of processes on Unix-like systems. 
        A log file recording the execution is used to generate an image like the one below."
        projectImage={paddleImage}
      />
      <Footer />
    </>
  );
}

export default App