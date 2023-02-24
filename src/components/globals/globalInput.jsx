import React from "react";
import styled from "styled-components";

export const GlobalInput = (props) => {
  return (
    <div className="mailParent">
      <label className="mailLabel">{props.label}</label>
      <div style={{ display: "flex", position: "relative", width: "100%" }}>
        <StyledInput
          placeholder={props.placeholder}
          type={props.type}
          className={props.className}
          style={props.style}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onKeyUp}
        />
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
