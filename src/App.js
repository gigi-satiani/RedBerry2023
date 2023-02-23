import React, { useState } from "react";
import FormRegistration from "./components/formRegistration";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage(2);
  }

  return (
    <div className="App">
      {page === 1 ? (
        <Home handleNextPage={handleNextPage} />
      ) : (
        <FormRegistration />
      )}
    </div>
  );
}
export default App;
