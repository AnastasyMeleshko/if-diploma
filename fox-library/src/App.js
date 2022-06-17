import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem; 
  color: black;
`;

function App() {
    return (
        <AppWrapper>
            <button>Click me!</button>
        </AppWrapper>
    );
}

export default App;
