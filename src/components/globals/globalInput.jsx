import React from "react";
import styled from "styled-components";

export const GlobalInput = (props) => {
  return (
    <div className="mailParent">
      <label className="mailLabel">{props.label}</label>
      <StyledInput
        placeholder={props.placeholder}
        type={props.type}
        style={props.style}
        className={props.className}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onKeyUp}
      />
      <span className="mailSpan">{props.span}</span>
    </div>
  );
};

const StyledInput = styled.input`
  border: 1px solid #bcbcbc;
  background-color: #ffffff;
  border-radius: 4px;
  outline: none;
  padding: 15px 0 15px 10px;
  font-size: 16px;
`;
