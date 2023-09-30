import React from 'react';
import { useState, useEffect } from 'react';
import "./../../styles/navbar.css"
import logo from "./logo.png"
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navigation = () => {

  let link;

  const [categories, setCategories] = useState(null)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/flavors/Categories');
        if (response.ok) {
          const categoriesArray = await response.json();
          setCategories(categoriesArray);
          console.log("Value: " + categoriesArray);
        } else {
          console.log(`Failed to fetch categories. Status: ${response.status}`);
        }
        console.log("Use effect running");
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchCategories(); 
  }, []);

  return (
    
    <div className="navContainer">
      <Link id='logoLink' to="/">
        <img src={logo} alt="Company Logo" />
      </Link>
      <nav>
        <ul>
          <li>    
            <NavDropdown title="Capabilities">
              <NavDropdown.Item href="">
                Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Production
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Certification
              </NavDropdown.Item>
            </NavDropdown>

          </li>
          <li>
          <NavDropdown title="Flavors">
              {categories && categories.map((category) => (
                link = `/flavors/${category}`,
                <NavDropdown.Item href={link}>
                  {category}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
          </li>
          <li className='hoverLink'><Link>About us</Link></li>
          <li className='hoverLink'><Link>Contact Us</Link></li>
        </ul>
      </nav>
      </div>
      
      
  )
}

