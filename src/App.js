import './App.css';
import { useState } from 'react';
import AboutMe from './components/AboutMe';

function App() {
  const [linkClicked, setLinkClicked] = useState("about");

  return (
    <nav>
      <h1>RIFATUL KARIM</h1>
      <ul class="navigation">
        <li><a href='=#about' class="nav-link" onClick={setLinkClicked("about")}></a>About</li>
        <li><a href='=#skills' class="nav-link" onClick={setLinkClicked("skills")}></a>Skills</li>
        <li><a href='=#projects' class="nav-link" onClick={setLinkClicked("projects")}></a>Projects</li>
        <li><a href='=#contact' class="nav-link" onClick={setLinkClicked("contact")}></a>Contact</li>
      </ul>
    </nav>  

    {renderChoice(linkClicked)}
  );
}

function renderChoice(choice) {
  switch(choice) {
    case "about": 
      return <AboutMe />
    case "skills":
      console.log("check out my skills!!");
      break;
    case "projects":
      console.log("check out my projects!!");
      break;
    case "contact":
      console.log("check out my contacts!!");
      break;  
    default:
      console.log("so your choice was " + choice);
      break;  
  }
}

export default App;
