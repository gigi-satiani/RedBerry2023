import React from "react";
import "../cssFiles/main.css";

export const GlobalTextArea = (props) => {
  return (
    <div className="aboutMe">
      <label className="aboutMeLabel">{props.label}</label>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
      />
    </div>
  );
};
