import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetQuote } from '../GetQuote';
import "../../styles/flavorsCategory.css"
import food1 from "./food_1.jpg"
import food2 from "./food_2.jpg"
import food3 from "./food_3.jpg"

export const FlavorsCategory = () => {

  let categoryLink;

  let foodImages = [food1, food2, food3];

  function getRandomPicture() {
    let index = Math.floor(Math.random() * foodImages.length);
    return index;
  }

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, );

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
                  <div className='categoryItem' style={containerStyle}>     
                    <h3>
                      {category}
                    </h3>
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

