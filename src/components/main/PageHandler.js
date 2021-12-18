
import AboutMe from '../main/AboutMe.js'
import Skills from '../skills/Skills.js';
import Contact from '../contact/Contact.js';
import PageNotFound from './PageNotFound.js';
import Projects from '../projects/Projects.js';
import Blogs from '../blogs/Blogs.js';


export default function PageHandler(props) {
    switch(props.linkClicked) {
      case "about": 
        return <AboutMe />
      case "blogs":
        return <Blogs />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return <PageNotFound />  
    }
}