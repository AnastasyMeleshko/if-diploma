import React from "react";
import styled from "styled-components";
import Header from "./header";
import MainContent from "./main";

const StyledInitialPage = styled.div`

`;

function InitialPage() {
    return (
        <StyledInitialPage>
            <Header/>
            <MainContent/>
        </StyledInitialPage>
    );
}

export default InitialPage;
