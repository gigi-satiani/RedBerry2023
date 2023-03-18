import React, { useState, useEffect } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalTextArea } from "../globals/globalTextArea";

export const PrivateInformation = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [textValue, setTextValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // name & lastname input validation
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

  useEffect(() => {
    const inputImageGood = document.getElementById("goodImg");
    const inputImageBad = document.getElementById("badImg");

    if (isValidOne && firstName.length >= 2) {
      inputImageGood.style.display = "block";
      inputImageBad.style.display = "none";
    } else if (firstName === "") {
      inputImageGood.style.display = "none";
      inputImageBad.style.display = "none";
    } else if (!isValidOne) {
      inputImageGood.style.display = "none";
      inputImageBad.style.display = "block";
    }
  }, [isValidOne, firstName]);

  useEffect(() => {
    const inputImageGood1 = document.querySelectorAll("#goodImg")[1];
    const inputImageBad1 = document.querySelectorAll("#badImg")[1];

    if (isValidTwo && lastName.length >= 2) {
      inputImageGood1.style.display = "block";
      inputImageBad1.style.display = "none";
    } else if (lastName === "") {
      inputImageGood1.style.display = "none";
      inputImageBad1.style.display = "none";
    } else if (!isValidTwo) {
      inputImageGood1.style.display = "none";
      inputImageBad1.style.display = "block";
    }
  }, [isValidTwo, lastName]);

  // mail input validation
  const handleMailBlur = (event) => {
    setEmail(event.target.value);

    if (email.length === 0) {
      setBorderColor("1px solid #bcbcbc");
    } else if (!email.endsWith("@redberry.ge")) {
      setBorderColor("2px solid #EF5050");
    } else {
      setBorderColor("2px solid #98E37E");
    }
  };

  useEffect(() => {
    const inputImageGood2 = document.querySelectorAll("#goodImg")[2];
    const inputImageBad2 = document.querySelectorAll("#badImg")[2];

    if (email.length === 0) {
      inputImageGood2.style.display = "none";
      inputImageBad2.style.display = "none";
    } else if (!email.endsWith("@redberry.ge")) {
      inputImageGood2.style.display = "none";
      inputImageBad2.style.display = "block";
    } else {
      inputImageGood2.style.display = "block";
      inputImageBad2.style.display = "none";
    }
  }, [email]);

  // phone input validation
  const regexPhoneNumber = /^(\+?995)(79\d{7}|5\d{8})$/;
  const validateNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const isValidNumber =
    phoneNumber === "" || regexPhoneNumber.test(phoneNumber);

  useEffect(() => {
    const inputImageGood3 = document.querySelectorAll("#goodImg")[3];
    const inputImageBad3 = document.querySelectorAll("#badImg")[3];

    if (isValidNumber && phoneNumber.length > 1) {
      inputImageGood3.style.display = "block";
      inputImageBad3.style.display = "none";
    } else if (phoneNumber === "") {
      inputImageGood3.style.display = "none";
      inputImageBad3.style.display = "none";
    } else {
      inputImageGood3.style.display = "none";
      inputImageBad3.style.display = "block";
    }
  }, [isValidNumber, phoneNumber]);

  // text area validation
  const regexText = /^[a-zA-Z0-9-^ა-ჰ]{0,}$/;
  const handleBlurer = (event) => {
    setTextValue(event.target.value);
  };
  const isValidThree = textValue === "" || regexText.test(textValue);

  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="infoInputParent">
          <GlobalInput
            placeholder="name"
            label="სახელი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            onKeyUp={handleKeyUpOne}
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
            placeholder="surname"
            label="გვარი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
            onKeyUp={handleKeyUpTwo}
            lastName={props.lastName}
            style={{
              outline:
                isValidTwo && lastName.length >= 2
                  ? "solid 2px #98E37E"
                  : isValidTwo
                  ? ""
                  : "solid 2px #EF5050",
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
              placeholder=""
            />
            <label htmlFor="fileInput" id="fileLabel" accept="image/*">
              ატვირთვა
            </label>
          </div>
          <GlobalTextArea
            label="ჩემ შესახებ (არასავალდებულო)"
            placeholder="ზოგადი ინფო შენს შესახებ"
            type="text"
            className="aboutMeText"
            onKeyUp={handleBlurer}
            style={{
              outline:
                isValidThree && textValue.length >= 1
                  ? "solid 2px #98E37E"
                  : isValidThree,
            }}
          />

          <GlobalInput
            placeholder="e.g john@redberry.ge"
            label="ელ.ფოსტა"
            span="უნდა მთავრდებოდეს @redberry.ge-ით"
            color="blue"
            type="email"
            style={{ outline: borderColor }}
            value={email}
            onBlur={handleMailBlur}
            onKeyUp={(e) => setEmail(e.target.value)}
          />

          <GlobalInput
            placeholder="+995 xxx xx xx xx"
            label="მობილურის ნომერი"
            span="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            color="blue"
            type="number"
            onKeyUp={validateNumber}
            style={{
              outline:
                isValidNumber && phoneNumber.length > 1
                  ? "solid 2px #98E37E"
                  : isValidNumber
                  ? ""
                  : "solid 2px #EF5050",
            }}
          />
        </div>
      </div>
    </div>
  );
};
