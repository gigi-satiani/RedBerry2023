import "./privateInfo.css";
import caret from "../symbols/caret.png";
import React, { useState } from "react";
import { MyHeader } from "./globals/header";
import { TotalInfo } from "./globals/totalInfo";
import { PrivateInformation } from "./pages/privateInformation";
import { Experience } from "./pages/experience";
import { Education } from "./pages/education";

const titleName = { 1: "პირადი ინფო", 2: "გამოცდილება", 3: "განათლება" };

const experienceDefaultState = {
  position: "",
  employer: "",
  startDate: new Date(),
  endDate: new Date(),
  experienceDescription: "",
};

export default function FormRegistration() {
  const [registrationForm, setRegistrationForm] = useState({
    personalInfo: {},
    experienceInfo: [experienceDefaultState],
  });

  const handlePersonalInfosChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    setRegistrationForm((previousForm) => {
      return {
        ...previousForm,
        personalInfo: {
          ...previousForm.personalInfo,
          [name]: value,
        },
      };
    });
  };

  const handleAddNewExperience = () => {
    setRegistrationForm((previousForm) => {
      return {
        ...previousForm,
        experienceInfo: [
          ...previousForm.experienceInfo,
          experienceDefaultState,
        ],
      };
    });
  };

  const [tab, setTab] = useState(1);

  const handleBackPage = () => {
    setTab((backTab) => {
      return backTab === 1 ? backTab : backTab - 1;
    });
  };

  const handleNextPage = () => {
    setTab((backTab) => {
      return backTab === 3 ? backTab : backTab + 1;
    });
  };

  return (
    <div className="main">
      <div className="infoParentMain">
        <div className="headerParent">
          <figure className="resetParent">
            <img src={caret} className="backReset" />
          </figure>
          <MyHeader span={`${tab}/3`} h2={titleName[tab]} />
        </div>

        <form className="pageInfo">
          {tab === 1 ? (
            <PrivateInformation tab={tab} />
          ) : tab === 2 ? (
            <Experience />
          ) : tab === 3 ? (
            <Education />
          ) : null}
        </form>

        <div className="btnParent">
          {tab > 1 && (
            <button className="pervPageBtn" onClick={handleBackPage}>
              ᲣᲙᲐᲜ
            </button>
          )}
          <button className="nextPageBtn" onClick={handleNextPage}>
            ᲨᲔᲛᲓᲔᲒᲘ
          </button>
        </div>
      </div>

      <div className="infoChild">
        <TotalInfo />
      </div>
    </div>
  );
}
