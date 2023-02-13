import React, { useState } from "react";
import FormRegistration from "./components/formRegistration";
import "./App.css";

function App(props) {
  const [tab, setTab] = useState(0);

  const handleNextPage = () => {
    setTab((backTab) => {
      return backTab === 0 ? backTab + 1 : backTab;
    });
  };

  return (
    <div className="App">
      <FormRegistration />
    </div>
  );
}

export default App;
