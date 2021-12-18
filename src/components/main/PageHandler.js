import AboutMe from './components/main/AboutMe.js';
import Projects from './components/projects/Projects.js';
import Skills from './components/skills/Skills.js';
import Blogs from './components/blogs/Blogs.js';
import Contact from './components/contact/Contact.js';
import PageNotFound from './components/PageNotFound.js';


export default function renderChoice(props) {
    switch(props.linkClicked) {
      case "about": 
        return <AboutMe />
      case "skills":
        return <Skills />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return <PageNotFound />  
    }
}