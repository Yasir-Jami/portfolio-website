import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
import ProjectCard from "./ProjectCard.jsx"

function App() {
  return(
    <>
      <Header />
      <About />
      <ProjectCard projectName="Paddle" projectTitleColor="#b87333"/>
      <ProjectCard projectName="ShiftSmart" projectTitleColor="#b87333"/>
      <ProjectCard projectName="Linux Process Simulator" projectTitleColor="#b87333"/>
      {/*<Footer />*/}
    </>
  );
}

export default App