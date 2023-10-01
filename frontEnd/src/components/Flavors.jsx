import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetQuote } from './GetQuote';
import '../styles/flavors.css';

/**
 * Flavors Component
 *
 * This component dynamically renders different flavors associated with a specific category path. It makes a GET
 * request to the backend at the path /flavors/:category. It then renders the flavors associated with that category.
 * 
 */

export const Flavors = () => {

  const { category } = useParams();
  const [flavors, setFlavors] = useState(null);

/**
 * This useEffect hook scrolls the page to the top of the page when the component mounts. this ensures the user does
 * not enter into a path with the page scrolled down.
 * 
 */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /** 
   *  
   *  This useEffect hook makes a GET request to the backend at the path /flavors/:category. It then renders the flavors
   *  associated with that category.
   * 
  */

  useEffect(() => {
    const fetchCategoryFlavor = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/flavors/${category}`);
        if (response.ok) {
          const flavorArray = await response.json();
          setFlavors(flavorArray);
        } else {
          console.log(`Failed to fetch categories. Status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryFlavor();
  }, []);

  return (
    <>
      <div className="categoryContainer">
        <div className="categoryFlavors">
          <h1 className="categoryHeader">All {category} Flavors</h1>
          {flavors &&
            flavors.map((flavor, index) => (
              <div className="individualFlavors" key={index}>
                <ul>
                  <li>{flavor.flavorName}</li>
                </ul>
              </div>
            ))}
        </div>
        <div className="quoteBox" id="flavorQuote">
          <GetQuote />
        </div>
      </div>
    </>
  );
};