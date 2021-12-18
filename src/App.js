import './App.css';
import { useState } from 'react';
import TopNavBar from './components/main/TopNavBar.js';
import PageHandler from './components/main/PageHandler.js';


function App() {
  const [linkClicked, setLinkClicked] = useState("about");
  // will try to stick pages together in single page
  return (
    <div>
      <TopNavBar setLinkClicked={setLinkClicked} />
      <PageHandler linkClicked={linkClicked} />
    </div>
  );
}


export default App;
