import React from "react";
import styled from "styled-components";
import CloseFormCross from "../common/Cross";
import RedButton from "../common/RedButton";

const StyledLogInFormWrap = styled.div`
  background-color: #FFFFFF;
  padding: 32px 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 384px;
  position: relative;
  border-radius: 8px;
  border: 1px solid #B5B5B5;

  button {
    width: 100%;
    font-size: 18px;
    margin-top: 10px;
  }

  & div {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  
`;

const StyledLogInTitle = styled.p`
  color: #000000;
  font-size: 24px;
  line-height: 1.36;
  font-weight: 700;
  margin-bottom: 30px;
  margin-top: 6px;
`;

const StyledLogInLabel = styled.label`
  color: #616161;
  font-size: 16px;
  line-height: 1.36;
  font-weight: 400;
`;

const StyledLogInInput = styled.input`
  color: #000000;
  font-size: 18px;
  line-height: 1.36;
  font-weight: 400;
  width: 100%;
  padding: 9px 16px;
  border-radius: 8px;
  border: 1px solid #B5B5B5;
  margin: 7px 0;
  
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function LogInForm() {
    return (
        <StyledLogInFormWrap>
            <CloseFormCross/>
            <StyledLogInTitle>
                Log In to Fox Library
            </StyledLogInTitle>
            <form action="#">
                <StyledLogInLabel htmlFor="username">Username</StyledLogInLabel>
                <StyledLogInInput autocomplete="off" type="text" id="username"/>
                <StyledLogInLabel htmlFor="password">Password</StyledLogInLabel>
                <StyledLogInInput autocomplete="off" type="password" id="password"/>
                <RedButton type="submit" buttonText="Log in"/>
            </form>
        </StyledLogInFormWrap>
    );
}

export default LogInForm;
