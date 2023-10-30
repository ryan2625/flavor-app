import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { data1 } from './reviewData'
import { data2 } from './reviewData'
import { data3 } from './reviewData'
import "../../styles/singleReview.css"

function SingleReview(props) {

    const [reviewPreset, setPreset] = useState(data3)

    const [rating, setRating] = useState(0)

    const [imageSize, setImageSize] = useState(null)

    useEffect(() => {
        console.log("PRESET: " + props.preset.description)
        switch (props.preset) {
            case "John Doe":
                setPreset(data1)
                break;
            case "Keisha Smith":
                setPreset(data2)
                break;
            case "Mike Johnson":
                setPreset(data3)
                break;
        }
    }, [props.preset])

    useEffect(() => {
        if (props.preview) {
            setImageSize("100px")
        } else {
            setImageSize("250px")
        }
    }, [])

  return (
    <div className="single-review">
        <div className="pfp">
            <img src={reviewPreset.image} alt="" style={{ width: imageSize, height: imageSize }} />
        </div>
        <h3>
            {reviewPreset.name}
        </h3>
        <div className="stars-review">
            {props.preview ? null : <Rating /> }
        </div>
        <p className="review-information">
            {reviewPreset.description}
        </p>
    </div>
  )
}

export default SingleReview