/**
 * Flavors App
 *
 * A website that dynamically displays different flavors based on
 * their category. This app is built using the MERN stack and 
 * holds both a user's email info in the database as well as
 * a list of flavor and category objects. This app was created over
 * the course of 3 days for NLU's (National Louis University) coding challenge.
 *
 * Author: Ryan Freas
 * Created: 9/27/23
 *
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { FlavorsCategory } from './components/flavorCategoryFiles/FlavorsCategory';
import { Navigation } from './components/navbarFiles/Navigation';
import { Footer } from './components/footerFiles/Footer';
import { Flavors } from './components/Flavors';

/*
 * App Component - Main Application Component with Routes
 *
 * This component serves as the main entry point of the web app and defines the routing structure
 * using React Router. It also manages the mobile menu status and 
 * receives the status from the Navigation component on whether to display the mobile menu.
 * or not. It passes the status state as props.
 * 
 * This component also contains the navigation and footer outside of the routes
 * so that they are always rendered on the page.
 * 
 */

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className={status ? 'setMobileMenu' : ''}>
      <BrowserRouter>
        <Navigation status={status} setStatus={setStatus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<FlavorsCategory />} />
          <Route path="flavors/:category" element={<Flavors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;