import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { AddExperience } from "../exp&eduComponents/addExperience";
import "../privateInfo.css";

export const Experience = () => {
  const [addInfo, setAddInfo] = useState(0);

  function handleAddInfo() {
    setAddInfo(addInfo + 1);
  }

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="pageInfoTwoExp">
          <div className="addExpBtnParent">
            <AddExperience />
            {[...Array(addInfo)].map((_, index) => (
              <AddExperience key={index} />
            ))}
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
