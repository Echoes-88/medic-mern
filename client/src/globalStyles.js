import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 3rem 0;
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
    background-color:white;
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
    min-width:2rem;
    padding:0.5rem 1rem;
  };
  .logo {
    width: 117px;
    height: 20px;
    object-fit: contain;
    object-position: center center;
  };
  .strong {
    font-weight: bold;
  }
`;
 
export default GlobalStyle;