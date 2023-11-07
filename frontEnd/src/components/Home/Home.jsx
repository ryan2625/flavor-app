import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/home.css';
import { HomeCarousel } from './HomeCarousel';
import { Contact } from './Contact';
import { GetQuote } from '../GetQuote';
import { ServerAlert } from "./ServerAlert";

/**
 * Home Component
 *
 * This component represents the homepage and includes the home carousel, company message, and
 * GetQuote component. It holds dummy text for the company message. 
 * 
 */

export const Home = () => {

  const location = useLocation();

  /*This function retrieves the search params and if you access this page via the contact param from the contact link in 
  the navbar, it will scroll you down to the contact me form */

  function checkSource() {
    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get('source');

    if (source === 'contact') {
      const targetElement = document.getElementById('contactTarget');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }

    /*BUG : If setTimeout is not used, triggering this function while coming from a different path (that is not / ) will cause page to flick to the bottom rapidly then back up to the top. Most likely a problem with rendering order and when the function is called or with router DOM */

  useEffect(() => {
    setTimeout(checkSource, 400);
  }, );

  /**
   * This state is used to determine wheter to show the server warning or not.
   * If the user has visited the site before and has clicked the X 
   * indicating they have read the warning, then they won't be shown the
   * message again for a specified time (see use effect). This state is passed 
   * to the server alert component as a prop to determine whether to show the
   * warning or not.
   */

  const [closed, setClose] = useState(localStorage.getItem('closed') || false)

  /**
   * This use effect checks the current date. If the cached date is more than 
   * 15 min old, it will set the closed state to false, meaning the user will
   * see the warning again.
   */

  useEffect(() => {

    {/*Variable to hold the current date*/}
    const initialDate = new Date().getTime().toString();

    {/*If a user has never visited this site before, it will add a date to local storage*/}
    if (!localStorage.getItem('timestamp')) {
      localStorage.setItem('timestamp', initialDate);
    }

    const compareStored = parseInt(localStorage.getItem('timestamp'), 10);

    if (initialDate - compareStored >= 1000 * 60 * 15) {
      localStorage.setItem('timestamp', initialDate);
      setClose(false);
    }
  }, []);

    /*A function to change the state of the server alert, sent down as a prop
    * to the server alert component.
    */

  function setCloseState(){
    setClose(true)
  }

  return (
    <div className="mainContainer">
      {/*I changed hosting, so warning no longer needed*/}
      { /*<ServerAlert  closed={closed} setCloseState={setCloseState}/> */}
      <HomeCarousel />
      <div className="homeContainer">
        <div className="companyMessage">
          <h2>Design. Manufacture. Deliver.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ante in congue. Sed ac ligula libero. Donec id vehicula odio, et ultrices justo. Aenean posuere eget ex ut aliquet. Praesent vulputate, arcu in lacinia sagittis, erat odio cursus lectus, vel rhoncus urna eros a odio. Phasellus ac neque non arcu malesuada mattis. In non ipsum sed purus aliquam gravida non id arcu. Nunc eget purus ex. In hac habitasse platea dictumst. Integer euismod non tellus sit amet volutpat. Donec euismod libero ac eleifend. Vestibulum gravida, nulla in luctus scelerisque, tortor neque tincidunt ligula, at pharetra erat libero sit amet quam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis incidunt repellendus nobis cum a, voluptatum non necessitatibus provident perferendis asperiores esse distinctio aspernatur eum? Dolor reprehenderit et saepe hic.
          </p>
        </div>
        <GetQuote />
      </div>

      {/* This div is used to scroll to the contact me form if you access the page via the contact link in the navbar via its ID */}

      <div id="contactTarget">
        <Contact />
      </div>
    </div>
  );
};
