import "../privateInfo.css";
import React, { useEffect, useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const Education = (props) => {
  const [degrees, setDegrees] = useState([]);
  const [firstName, setFirstName] = useState("");

  const regex = /^[a-zA-Z0-9-^ა-ჰ]{2,}$/;
  const handleBlur = (event) => {
    setFirstName(event.target.value);
  };

  const isValidOne = firstName === "" || regex.test(firstName);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((result) => {
        setDegrees(result);
      });
  }, []);

  return (
    <div className="mainEduPage">
      <div className="udecationParent">
        <div className="pageInfoTwo">
          <div className="additionalEducation">
            <GlobalInput
              placeholder="სასწავლებელი"
              label="სასწავლებელი"
              span="მინიმუმ 2 სიმბოლო"
              onKeyUp={handleBlur}
              firstName={props.firstName}
              style={{ borderColor: isValidOne ? "" : "red" }}
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
          </div>

          <div className="addExpBtnParent">
            <button className="addInfoButton" type="button">
              სხვა სასწავლებლის დამატება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
