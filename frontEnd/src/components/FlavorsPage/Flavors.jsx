import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetQuote } from '../GetQuote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import '../../styles/flavors.css';

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

  const [arrayDisplay, setArrayDisplay] = useState(null);

  /**
   *  Logic for search bar. We have an arrayDisplay and a flavors
   *  array because we want to keep the original array intact,
   *  as the filter method completely removes elements from the
   *  array.
   * 
   * */

  function handleSearch(e){
    var seachVal = e.target.value.toLowerCase();
    var newArr = flavors.filter(flavor => flavor.flavorName.toLowerCase().indexOf(seachVal) > -1)
    setArrayDisplay(newArr);
  }

  /** 
   *  
   *  This useEffect hook makes a GET request to the backend at the path /flavors/:category. It then renders the flavors
   *  associated with that category.
   * 
  */

  useEffect(() => {
    setFlavors(null);
    const fetchCategoryFlavor = async () => {
      try {
        const response = await fetch(`https://mern-flavor-app.onrender.com/api/flavors/${category}`);
        if (response.ok) {
          const flavorArray = await response.json();
          setFlavors(flavorArray);
          setArrayDisplay(flavorArray);
        } else {
          console.log(`Failed to fetch categories. Status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryFlavor();
  }, [category] );

  /**
 * This useEffect hook scrolls the page to the top of the page when the component mounts. this ensures the user does
 * not enter into a path with the page scrolled down.
 * Uses set timeout to prevent unexpected behavior with
 * the render ordering.
 */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <div className="categoryContainer">
        <div className="categoryFlavors">
          <div className="backArrow">
            <Link to="/categories" aria-label="Return to all categories page">
              <ArrowBackIcon />
            </Link>
          </div>
          <h1 className="categoryHeader">All {category} Flavors</h1>
          <input type="text" placeholder="Search for flavors" className="searchBar" onChange={handleSearch}/>
          {!flavors && (
            <div className="spinner">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {flavors &&
            arrayDisplay.map((flavor, index) => (
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
