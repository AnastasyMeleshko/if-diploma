import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import SearchInput from "./SearchInput/SearchInput";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
    return (
        <StyledHeader>
            <HeaderLogo/>
            <SearchInput/>
            <HeaderButtons/>
        </StyledHeader>
    );
}

export default Header;
