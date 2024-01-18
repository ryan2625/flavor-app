import React from 'react';
import { Link } from 'react-router-dom';
import { isIE } from 'react-device-detect';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from './sliderImages/slider_1.avif';
import slider_2 from './sliderImages/slider_2.avif';
import slider_3 from './sliderImages/slider_3.avif';
import slider_a from './sliderImages/slider_1.jpg';
import slider_b from './sliderImages/slider_2.jpg';
import slider_c from './sliderImages/slider_3.jpg';
import '../../styles/homeCarousel.css';

/**
 * HomeCarousel Component
 *
 * This component represents the homepage slider and each slider frame contains an imaginary link.
 * 
 */

export const HomeCarousel = () => {

  /* Defining variables for the three slider images. We also check the browser of the user and if they are using internet explorer, we show them a jpg, as .avif images are not supported on internet explorer (IE moment lol) */

  let images = [slider_1, slider_2, slider_3];
  let images2 = [slider_a, slider_b, slider_c]

  /* Set carousel structure with a 5000ms delay between slides. Preloading images for increased LCP.*/

  return (
    <Carousel interval={5000} slide={5000}>
      <Carousel.Item>
        <img className="d-block w-100" src={isIE ? images2[0] : images[0]} alt="First slide"/>
        <Carousel.Caption>
          <Link to="" className="sliderLinks">
            <h3>CERTIFICATION</h3>
            <p>DISCOVER MORE</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={isIE ? images2[1] : images[1]} alt="Second slide"/>
        <Carousel.Caption>
          <Link to="" className="sliderLinks">
            <h3>PRODUCTION</h3>
            <p>DISCOVER MORE</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={isIE ? images2[2] : images[2]} alt="Third slide"/>
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
