import React from "react";
import styled from "styled-components";
import Header from "./header";
import MainContent from "./main";
import SignUpForm from "../singUpForm/signUpForm";

const StyledInitialPage = styled.div`

`;

function InitialPage() {
    return (
        <StyledInitialPage>
            <Header/>
            <MainContent/>
            <SignUpForm/>
        </StyledInitialPage>
    );
}

export default InitialPage;
