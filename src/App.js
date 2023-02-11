import "./App.css";
import React from "react";
import Home from "./components/home";
import FormRegistration from "./components/formRegistration";
import { Experience } from "./components/pages/experience.jsx";
import { Education } from "./components/pages/education";

function App() {
  return (
    <div className="App">
      <FormRegistration />
    </div>
  );
}

export default App;
