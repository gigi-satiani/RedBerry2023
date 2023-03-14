import caret from "../../symbols/caret.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MyHeader } from "../globals/header";
import { PrivateInformation } from "./privateInformation";
import { Experience } from "./experience";
import { Education } from "./education";
import { TotalInfoPart } from "../globals/totalInfoComponent";
import "../cssFiles/main.css";

const titleName = {
  1: "პირადი ინფო",
  2: "გამოცდილება",
  3: "განათლება",
  4: "დასრულება",
};

export default function FormRegistration() {
  // from page to page
  const [tab, setTab] = useState(1);

  const handleBackPage = () => {
    setTab((backTab) => {
      return backTab === 1 ? backTab : backTab - 1;
    });
  };

  const handleNextPage = () => {
    setTab((backTab) => {
      return backTab === 4 ? backTab : backTab + 1;
    });
  };

  console.log(tab, "tab");
  return (
    <div className="main">
      <div className="infoParentMain">
        <div className="headerParent">
          <figure className="resetParent">
            <Link to="/">
              <img alt="" src={caret} className="backReset" />
            </Link>
          </figure>
          <MyHeader span={`${tab}/4`} h2={titleName[tab]} />
        </div>

        <form className="pageInfo">
          {tab === 1 ? (
            <PrivateInformation tab={tab} />
          ) : tab === 2 ? (
            <Experience />
          ) : tab === 3 ? (
            <Education />
          ) : tab === 4 ? (
            <TotalInfoPart />
          ) : null}
        </form>

        <div className="btnParent">
          {tab > 1 && (
            <button
              type="button"
              className="pervPageBtn"
              onClick={handleBackPage}
            >
              ᲣᲙᲐᲜ
            </button>
          )}
          <button
            type="button"
            className="nextPageBtn"
            onClick={handleNextPage}
            style={{ display: tab === 4 ? "none" : "block" }}
          >
            {tab === 3 ? "ᲓᲐᲡᲠᲣᲚᲔᲑᲐ" : "ᲨᲔᲛᲓᲔᲒᲘ"}
          </button>
        </div>
      </div>
    </div>
  );
}
