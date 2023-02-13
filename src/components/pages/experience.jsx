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
          <div className="additionalExperience">
            <GlobalInput
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              label="თანამდებობა"
              span="მინიმუმ 2 სიმბოლო"
              onKeyUp={handleBlur}
              firstName={props.firstName}
              style={{
                outline:
                  isValidOne && firstName.length >= 2
                    ? "solid 1px #98E37E"
                    : isValidOne
                    ? ""
                    : "solid 1px #EF5050",
              }}
            />
            <GlobalInput
              placeholder="დამსაქმებელი"
              label="დამსაქმებელი"
              span="მინიმუმ 2 სიმბოლო"
              lastName={props.lastName}
              onKeyUp={handleBlurr}
              style={{
                outline:
                  isValidTwo && lastName.length >= 2
                    ? "solid 1px #98E37E"
                    : isValidTwo
                    ? ""
                    : "solid 1px #EF5050",
              }}
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
          </div>
          <div className="addExpBtnParent">
            <button
              type="button"
              className="addInfoButton"
              // onClick={handleAddNewExperience}
              // handlePersonalInfosChange={handlePersonalInfosChange}
            >
              მეტი გამოცდილების დამატება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
