import "../privateInfo.css";
import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const Experience = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  let regex = /^[a-zA-Z0-9-^ა-ჰ]{2,}$/;

  const handleBlur = (event) => {
    setFirstName(event.target.value);
  };
  const handleBlurr = (event) => {
    setLasttName(event.target.value);
  };

  const isValidOne = firstName === "" || regex.test(firstName);
  const isValidTwo = lastName === "" || regex.test(lastName);

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="pageInfoTwo">
          <GlobalInput
            placeholder="დეველოპერი, დიზაინერი, ა.შ"
            label="თანამდებობა"
            span="მინიმუმ 2 სიმბოლო"
            onKeyUp={handleBlur}
            firstName={props.firstName}
            style={{ borderColor: isValidOne ? "" : "red" }}
          />
          <GlobalInput
            placeholder="დამსაქმებელი"
            label="დამსაქმებელი"
            span="მინიმუმ 2 სიმბოლო"
            lastName={props.lastName}
            onBlur={handleBlurr}
            style={{ borderColor: isValidTwo ? "" : "red" }}
          />
          <div className="dateFlexDiv">
            <GlobalInput label="დაწყების რიცხვი" type="date" />
            <GlobalInput label="დამთავრების რიცხვი" type="date" />
          </div>
          <GlobalText
            label="აღწერა"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            className="workplaceInfo"
          />

          <div className="addExpBtnParent">
            <button
              className="addInfoButton"
              //  onClick={handleAddNewExperience}
            >
              მეტი გამოცდილების დამატება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
