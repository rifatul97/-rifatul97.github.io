import './App.css';
import { useState } from 'react';
import AboutMe from './components/AboutMe';

function App() {
  const [linkClicked, setLinkClicked] = useState("about");

  return (
    <div>
    <nav>
      <h1>RIFATUL KARIM</h1>
      <ul class="navigation">
        <li><p class="nav-link" onClick={() => setLinkClicked("about")}></p>About</li>
        <li><p class="nav-link" onClick={() => setLinkClicked("skills")}></p>Skills</li>
        <li><p class="nav-link" onClick={() => setLinkClicked("projects")}></p>Projects</li>
        <li><p onClick={() => setLinkClicked("contact")}></p>Contact</li>
      </ul>
    </nav>  

    {renderChoice(linkClicked)}
    </div>
  );
}


function renderChoice(choice) {
  switch(choice) {
    case "about": 
      return <AboutMe />
    case "skills":
      return <AboutMe />
    case "projects":
      <Projects />
    case "contact":
      <Contact />
    default:
      <PageNotFound />  
  }
}

export default App;
