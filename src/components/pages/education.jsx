import React, { useState } from "react";
import { AddEducation } from "../exp&eduComponents/addEducation";
import "../cssFiles/main.css";

export const Education = () => {
  const [addEducation, setAddEducation] = useState([]);

  function handleAddEdu() {
    setAddEducation([
      ...addEducation,
      <AddEducation key={addEducation.length} />,
    ]);
  }
  return (
    <div className="mainEduPage">
      <div className="udecationParent">
        <div className="pageInfoTwo">
          <AddEducation />
          {addEducation}
        </div>
        <div className="addEduBtnParent">
          <button
            className="addInfoButton"
            type="button"
            onClick={handleAddEdu}
          >
            სხვა სასწავლებლის დამატება
          </button>
        </div>
      </div>
    </div>
  );
};
