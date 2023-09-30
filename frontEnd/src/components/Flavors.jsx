import React, { useState, useEffect } from 'react'
import "../styles/flavors.css"
import { GetQuote } from './GetQuote'
import { useParams } from 'react-router-dom';

export const Flavors = () => {

  const { category } = useParams();
  const [flavors, setFlavors] = useState(null)

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

    fetchCategoryFlavor()
  }, []);
  
  return (
    <>
      <div className='categoryContainer'>
        <div className="categoryFlavors">
        <h1 className="categoryHeader">
          All {category} Flavors
        </h1>
          {flavors && flavors.map((flavor, index) => (
            <div className="individualFlavors" key={index}> 
              <ul>
                <li>
                  {flavor.flavorName}
                </li>
              </ul>
            </div>
          ))}
        </div> 
        <div className="quoteBox">
          <GetQuote />
        </div>
      </div> 
    </>
  );
}

