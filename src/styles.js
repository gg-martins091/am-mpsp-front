import styled, { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;


export const IconedInput = styled.div`
  position: relative;
  width: 100%;
  i {
    color: #CCC;
    display: block;
    font-size: 15px;
    height: 16px;
    margin: 10px 5px 8px 10px;
    position: absolute;
    text-align: center;
    width: 16px;
  }
  input {
    padding-left: 30px!important;
  }
`