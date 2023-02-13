import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const PrivateInformation = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("#bcbcbc");

  // name & lastname input validations
  let regex = new RegExp(/^[ა-ჰ]{2,}$/g);
  let regexTwo = new RegExp(/^[ა-ჰ]{2,}$/g);

  const handleKeyUpOne = (event) => {
    setFirstName(event.target.value);
  };
  const handleKeyUpTwo = (event) => {
    setLasttName(event.target.value);
  };

  const isValidOne = firstName === "" || regex.test(firstName);
  const isValidTwo = lastName === "" || regexTwo.test(lastName);

  // mail input validations
  const handleMailBlur = (event) => {
    const emailAddress = event.target.value;

    if (!validateEmail(emailAddress)) {
      setBorderColor("#EF5050");
    } else {
      setBorderColor("#98E37E");
    }
  };

  const validateEmail = (email) => {
    if (email.endsWith("@redberry.ge")) {
      return true;
    }
    return false;
  };

  // phone input validations
  const validateNumber = (e) => {
    const numberValidator = e.target.value;

    let regexThree = /^(\+?995)(79\d{7}|5\d{8})$/;

    if (!numberValidator.match(regexThree)) {
      setBorderColor("#EF5050");
    } else {
      setBorderColor("#98E37E");
    }
  };

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="infoInputParent">
          <GlobalInput
            placeholder="გიგი"
            label="სახელი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            onKeyUp={handleKeyUpOne}
            firstName={props.firstName}
            style={{
              outline:
                isValidOne && firstName.length >= 2
                  ? "solid 1px #98E37E" // <img src="asdasda" />
                  : isValidOne
                  ? ""
                  : "solid 1px #EF5050",
            }}
          />
          <GlobalInput
            placeholder="ასათიანი"
            label="გვარი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            lastName={props.lastName}
            onKeyUp={handleKeyUpTwo}
            style={{
              outline:
                isValidTwo && lastName.length >= 2
                  ? "solid 1px #98E37E"
                  : isValidTwo
                  ? ""
                  : "solid 1px #EF5050",
            }}
          />
        </div>

        <div className="photoMailNum">
          <div className="photoUpload">
            <span className="photoSpan">პირადი ფოტოს ატვირთვა</span>
            <input
              type="file"
              id="fileInput"
              className="uploadPhotoInput"
              placeholder="awdads"
            />
            <label htmlFor="fileInput" id="fileLabel" accept="image/*">
              ატვირთვა
            </label>
          </div>
          <GlobalText
            label="ჩემ შესახებ (არასავალდებულო)"
            placeholder="ზოგადი ინფო შენ შესახებ"
            type="text"
            className="aboutMeText"
          />

          <GlobalInput
            placeholder="GigiAsatiani@redberry.ge"
            label="ელ.ფოსტა"
            span="უნდა მთავრდებოდეს @redberry.ge-ით"
            color="blue"
            type="email"
            style={{ borderColor: borderColor }}
            value={email}
            onBlur={handleMailBlur}
            onKeyUp={(e) => setEmail(e.target.value)}
          />

          <GlobalInput
            placeholder="+995 598 88 68 00"
            label="მობილურის ნომერი"
            span="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            color="blue"
            type="number"
            onBlur={validateNumber}
          />
        </div>
      </div>
    </div>
  );
};
