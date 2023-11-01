import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";
import { CategoriesProvider } from './contexts/categoriesContext';
import WebFont from 'webfontloader';

/* Load and cache the 'Raleway' font from Google Fonts using WebFont Loader. */

WebFont.load({
  google: {
    families: ['Raleway']
  },
});

//We wrap the App component in the CategoriesProvider from the 
//contexts folder so we can access this context from any component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>
);
