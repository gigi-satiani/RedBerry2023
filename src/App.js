import './App.css';
import React from "react";
import Home from './components/home';
import PrivateInfo from './components/privateInfo';
import { Experience } from './components/pagetwo/experience.jsx';


function App() {
  return (
    <div className="App" >
      {/* <Home/> */}
      {/* <PrivateInfo/> */}
      <Experience />
    </div>
  )
};

export default App;