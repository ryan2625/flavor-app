import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetQuote } from '../GetQuote';
import '../../styles/flavorsCategory.css';
import food1 from './food_1.avif';
import food2 from './food_2.avif';
import food3 from './food_3.avif';

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
   * 
   * This useEffect hook makes a GET request to the backend at the path /flavors/Categories. It then sets the categoriesArray 
   * to be rendered by the component. Note: The web app only makes GET requests and the database will not be receiving anymore
   * flavor or flavor category data. This is why this useEffect hook and others have an empty dependency array.
   * 
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
    fetchCategories();
  }, []);

    /**
 * This useEffect hook scrolls the page to the top of the page when the component mounts. this ensures the user does not enter into a route with the page scrolled down.
 * 
 *   Uses set timeout to prevent unexpected behavior    *  with the render ordering.
 */

    useEffect(() => {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 150);
      
    }, []);
  

  return (
    <>
      <div className="displayCategoryContainer">
        <div className="flavorsCategory">
        <h1>
          All Categories
        </h1>
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
