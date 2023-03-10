import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalTextArea } from "../globals/globalTextArea";

export const AddExperience = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [textValue, setTextValue] = useState("");

  let regex = /^[a-zA-Z0-9-^ა-ჰ]{2,}$/;

  const handleBlur = (event) => {
    setFirstName(event.target.value);
  };
  const handleBlurr = (event) => {
    setLasttName(event.target.value);
  };

  const isValidOne = firstName === "" || regex.test(firstName);
  const isValidTwo = lastName === "" || regex.test(lastName);

  // text area regex
  const regexText = /^[a-zA-Z0-9-^ა-ჰ]{0,}$/;
  const handleBlurer = (event) => {
    setTextValue(event.target.value);
  };
  const isValidThree = textValue === "" || regexText.test(textValue);

  return (
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
              ? "solid 2px #98E37E"
              : isValidOne
              ? ""
              : "solid 2px #EF5050",
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
              ? "solid 2px #98E37E"
              : isValidTwo
              ? ""
              : "solid 2px #EF5050",
        }}
      />
      <div className="dateFlexDiv">
        <GlobalInput label="დაწყების რიცხვი" type="date" />
        <GlobalInput label="დამთავრების რიცხვი" type="date" />
      </div>
      <GlobalTextArea
        label="აღწერა"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        className="workplaceInfo"
        onKeyUp={handleBlurer}
        firstName={props.firstName}
        style={{
          outline:
            isValidThree && textValue.length >= 1
              ? "solid 2px #98E37E"
              : isValidThree,
        }}
      />
    </div>
  );
};
