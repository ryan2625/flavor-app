import React from 'react'
import "../../styles/reviews.css"
import MySvg from "./triangles.svg"

export const Reviews = () => {
  return (
    <div className='reviews-container'> 
        <img src={MySvg} alt="" />
        <div className="reviews-heading">
            <h1>Our Reviews</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptas labore dolorem amet, voluptatem aperiam quod cumque dolorum earum similique animi ipsum optio dolore sint odio doloremque eius distinctio et.
            </p>
            <p>
                Amet consectetur adipisicing elit. Dolorum iste vero reprehenderit, quis illo ducimus eveniet doloribus numquam modi ratione facilis. Assumenda odit soluta voluptates a expedita? Voluptatum, labore inventore. lorem
            </p>
        </div>
        <div className="review-stripe"></div>
    </div>
  )
}

