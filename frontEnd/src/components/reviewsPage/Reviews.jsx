import { useState, useEffect, useRef } from "react"
import "../../styles/reviews.css"
import MySvg from "./triangles.svg"
import ReviewModal from "./ReviewModal"
import SingleReview from "./SingleReview"
import Form from 'react-bootstrap/Form';
import { Rating } from 'react-simple-star-rating'

export const Reviews = () => {

  const myRef = useRef();

  let i = 0;

  const [editModal, setModal] = useState(false)

  const [added, setAdded] = useState(false)

  const [reviews, setReviews] = useState([])

  const [stars, setStars] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    const fetchReviews = async () =>{
      const response = await fetch("http://localhost:4000/api/reviews")
      const json = await response.json()
      if (response.ok){
        setReviews(json)
        console.log("Coutring stars with arr" + reviews)
        countStars(json)
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

  const countStars = (array) => {
    let starArray = [0, 0, 0, 0, 0]
    array.forEach((review) => {
      switch (review.stars) {
        case 1:
          starArray[0]++;
          break;
        case 2:
          starArray[1]++;
          break;
        case 3:
          starArray[2]++;
          break;
        case 4:
          starArray[3]++;
          break;
        case 5:
          starArray[4]++;
          break;
        default:
          break;
      }
    })
    setStars(starArray)
    console.log(starArray)
  }

  const scrollToView = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
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
            Our customers are our top priority, and their satisfaction is paramount. We consistently deliver high-quality products and services that exceed their expectations, resulting in glowing reviews. Quality and reliability are at the core of our products, while our customer support team ensures their needs are met promptly. Their trust and loyalty inspire us to maintain high standards and continue delivering innovative solutions.
            </p>
            <p>
            We are committed to maintaining the high standards that have earned us these positive reviews and to continue delivering innovative solutions that bring joy and convenience to the lives of our customers.
            </p>
            <button onClick={scrollToView} id="glow-button">
              See our reviews
            </button>
        </div>
        <div className="review-stripe"></div>
        <h2 className="review-headers" ref={myRef}>
          All Reviews
        </h2>
        <div className="sort-by">
          <Form.Select 
          aria-label="Default select example"
          onChange={handleRatingChange}
          className="form-bootstrap"
          size="lg" >
          <option value="newest">Filter Results</option>
            <option value="highest">Rating: High to Low</option>
            <option value="lowest">Rating: Low to High</option>
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </Form.Select>
          <div className="stars">
          {stars.map((star) => {
              i++;
              return (
                <div className="star-container">
                  <Rating initialValue={i} readonly={true}/>
                  <h3>({star})</h3>
                </div>
              )
            })}
        </div>
        </div>
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

