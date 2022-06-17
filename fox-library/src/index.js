import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {createGlobalStyle} from "styled-components";
import openSans400Woff from "./assets/fonts/open-sans-v29-latin_cyrillic-400.woff";
import openSans400Woff2 from "./assets/fonts/open-sans-v29-latin_cyrillic-400.woff2";
import openSans600Woff from "./assets/fonts/open-sans-v29-latin_cyrillic-600.woff";
import openSans600Woff2 from "./assets/fonts/open-sans-v29-latin_cyrillic-600.woff2";
import openSans700Woff from "./assets/fonts/open-sans-v29-latin_cyrillic-700.woff";
import openSans700Woff2 from "./assets/fonts/open-sans-v29-latin_cyrillic-700.woff2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  },
    @font-face {
        font-family: "openSans400Woff";
        src: url(${openSans400Woff}) format("truetype");
    }
    @font-face {
      font-family: "openSans400Woff2";  
      src: url(${openSans400Woff2}) format("truetype");
    }  
    @font-face {  
      font-family: "openSans600Woff";  
      src: url(${openSans600Woff}) format("truetype"); 
    }  
    @font-face {  
      font-family: "openSans600Woff2";  
      src: url(${openSans600Woff2}) format("truetype");  
    }  
    @font-face {  
      font-family: "openSans700Woff";  
      src: url(${openSans700Woff}) format("truetype");
    }
   @font-face {
     font-family: "openSans700Woff2";
     src: url(${openSans700Woff2}) format("truetype");
   }
  * {
    font-family: "Open Sans", sans-serif;
  }
`;
export default Global;

root.render(
    <>
        <Global/>
        <App />
    </>
);
