import React from "react";
import styled from "styled-components";

const StyledHeaderBtns = styled.ul`
  display: flex;
  list-style-type: none;
  
  li {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.362;
    cursor: pointer;
    color: #616161;
  }

  li:not(:last-child) {
    margin-right: 48px;
  }
`;

function HeaderButtons() {
    return (
        <StyledHeaderBtns>
            <li>Log in</li>
            <li>Sign up</li>
        </StyledHeaderBtns>
    );
}

export default HeaderButtons;
