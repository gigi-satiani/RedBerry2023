import React from "react";
import logo from "../../images/LOGO.png";
import "../cssFiles/home.css";

export const TotalInfoPart = () => {
  return (
    <div className="endParentDiv">
      <div className="logoBerryParent"></div>
      <div className="profileBtnParent">
        <button className="newProfileBtn" to="formRegistration">
          გმადლობთ მონაწილეობისათვის
        </button>
      </div>
    </div>
  );
};
