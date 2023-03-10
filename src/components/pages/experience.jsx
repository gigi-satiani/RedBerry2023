import React, { useState } from "react";
import { AddExperience } from "../exp&eduComponents/addExperience";
import "../cssFiles/main.css";

export const Experience = () => {
  const [addExperience, setAddExperience] = useState([]);

  function handleAddInfo() {
    setAddExperience([
      ...addExperience,
      <AddExperience key={addExperience.length} />,
    ]);
  }

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="pageInfoTwoExp">
          <div className="addExpBtnParent">
            <AddExperience />
            {addExperience}
          </div>
          <button
            type="button"
            className="addInfoButton"
            onClick={handleAddInfo}
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>
      </div>
    </div>
  );
};
