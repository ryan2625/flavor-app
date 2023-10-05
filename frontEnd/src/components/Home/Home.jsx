import React, { useEffect, useRef, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/home.css';
import { ScrollContext } from '../../contexts/scrollProvider';
import { HomeCarousel } from './HomeCarousel';
import { Contact } from './Contact';
import { GetQuote } from '../GetQuote';

/**
 * Home Component
 *
 * This component represents the homepage and includes the home carousel, company message, and
 * GetQuote component. It holds dummy text for the company message. 
 * 
 */

export const Home = () => {

  const { contextValue, updateValue } = useContext(ScrollContext);

  const [checkState, setCheckState] = useState(false);

  const scrollToRef = useRef();
  const location = useLocation();

  /*This function retrieves the search params and if you access this page via the contact param from the contact link in 
  the navbar, it will scroll you down to the contact me form */

  function checkSource() {
    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get('source');
    if (source === 'contact') {
      const targetElement = document.getElementById('contactTarget');
      if (targetElement) {
        updateValue(true);
        if (contextValue === true) {
          updateValue(false);
          console.log(contextValue)
          scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    }
  }

    /*BUG : If setTimeout is not used, triggering this function while coming from a different path (that is not / ) will cause page to flick to the bottom rapidly then back up to the top. Most likely a problem with rendering order and when the function is called. ALSO: need to remove search params from URL so on page refresh doesnt navigate back to contact formTODO if time. Prefetching may help solve issue. */

  useEffect(() => {
    setTimeout(checkSource(), 500);
  }, [checkState]);

  return (
    <div>
      <HomeCarousel />
      <div className="homeContainer">
        <div className="companyMessage">
          <h2>Design. Manufacture. Deliver.</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ante in congue. Sed ac ligula libero. Donec id vehicula odio, et ultrices justo. Aenean posuere eget ex ut aliquet. Praesent vulputate, arcu in lacinia sagittis, erat odio cursus lectus, vel rhoncus urna eros a odio. Phasellus ac neque non arcu malesuada mattis. In non ipsum sed purus aliquam gravida non id arcu. Nunc eget purus ex. In hac habitasse platea dictumst. Integer euismod non tellus sit amet volutpat. Donec euismod libero ac eleifend. Vestibulum gravida, nulla in luctus scelerisque, tortor neque tincidunt ligula, at pharetra erat libero sit amet quam.
        </div>
        <GetQuote />
      </div>

      {/* This div is used to scroll to the contact me form if you access the page via the contact link in the navbar via its ID */}

      <div ref={scrollToRef} id="contactTarget">
        <Contact />
      </div>
    </div>
  );
};
