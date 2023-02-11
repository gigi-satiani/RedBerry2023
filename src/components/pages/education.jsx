import "../privateInfo.css";
import React, { useEffect, useState } from "react";
import caret from "../../symbols/caret.png";
import { TotalInfo } from "../globals/totalInfo";
import { MyHeader } from "../globals/header";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const Education = (props) => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((result) => {
        setDegrees(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="mainEduPage">
      <div className="udecationParent">
        <div className="pageInfoTwo">
          <GlobalInput
            placeholder="სასწავლებელი"
            label="სასწავლებელი"
            span="მინიმუმ 2 სიმბოლო"
          />

          <div className="dateFlexDiv">
            <div className="educationSelectParent">
              <label className="mailLabel">ხარისხი</label>
              <select id="select" className="degreeSelect">
                <option value="" disabled selected>
                  აირჩიეთ ხარისხი
                </option>
                {degrees &&
                  degrees.map((degree) => (
                    <option key={degree.id}>{degree.title}</option>
                  ))}
              </select>
            </div>
            <GlobalInput label="დამთავრების რიცხვი" type="date" />
          </div>
          <GlobalText
            label="აღწერა"
            placeholder="განათლების აღწერა"
            className="workplaceInfo"
          />

          <div className="addExpBtnParent">
            <button className="addInfoButton">
              სხვა სასწავლებლის დამატება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
