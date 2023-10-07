import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";
import WebFont from 'webfontloader';

/* Load and cache the 'Raleway' font from Google Fonts using WebFont Loader. */

WebFont.load({
  google: {
    families: ['Raleway']
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
