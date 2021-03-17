import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  };
  button {
    background-color: #77fdc8;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 1em;
    padding: 0.3rem 1rem;
    letter-spacing: 0.05rem;
    border: 1px dashed;
  };
  input {
    background-color:#e1e1e1;
  };
  label {
    display:block;
    font-weight: bold;
  };
  table {
    margin: auto;
  };
  td {
    border: 1px solid black;
  }
`;
 
export default GlobalStyle;