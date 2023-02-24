import React, { useState, useEffect } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalTextArea } from "../globals/globalTextArea";

export const AddEducation = (props) => {
  const [degrees, setDegrees] = useState([]);
  const [educationValue, setEducationValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const regex = /^[a-zA-Z0-9-^ა-ჰ]{2,}$/;
  const handleBlur = (event) => {
    setEducationValue(event.target.value);
  };
  const regexText = /^[a-zA-Z0-9-^ა-ჰ]{0,}$/;
  const handleBlurer = (event) => {
    setTextValue(event.target.value);
  };

  const isValidOne = educationValue === "" || regex.test(educationValue);
  const isValidTwo = textValue === "" || regexText.test(textValue);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((result) => {
        setDegrees(result);
      });
  }, []);

  return (
    <div className="additionalEducation">
      <GlobalInput
        placeholder="სასწავლებელი"
        label="სასწავლებელი"
        span="მინიმუმ 2 სიმბოლო"
        onKeyUp={handleBlur}
        firstName={props.firstName}
        style={{
          outline:
            isValidOne && educationValue.length >= 2
              ? "solid 2px #98E37E"
              : isValidOne
              ? ""
              : "solid 2px #EF5050",
        }}
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
      <GlobalTextArea
        label="აღწერა"
        placeholder="განათლების აღწერა"
        className="workplaceInfo"
        onKeyUp={handleBlurer}
        firstName={props.firstName}
        style={{
          outline:
            isValidTwo && textValue.length >= 1
              ? "solid 2px #98E37E"
              : isValidTwo
              ? ""
              : "solid 2px #EF5050",
        }}
      />
    </div>
  );
};
