import React from 'react';
import { useState, useEffect } from 'react';
import "./../../styles/navbar.css"
import logo from "./logo.png"
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Menu } from '@mui/material';

export const Navigation = ({status, setStatus}) => {

  let link;

  function handleBurgerClick() {
    setStatus(!status);
    console.log("Setting status...")
  }

  const [categories, setCategories] = useState(null)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/flavors/Categories');
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
    <div className="browserMobileNav">
      <div className="navContainer">
        <Link id='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <nav>
          <ul>
            <li className='hoverLink'>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>    
              <NavDropdown title="Capabilities">
                <NavDropdown.Item href="design">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Item href="production">
                  Production
                </NavDropdown.Item>
                <NavDropdown.Item href="certification">
                  Certification
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Flavors">
                <NavDropdown.Item href="/categories">
                  All Categories
                </NavDropdown.Item>
                {categories && categories.map((category) => (
                  link = `/flavors/${category}`,
                  <NavDropdown.Item href={link} key={category}>
                    {category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </li>
            <li className='hoverLink'>
              <Link to="/">
                About us
              </Link>
            </li>
            <li className='hoverLink'>
              <Link to={{ pathname: '/', search: '?source=contact' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      
      <div className="mobileContainer">
        <Link id='logoLink' to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="menuStatus">
          <div className={status ? "burgerIcon closed" : "burgerIcon  open"} onClick={handleBurgerClick}>
            <MenuIcon />
          </div>
          <div className={status ? "burgerIcon open" : "burgerIcon closed"} onClick={handleBurgerClick}>
            <CloseIcon />
          </div>
          <div className={status ? "openMenu" : "closed"}>
            <nav>
              <ul className='mobileNavUl'>
                <li >
                  <Link to="/" onClick={handleBurgerClick}>
                    Home
                  </Link>
                </li>
                <li>    
                  <NavDropdown title="Capabilities">
                    <NavDropdown.Item href="design">
                      Design
                    </NavDropdown.Item>
                    <NavDropdown.Item href="production">
                      Production
                    </NavDropdown.Item>
                    <NavDropdown.Item href="certification">
                      Certification
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Flavors">
                    <NavDropdown.Item href="/categories">
                      All Categories
                    </NavDropdown.Item>
                    {categories && categories.map((category) => (
                      link = `/flavors/${category}`,
                      <NavDropdown.Item href={link} key={category} onClick={handleBurgerClick}>
                        {category}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </li>
                <li>
                  <Link to="/" onClick={handleBurgerClick}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: '/', search: '?source=contact' }} onClick={handleBurgerClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
