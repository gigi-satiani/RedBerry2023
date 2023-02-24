import React from "react";
import "../cssFiles/main.css";

export const GlobalTextArea = (props) => {
  return (
    <div className="aboutMe">
      <label className="aboutMeLabel">{props.label}</label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
        style={props.style}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onKeyUp}
      />
    </div>
  );
};
