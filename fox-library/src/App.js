import React from "react";
import styled from "styled-components";
import InitialPage from "./components/initialPage/initialPage";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px 105px;
  margin: 0 auto;
  color: black;
  background-color: #FFFFFF;
`;

function App() {
    return (
        <StyledApp>
            <InitialPage/>
        </StyledApp>
    );
}

export default App;
