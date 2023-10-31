import { useState, useEffect } from "react"
import "../../styles/reviews.css"
import MySvg from "./triangles.svg"
import ReviewModal from "./ReviewModal"
import SingleReview from "./SingleReview"
import Form from 'react-bootstrap/Form';

export const Reviews = () => {

  const [editModal, setModal] = useState(false)

  const [added, setAdded] = useState(false)

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () =>{
      const response = await fetch("http://localhost:4000/api/reviews")
      const json = await response.json()
      if (response.ok){
        setReviews(json)
        console.log(json)
      }
    }
    fetchReviews()
  }, [added])


  const handleRatingChange = (e) => {
    const sortedReviews = [...reviews];
    switch (e.target.value) {
      case "newest":
        sortedReviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        break;
      case "highest":
        sortedReviews.sort((a, b) => (a.stars < b.stars ? 1 : -1));
        break;
      case "lowest":
        sortedReviews.sort((a, b) => (a.stars > b.stars ? 1 : -1));
        break;
      case "oldest":
        sortedReviews.sort((a,b) => (a.createdAt > b.createdAt ? 1 : -1))
      default:
        break;
    }
    setReviews(sortedReviews);
  };
  
  return (
    <div className="review-body">
    {editModal && <ReviewModal setModal={setModal} added={added} setAdded={setAdded} />}
    <div className='reviews-container'> 
    <button className='formButton add-review' 
    onClick={() => setModal(true)}>
      Add Review
    </button>
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
          <Form.Select 
          aria-label="Default select example"
          onChange={handleRatingChange} >
            <option>Sort By:</option>
            <option value="highest">Rating: High to Low</option>
            <option value="lowest">Rating: Low to High</option>
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </Form.Select>
        </h2>
        <h2 className="review-headers">
          All Reviews
        </h2>
        <div className="reviews-grid">
          {reviews.map((review) => {
            return(
              <SingleReview 
              preset={review.fullName}
              stars={review.stars}
              color={review.color}
              date={review.date} />
            )
          })}
        </div>
    </div>
    </div>
  )
}

