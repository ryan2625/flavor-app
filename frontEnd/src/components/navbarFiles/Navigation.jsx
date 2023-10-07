import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './logo.png';
import './../../styles/navbar.css';

/**
 * Navigation Component
 *
 * This component represents the navigation bar and manages the mobile menu's status.
 * It can communicate with App.js to inform whether the mobile menu is open or closed.
 * It also fetches the categories from the backend and renders them in the navigation bar
 * dropdown and mobile menu dropdown. This component could be optimized and refactored
 * futher.
 * 
 */
export const Navigation = ({ status, setStatus }) => {
  
  /*Defining a variable to hold the href in the nav drop down menu*/

  let link;

  /* 
  *This function sets the status state, which determines whether the mobile menu is open or closed.
  */

  function handleBurgerClick() {
    setStatus(!status);
  }

  /**
   * This use effect fetches all the categories from the backend and saves them in the categories state,
   * then dynamically renders them in the drop down menu.
   */

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://mern-flavor-app.onrender.com/api/flavors/Categories');
        if (response.ok) {
          const categoriesArray = await response.json();
          setCategories(categoriesArray);
        } else {
          console.log(`Failed to fetch categories. Status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return ( 
    /*Desktop navbar*/
    <div className="browserMobileNav">
      <div className="navContainer">
        <Link className='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <nav>
          <ul>
            <li className="hoverLink">
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavDropdown title="Flavors">

              {/*Here we dynamically render the flavor categories, and set each category with its respective link*/}

                <NavDropdown.Item href="/categories" rel="prefetch">All Categories</NavDropdown.Item>
                {categories &&
                  categories.map(
                    (category) => (
                      (link = `/flavors/${category}`),
                      (
                        <NavDropdown.Item href={link} key={category} rel="prefetch">
                          {category}
                        </NavDropdown.Item>
                      )
                    )
                  )}
              </NavDropdown>
            </li>
            <li className="hoverLink">

            {/*This link saves the search params. This is used to automatically scroll to the contact component on the home page. See: Home page*/}

              <Link to={{ pathname: '/', search: '?source=contact' }}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navbar version... */}

      <div className="mobileContainer">
        <Link className='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="menuStatus">
          <div
            className={status ? 'burgerIcon closed' : 'burgerIcon open'}
            onClick={handleBurgerClick}
          >
            <MenuIcon />
          </div>
          <div
            className={status ? 'burgerIcon open' : 'burgerIcon closed'}
            onClick={handleBurgerClick}
          >
            <CloseIcon />
          </div>
          <div className={status ? 'openMenu' : 'closed'}>
            <nav>
              <ul className="mobileNavUl">
                <li>
                  <Link to="/" onClick={handleBurgerClick}>
                    Home
                  </Link>
                </li>
                <li>
                <div className="dropCategory">
                  <NavDropdown title="Flavors" >
                    <NavDropdown.Item href="/categories" rel="prefetch">All Categories</NavDropdown.Item>
                    {categories &&
                      categories.map(
                        (category) => (
                          (link = `/flavors/${category}`),
                          (
                            <NavDropdown.Item
                              href={link}
                              key={category}
                              onClick={handleBurgerClick}
                              rel="prefetch"
                            >
                              {category}
                            </NavDropdown.Item>
                          )
                        )
                      )}
                    </NavDropdown>
                </div>
                </li>
                <li>

                  <Link
                    to={{ pathname: '/', search: '?source=contact' }}
                    onClick={handleBurgerClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
