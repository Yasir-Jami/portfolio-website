import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
import ProjectCard from "./ProjectCard.jsx"

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
        projectImage="/portfolio-website/src/assets/paddle.png"
      />
      <ProjectCard 
        projectName="ShiftSmart" 
        projectTitleColor="#b87333" 
        projectDescription="A Java mobile application used to schedule shifts for employees. 
        Developed in a four-person team while following Agile methodology for project management."
        projectImage="/portfolio-website/src/assets/ShiftSmart.png"
      />
      <ProjectCard 
        projectName="Linux Process Simulator" 
        projectTitleColor="#b87333"
        projectDescription="Program that simulates the queueing and running of processes on Unix-like systems. 
        A log file recording the execution is used to generate an image like the one below."
        projectImage="/portfolio-website/src/assets/ProcessSimulatorGraph.png"
      />
      <Footer />
    </>
  );
}

export default App