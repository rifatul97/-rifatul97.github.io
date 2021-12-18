import './App.css';
import { useState } from 'react';
import TopNavBar from './components/main/TopNavBar';
import PageHandler from './components/main/PageHandler';

function App() {
  const [linkClicked, setLinkClicked] = useState("about");

  return (
    <div>
    <TopNavBar setLinkClicked={setLinkClicked} />
    <PageHandler linkClicked={linkClicked} />
    </div>
  );
}


export default App;
