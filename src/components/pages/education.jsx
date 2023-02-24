import React, { useState } from "react";
import { AddEducation } from "../exp&eduComponents/addEducation";
import "../cssFiles/main.css";

export const Education = () => {
  const [addEdu, setAddEdu] = useState(0);

  function handleAddEdu() {
    setAddEdu(addEdu + 1);
  }
  return (
    <div className="mainEduPage">
      <div className="udecationParent">
        <div className="pageInfoTwo">
          <AddEducation />
          {[...Array(addEdu)].map((_, index) => (
            <AddEducation key={index} />
          ))}
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
