import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`

  *{
    padding: 0;
    margin: 0; 
    list-style: none;
    text-transform: none;
    box-sizing: border-box;
  }

  .App{
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <>
    <EstiloGlobal />
    <App />
 </>
  //</React.StrictMode>
);


