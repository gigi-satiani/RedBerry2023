import React, { useState, useEffect } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalTextArea } from "../globals/globalTextArea";

export const AddExperience = (props) => {
  const [workPosition, setWorkPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [textValue, setTextValue] = useState("");

  // position & employer
  let regex = /^[a-zA-Z0-9-^ა-ჰ]{2,}$/;

  const handlePosition = (event) => {
    setWorkPosition(event.target.value);
  };
  const handlEmployer = (event) => {
    setEmployer(event.target.value);
  };

  const isValidOne = workPosition === "" || regex.test(workPosition);
  const isValidTwo = employer === "" || regex.test(employer);

  useEffect(() => {
    const acceptImage = document.getElementById("goodImg");
    const diclineImage = document.getElementById("badImg");

    if (isValidOne && workPosition.length >= 2) {
      acceptImage.style.display = "block";
      diclineImage.style.display = "none";
    } else if (workPosition === "") {
      acceptImage.style.display = "none";
      diclineImage.style.display = "none";
    } else if (!isValidOne) {
      acceptImage.style.display = "none";
      diclineImage.style.display = "block";
    }
  }, [isValidOne, workPosition]);

  useEffect(() => {
    const acceptImage1 = document.querySelectorAll("#goodImg")[1];
    const diclineImage1 = document.querySelectorAll("#badImg")[1];

    if (isValidTwo && employer.length >= 2) {
      acceptImage1.style.display = "block";
      diclineImage1.style.display = "none";
    } else if (employer === "") {
      acceptImage1.style.display = "none";
      diclineImage1.style.display = "none";
    } else if (!isValidTwo) {
      acceptImage1.style.display = "none";
      diclineImage1.style.display = "block";
    }
  }, [isValidTwo, employer]);

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
        onKeyUp={handlePosition}
        workPosition={props.workPosition}
        style={{
          outline:
            isValidOne && workPosition.length >= 2
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
        employer={props.employer}
        onKeyUp={handlEmployer}
        style={{
          outline:
            isValidTwo && employer.length >= 2
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
        workPosition={props.workPosition}
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
