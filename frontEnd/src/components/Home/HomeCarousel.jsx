import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../../styles/homeCarousel.css"
import  slider_1  from "./sliderImages/slider_1.jpg"
import  slider_2  from "./sliderImages/slider_2.jpg"
import  slider_3  from "./sliderImages/slider_3.jpg"
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="" />

export const HomeCarousel = () => {

  let images = [
    slider_1,
    slider_2,
    slider_3
  ]

  return (
    <Carousel interval={5000} slide={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="certification" className='sliderLinks'>
                <h3>CERTIFICATION</h3>
                <p>DISCOVER MORE</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[1]}
              alt="Second slide"
            />
  
            <Carousel.Caption>
            <Link to="production" className='sliderLinks'>
              <h3>PRODUCTION</h3>
              <p>DISCOVER MORE</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[2]}
              alt="Second slide"
            />
  
            <Carousel.Caption>
            <Link to="design" className='sliderLinks'>
              <h3>DESIGN</h3>
              <p>DISCOVER MORE</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  )
}

