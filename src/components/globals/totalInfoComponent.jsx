import React from "react";

export const TotalInfoPart = (props) => {
  return (
    <div className="parentDiv">
      <div className="liveAboutParent">
        <h4 className="liveAboutHeading">{props.h4}</h4>
        <div className="dateAndJobFlex">
          <label className="jobDiscription">{props.label}</label>
          <span className="dateAndTime">{props.span}</span>
        </div>
        <p className="liveAbout">{props.p}</p>
      </div>
    </div>
  );
};
