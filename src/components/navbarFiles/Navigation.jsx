import React from 'react';
import "./../../styles/navbar.css"
import logo from "./logo.png"
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navigation = () => {
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
          <li className='hoverLink'><Link>About us</Link></li>
          <li className='hoverLink'><Link>Contact Us</Link></li>
        </ul>
      </nav>
      </div>
      
      
  )
}

