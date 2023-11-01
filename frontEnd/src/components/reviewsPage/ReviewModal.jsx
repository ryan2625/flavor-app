import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Rating } from 'react-simple-star-rating';
import Dropdown from 'react-bootstrap/Dropdown';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import "../../styles/reviewModal.css";
import SingleReview from './SingleReview';

/**
 * Review modal component
 * 
 * This modal pops up to add a new review to the reviews page. It  
 * contains a form to add a new review as well as a preview of the 
 * review.
 * 
 * @param {function} setModal - Used to close the modal
 * 
 * @param {boolean} added - Used to determine if a review has been
 * added to the database to make sure the page updates
 * 
 * @param {function} setAdded - Used to set the added variable
 */

function ReviewModal(props) {
  const currentDate = new Date().toJSON().slice(0, 10);
  const [color, setColor] = useState("#dbe5ff");
  const [stars, setStars] = useState(0);
  const [fullName, setFullName] = useState("John Doe");
  const [mobile, setMobile] = useState(false);

  /**
   * Use effect to determine if the user is on mobile or not.
   */

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  /**
   * If the modal is open, it hides the rest of the body.
   */

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  /**
   * Use to determine the color of the review set by the user.
   */

  const handleColorChange = (e) => {
    const selectedValue = e.target.value;
    setColor(selectedValue);
  };

  /**
   * Used to set the number of stars in the review set by the user.
   */

  const handleRating = (rate) => {
    setStars(rate);
  };

  /**
   * Used to determine the preset for the review.
   */

  function handleSelect(eventKey) {
    setFullName(eventKey);
  }

  /**
   * Used to close the modal.
   */

  function handleModal() {
    document.body.style.overflow = 'visible';
    props.setModal(false);
  }

  /**
   * Data submission function for the review form. Validates
   * data to ensure the user has selected a rating. Makes a POST 
   * request to the review api to add the review to the database.
   */

  async function handleClick() {
    if (stars === 0) {
      alert("Please select a rating");
      return;
    }

    const review = {
      fullName,
      color,
      stars,
      date: currentDate,
    };

    const response = await fetch("https://cute-cyan-duck-tie.cyclic.app/api/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      props.setAdded(!props.added);
      handleModal();
    }
  }

  return (
    <div className='review-modal'>
      <div className="review-form">
        <CloseIcon
          id="close-icon-modal"
          onClick={handleModal}
          style={{ cursor: 'pointer' }}
        />
        <h1>Create a Review</h1>
        <div className="divider"></div>
        <div className="rater">
          <h2>Rating:</h2>
          <Rating
            fillColorArray={['#F00101', '#F57300', '#F5C900', '#BAF000', '#00F501']}
            onClick={handleRating}
          />
          <h2>Choose color:</h2>
          <Form.Select
            aria-label="Default select example"
            onChange={handleColorChange}
            value={color}
            style={{ backgroundColor: color }}
          >
            <option value="#dbe5ff" id='drop4'>Blue</option>
            <option value="#ffd5ff" id='drop1'>Pink</option>
            <option value="#d6fff1" id='drop2'>Mint</option>
            <option value="#dbdbdb" id='drop3'>Grey</option>
          </Form.Select>
        </div>
        <div className="divider"></div>
        <h2>
          <div className="icon-warning">
            <WarningAmberIcon id="warning-modal" />
          </div>
          Choose your review template
        </h2>
        <Tabs
          defaultActiveKey="John Doe"
          id="fill-tab-example"
          onSelect={handleSelect}
          className="mb-3"
          fill
        >
          <Tab eventKey="John Doe" title="John Doe">
            <SingleReview
              preset="John Doe"
              preview={true}
              color={color}
              currentDate={currentDate}
            />
          </Tab>
          <Tab eventKey="Keisha Smith" title="Keisha Smith">
            <SingleReview
              preset="Keisha Smith"
              preview={true}
              color={color}
              currentDate={currentDate}
            />
          </Tab>
          <Tab eventKey="Mike Johnson" title="Mike Johnson">
            <SingleReview
              preset="Mike Johnson"
              preview={true}
              color={color}
              currentDate={currentDate}
            />
          </Tab>
        </Tabs>
        <button className={mobile ? "formButton review-button set-order" : "formButton review-button"} onClick={handleClick}>Add Review!</button>
      </div>
    </div>
  );
}

export default ReviewModal;