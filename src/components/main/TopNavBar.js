export default function TopNavBar(props) {
    return (<div>
    <nav>
      <h1>RIFATUL KARIM</h1>
      <ul class="navigation">
        <li><p class="nav-link" onClick={() => props.setLinkClicked("about")}></p>About</li>
        <li><p class="nav-link" onClick={() => props.setLinkClicked("skills")}></p>Skills</li>
        <li><p class="nav-link" onClick={() => props.setLinkClicked("projects")}></p>Projects</li>
        <li><p onClick={() => props.setLinkClicked("contact")}></p>Contact</li>
      </ul>
    </nav>  
    </div>
    )
}