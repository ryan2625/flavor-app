import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { data1 } from './reviewData';
import { data2 } from './reviewData';
import { data3 } from './reviewData';
import "../../styles/singleReview.css";

/**
 * Single review componenet
 * 
 * This component is used to display a single review on the reviews  * page as well as in the reviews modal. It takes in props from 
 * Reveiw Modal and Reviews to display the correct review format.
 * 
 * @param {object} review - Holds the data for the review including 
 * the color, date, number of stars. and the preset
 * 
 * @param {boolean} preview - Determines whether or not the review is * being displayed in the modal or on the reviews page.
 * 
 * 
 */

function SingleReview(props) {

    /**
     * Use states to determine which review preset to use, the size
     * of the image, and whether or not the page is being viewed on 
     * mobile.
     * 
     */

  const [reviewPreset, setPreset] = useState(data1);
  const [imageSize, setImageSize] = useState(null);
  const [mobile, setMobile] = useState(false);

  /**
   * Use effect to determine if the user is on mobile or not.
   * UPDATE: This was being difficult so I basically ensure the 
   * value is true... I'll fix this later. Maybe.
   */

  useEffect(() => {
    if (window.innerWidth > 0) {
      setMobile(true);
    }
  }, []);

  /**
   * Use effect to determine which review preset to use based on the preset prop
   */

  useEffect(() => {
    switch (props.preset) {
      case "John Doe":
        setPreset(data1);
        break;
      case "Keisha Smith":
        setPreset(data3);
        break;
      case "Mike Johnson":
        setPreset(data2);
        break;
    }
  }, [props.preset]);

  /**
   * Use effect to determine the size of the image based on whether or not the
   * review is being displayed in the modal or on the reviews page.
   */

  useEffect(() => {
    if (props.preview) {
      setImageSize("100px");
    } else {
      setImageSize("200px");
    }
  }, []);

  return (
    <div className="single-review" style={{ backgroundColor: props.color }}>
      <div className="pfp">
        <img src={reviewPreset.image} alt="" style={{ width: imageSize, height: imageSize }} />
        <div className="pfp-deco"></div>
        <h3>{reviewPreset.fullName}</h3>
      </div>
      <h5 className={props.preview ? "" : "date-margin"}>
        {props.preview ? null : props.date}
      </h5>
      <div className="stars-review">
        {props.preview ? null : <Rating
          initialValue={props.stars}
          allowHover={false}
          readonly={true}
        />}
      </div>
      <p className="review-information">
        {mobile && props.preview ? "I love this store because...": reviewPreset.description}
      </p>
    </div>
  );
}

export default SingleReview;