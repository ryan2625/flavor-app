import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetQuote } from '../GetQuote';
import '../../styles/flavorsCategory.css';
import food1 from './food_1.jpg';
import food2 from './food_2.jpg';
import food3 from './food_3.jpg';

/**
 * FlavorsCategory Component
 *
 * This component represents the flavorsCategory page that dynamically retrieves
 * all different categories from the database. It also provides a random picture for each category.
 * 
 */

export const FlavorsCategory = () => {

  let categoryLink;

  let foodImages = [food1, food2, food3];

  /*Picks one of the three images I included in the files at random. May not match up with the right category but it's just a placeholder*/

  function getRandomPicture() {
    let index = Math.floor(Math.random() * foodImages.length);
    return index;
  }

  const [categories, setCategories] = useState(null);

  /**
 * This useEffect hook scrolls the page to the top of the page when the component mounts. this ensures the user does
 * not enter into a route with the page scrolled down.
 */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * 
   * This useEffect hook makes a GET request to the backend at the path /flavors/Categories. It then sets the categoriesArray 
   * to be rendered by the component. Note: The web app only makes GET requests and the database will not be receiving anymore
   * flavor or flavor category data. This is why this useEffect hook and others do not have a dependency array.
   * 
   */

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
    <>
      <div className="displayCategoryContainer">
        <div className="flavorsCategory">

          {/*Dynamically render the categories and set the link to the corresponding flavors page*/}
          
          {categories &&
            categories.map((category) => {
              categoryLink = `/flavors/${category}`;
              let containerStyle = {
                backgroundImage: `url(${foodImages[getRandomPicture()]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              };
              return (
                <Link key={category} to={categoryLink}>
                  <div className="categoryItem" style={containerStyle}>
                    <h3>{category}</h3>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="quoteBox" id="categoryQuote">
          <GetQuote />
        </div>
      </div>
    </>
  );
};
