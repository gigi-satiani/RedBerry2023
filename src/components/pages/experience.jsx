import "../privateInfo.css";
import React, { useState } from "react";
import caret from "../../symbols/caret.png";
import { TotalInfo } from "../globals/totalInfo";
import { MyHeader } from "../globals/header";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from "../globals/globalTextArea";

export const Experience = (props) => {
  return (
    <div className="mainPage">
      <div className="infoParent">
        <div className="pageInfoTwo">
          <GlobalInput
            placeholder="დეველოპერი, დიზაინერი, ა.შ"
            label="თანამდებობა"
            span="მინიმუმ 2 სიმბოლო"
          />
          <GlobalInput
            placeholder="დამსაქმებელი"
            label="დამსაქმებელი"
            span="მინიმუმ 2 სიმბოლო"
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
