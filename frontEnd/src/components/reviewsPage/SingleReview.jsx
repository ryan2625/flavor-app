import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { data1 } from './reviewData'
import { data2 } from './reviewData'
import { data3 } from './reviewData'
import "../../styles/singleReview.css"

function SingleReview(props) {

    const [reviewPreset, setPreset] = useState(data3)

    const [imageSize, setImageSize] = useState(null)


    useEffect(() => {
        switch (props.preset) {
            case "John Doe":
                setPreset(data1)
                break;
            case "Keisha Smith":
                setPreset(data3)
                break;
            case "Mike Johnson":
                setPreset(data2)
                break;
        }
    }, [props.preset])

    useEffect(() => {
        if (props.preview) {
            setImageSize("100px")
        } else {
            setImageSize("200px")
        }
    }, [])

  return (
    <div className="single-review" 
    style={{ backgroundColor: props.color}}>
        <div className="pfp">
            <img src={reviewPreset.image} alt="" style={{ width: imageSize, height: imageSize }} />
            <div className="pfp-deco"></div>
        <h3>
            {reviewPreset.fullName}
        </h3>
        </div>
        <h5 className={props.preview ? "" : "date-margin"}>
            {props.preview ? props.currentDate : props.date}
        </h5>
        <div className="stars-review">
            {props.preview ? null : <Rating 
            initialValue={props.stars}
            allowHover={false}
            readonly={true}/> }
        </div>
        <p className="review-information">
            {reviewPreset.description}
        </p>
    </div>
  )
}

export default SingleReview