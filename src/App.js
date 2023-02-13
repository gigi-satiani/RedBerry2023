import "./App.css";
import React, { useState } from "react";
import { Home } from "./components/Home";
import FormRegistration from "./components/formRegistration";

function App(props) {
  const [tab, setTab] = useState(0);

  const handleNextPage = () => {
    setTab((backTab) => {
      return backTab === 0 ? backTab + 1 : backTab;
    });
  };

  return (
    <div className="App">
      {tab === 0 ? (
        <Home
          onClick={props.handleNextPage + 1}
          handleNextPage={handleNextPage}
          tab={tab}
        />
      ) : (
        <FormRegistration />
      )}
    </div>
  );
}

export default App;
