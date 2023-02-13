import React from "react";

export const MyHeader = (props) => {
  return (
    <div className="header">
      <h2 className="pageName">{props.h2}</h2>
      <span className="infoSpan">{props.span}</span>
    </div>
  );
};
