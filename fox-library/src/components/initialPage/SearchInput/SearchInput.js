import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.div`
  padding: 13px 16px;
  border: 2px solid #FF5D4F;
  width: 500px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  & form {
    width: 92%;
  }

  & input {
    width: 100%;
    outline: none;
    border: none;
  }

  & input::placeholder {
    color: #B5B5B5;
    font-size: 16px;
    line-height: 1.375;
  }
  
  & svg {
    fill: #B5B5B5;
    margin-right: 16px;
  }`;

function SearchInput() {
    return (
        <StyledSearchInput>
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"/>
            </svg>
            <form>
                <input
                    autoComplete="off"
                    type="text"
                    id="header-search"
                    placeholder="Search by author, title, name"/>
            </form>
        </StyledSearchInput>
    );
}

export default SearchInput;
