import React, { useState } from "react";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const PrivateInformation = (props) => {
  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="infoInputParent">
          <GlobalInput
            placeholder="გიგი"
            label="სახელი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
          />
          <GlobalInput
            placeholder="ასათიანი"
            label="გვარი"
            span="მინიმუმ 2 ასო, ქართული ასოები"
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
