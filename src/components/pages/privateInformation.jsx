import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const PrivateInformation = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("#bcbcbc");

  // name & lastname input validations

  let regex = new RegExp(/^[ა-ჰ]{3,}$/g);

  const handleBlur = (event) => {
    setFirstName(event.target.value);
  };
  const handleBlurr = (event) => {
    setLasttName(event.target.value);
  };

  const isValidOne = firstName === "" || regex.test(firstName);
  const isValidTwo = lastName === "" || regex.test(lastName);
  // mail input validations

  const handleMailBlur = (event) => {
    const emailAddress = event.target.value;
    console.log(event.target.value);
    if (!validateEmail(emailAddress)) {
      setBorderColor("red");
    } else {
      setBorderColor("");
    }
  };

  const validateEmail = (email) => {
    if (email.endsWith("@redberry.ge")) {
      return true;
    }
    return false;
  };

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="infoInputParent">
          <GlobalInput
            placeholder="გიგი"
            label="სახელი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            onKeyUp={handleBlur}
            firstName={props.firstName}
            style={{
              outline:
                isValidOne && firstName.length > 2
                  ? "solid 1px green" // <img src="asdasda" />
                  : isValidOne
                  ? ""
                  : "solid 1px red",
            }}
          />
          <GlobalInput
            placeholder="ასათიანი"
            label="გვარი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            lastName={props.lastName}
            onKeyUp={handleBlurr}
            style={{ borderColor: isValidTwo ? "" : "red" }}
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
          />
        </div>
      </div>
    </div>
  );
};
