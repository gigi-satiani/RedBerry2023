import React from "react";
import styled from "styled-components";

export const GlobalInput = (props) => {
    return (
      <div className='mailParent'  >
        <label className='mailLabel'>{props.label}</label>
         <StyledInput placeholder={props.placeholder} type={props.type} style={props.style} />
       <span className='mailSpan'>{props.span}</span>
     </div>
    )
}

const StyledInput = styled.input `
   border: 1px solid #BCBCBC;
   background-color: #FFFFFF;
   border-radius: 4px;
   outline: none;
   padding: 15px 0 15px 10px;
`;