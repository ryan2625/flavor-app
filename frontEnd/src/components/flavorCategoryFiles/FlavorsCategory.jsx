import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetQuote } from '../GetQuote';
import { useCategories } from '../../contexts/categoriesContext';
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

  const [message, setMessage] = useState(null);

  const { categories } = useCategories();

  let foodImages = [food1, food2, food3];

  /*Picks one of the three images I included in the files at random. May not match up with the right category but it's just a placeholder*/

  function getRandomPicture() {
    let index = Math.floor(Math.random() * foodImages.length);
    return index;
  }

  /**
   * If the server hasn't retrieved the category data yet, then 
   * a message telling the user to wait for the server to wake up.
   * is displayed.
   */

  function checkMessage(){
    if (!categories){
      setMessage("The server is waking up, please wait a moment for the categories to load...");
    } else{
      setMessage(null);
    }
  }

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

    /**
     *  
     *  This use effect sets the message only if the cateogories are
     *  null and 1.5 seconds have passed. It displays the message
     *  only after 1.5 seconds to prevent the message from displaying
     *  when the server is online but the categories have not been
     *  retrieved yet.
     * 
     */


    useEffect(() => {
      let timer;
      if (!categories) {
        timer = setTimeout(checkMessage, 1500);
      } else {
        setMessage(null); 
      }
      return () => clearTimeout(timer); 
    }, [categories]);
  

  return (
    <>
      <div className="displayCategoryContainer">
        <div className="flavorsCategory">
        <h1>
          All Categories
        </h1>
        <h3>
          {message}
        </h3>
          {/*Dynamically render the categories and set the link to the corresponding flavors page*/}
          {categories &&
            categories.map((category) => {
              let categoryLink = `/flavors/${category}`;
              let containerStyle = {
                backgroundImage: `url(${foodImages[getRandomPicture()]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              };
              return (
                <Link key={category} to={categoryLink} className='flavor-link'>
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
