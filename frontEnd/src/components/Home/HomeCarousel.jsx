import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from './sliderImages/slider_1.avif';
import slider_2 from './sliderImages/slider_2.avif';
import slider_3 from './sliderImages/slider_3.avif';
import '../../styles/homeCarousel.css';

/**
 * HomeCarousel Component
 *
 * This component represents the homepage slider and each slider frame contains an imaginary link.
 * 
 */

export const HomeCarousel = () => {

  /* Defining variables for the three slider images */

  let images = [slider_1, slider_2, slider_3];

  /* Set carousel structure with a 5000ms delay between slides. Preloading images for increased LCP.*/

  return (
    <Carousel interval={5000} slide={5000}>
      <Carousel.Item>
        <img className="d-block w-100" src={images[0]} alt="First slide" rel="preload"/>
        <Carousel.Caption>
          <Link to="" className="sliderLinks">
            <h3>CERTIFICATION</h3>
            <p>DISCOVER MORE</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[1]} alt="Second slide" rel="preload"/>
        <Carousel.Caption>
          <Link to="" className="sliderLinks">
            <h3>PRODUCTION</h3>
            <p>DISCOVER MORE</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[2]} alt="Third slide" rel="preload"/>
        <Carousel.Caption>
          <Link to="" className="sliderLinks">
            <h3>DESIGN</h3>
            <p>DISCOVER MORE</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
