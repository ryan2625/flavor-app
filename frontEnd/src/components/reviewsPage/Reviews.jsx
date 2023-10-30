import { useState } from "react"
import "../../styles/reviews.css"
import MySvg from "./triangles.svg"
import ReviewModal from "./ReviewModal"

export const Reviews = () => {

  const [editModal, setModal] = useState(false)
  
  return (
    <div className="review-body">
    {editModal && <ReviewModal setModal={setModal} />}
    <div className='reviews-container'> 
    <button className='formButton' id="add-review" onClick={() => setModal(true)}>Add Review</button>
        <img src={MySvg} alt="" />
        <div className="reviews-heading">
            <h1>Our Reviews</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptas labore dolorem amet, voluptatem aperiam quod cumque dolorum earum similique animi ipsum optio dolore sint odio doloremque eius distinctio et.
            </p>
            <p>
                Amet consectetur adipisicing elit. Dolorum iste vero reprehenderit, quis illo ducimus eveniet doloribus numquam modi ratione facilis. Assumenda odit soluta voluptates a expedita? Voluptatum, labore inventore.
            </p>
        </div>
        <div className="review-stripe"></div>
        <div className="stars">
          Here will be the stars info
        </div>
        <h2 className="sort-by">
          Filters
        </h2>
        <div className="reviews-grid">
          asd
        </div>
    </div>
    </div>
  )
}

