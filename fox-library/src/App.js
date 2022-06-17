import React from "react";
import styled from "styled-components";
import Header from "./components/initialPage/header";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px 105px;
  margin: 0 auto;
  color: black;
`;

function App() {
    return (
        <StyledApp>
            <Header/>
        </StyledApp>
    );
}

export default App;
