import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../contexts/categoriesContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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

  /* Grabbing the context for the categories*/

  const { categories, setCategories } = useCategories();

  /*Defining a variable to hold the status of the server*/

  const [serverAlert, setServerAlert] = useState(true);
  
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
   * Note: The web app only makes GET requests and the database will not be receiving anymore
   * flavor or flavor category data. This is why this useEffect hook and others have an empty dependency array.
   */
  
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
    console.log(serverAlert)
    fetchCategories();
  }, []);

  /**
   * This useEffect checks to see if the backEnd is woken up. If it
   * still asleep, the alert will stay red and tell the user that
   * the server is down. If the server is up, the alert will turn 
   * green.
   */

  useEffect(() => {
    if (!categories){
      setServerAlert(true);
    } else{
      setServerAlert(false);
    }
  }
  , [categories]);

  return ( 
    /*Desktop navbar*/
    <div className="browserMobileNav">
      <div className="navContainer">
        <Link className='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <nav>
          <ul>
            <li className={serverAlert ? 'serverAlertIcon red' : "serverAlertIcon green"}>
              <WarningAmberIcon />
            </li>
            <li className="hoverLink">
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavDropdown title="Flavors">
                {/* Here we dynamically render the flavor categories, and set each category with its respective link */
                }
                <NavDropdown.Item  as={Link} rel="prefetch" to="/categories">    
                    All Categories
                </NavDropdown.Item>
                {categories &&
                  categories.map(
                    (category) => {
                      let link = `/flavors/${category}`;
                      return(
            
                           <NavDropdown.Item  
                           as={Link} 
                           rel="prefetch" 
                           to={link}
                           key={category}>
                           {category}
                            </NavDropdown.Item>
                      )
                       } )}
              </NavDropdown>
            </li>
            <li className="hoverLink">
              {/* This link saves the search params. This is used to automatically scroll to the contact component on the home page. See: Home page */
              }
              <Link to={{ pathname: '/', search: '?source=contact' }}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navbar version... */
      }
      <div className="mobileContainer">
        <Link className='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="menuStatus">
          <li className={serverAlert ? 'serverAlertIcon red' : "serverAlertIcon green"} id="mobileAlert">
            <WarningAmberIcon />
          </li>
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
                        <Link 
                        to="/categories"
                        rel="prefetch"
                        onClick={handleBurgerClick}>
                          All Categories
                        </Link>
                      {categories &&
                        categories.map(
                          (category) => (
                            (link = `/flavors/${category}`),
                            (
                                <Link 
                                to={link}
                                key={category}
                                onClick={handleBurgerClick}
                                rel="prefetch">
                                   {category}
                                </Link>
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
