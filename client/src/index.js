import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Overmind
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'

// Styled component
import GlobalStyle from './globalStyles';

const overmind = createOvermind(config)

ReactDOM.render(
  <Provider value={overmind}>
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
