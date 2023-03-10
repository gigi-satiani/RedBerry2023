import React, { useState } from "react";
import styled from "styled-components";
import bad from "../../symbols/badInput.png";
import good from "../../symbols/goodInput.png";
import "../cssFiles/forGlobalInput.css";

export const GlobalInput = (props) => {
  const [firstName, setFirstName] = useState("");

  let regex = new RegExp(/^[ა-ჰ]{2,}$/g);

  const handleKeyUpOne = (event) => {
    setFirstName(event.target.value);
  };
  const isValidOne = firstName === "" || regex.test(firstName);

  return (
    <div className="mailParent">
      <label className="mailLabel">{props.label}</label>
      <div className="inputParentDiv">
        <StyledInput
          placeholder={props.placeholder}
          type={props.type}
          className={props.className}
          style={props.style}
          // value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyUp={handleKeyUpOne}
        />
        <figure className="inputErrorFigure">
          <img
            className="inputAccepted"
            src={good}
            style={{
              display:
                isValidOne && firstName.length >= 2
                  ? "block"
                  : isValidOne
                  ? ""
                  : "none",
            }}
          />
          <img
            className="inputDiclined"
            src={bad}
            style={{
              display: !isValidOne ? "block" : !isValidOne ? "" : "none",
            }}
          />
        </figure>
      </div>
      <span className="mailSpan">{props.span}</span>
    </div>
  );
};

const StyledInput = styled.input`
  border: 1px solid #bcbcbc;
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  outline: none;
  padding: 15px 0 15px 10px;
  font-size: 16px;
  position: relative;
  font-family: "HelveticaNeue";
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
