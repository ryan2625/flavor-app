import React from 'react'
import { useEffect, useState } from 'react'
import "../../styles/home.css"
import { HomeCarousel } from './HomeCarousel'
import { Contact } from './Contact'
import { GetQuote } from '../GetQuote'
import { useLocation } from 'react-router-dom';


export const Home = () => {

  const location = useLocation();



  function checkSource() {
    
    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get('source');

    if (source === 'contact') {
      const targetElement = document.getElementById('contactTarget');
      if (targetElement) {
        console.log("Triggered")
        targetElement.scrollIntoView({ behavior: 'smooth', block: "end",});
      }
    }
  }
 
  /*BUG : If setTimeout is not used, triggering this function while coming from a different path (that is not / ) will cause page to flick to the bottom rapidly then back up to the top. Most likely a problem with rendering order and when the function is called. TODO */
  useEffect(() => {
    setTimeout(checkSource, 300)
  }, );




  return (
    <div>
      <HomeCarousel />
      <div className="homeContainer">
        <div className="companyMessage" >
          <h2>
            Design. Manufacture. Deliver.
          </h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rem minima, dolores quaerat mollitia eligendi, soluta optio quidem temporibus reiciendis tempore modi odio pariatur deleniti adipisci. Quisquam harum aut accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusamus harum natus aut cum earum et, placeat nesciunt similique molestiae cumque modi provident consequuntur minus saepe, quas quaerat. Quae, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem vel esse asperiores nemo voluptatum expedita, iure fuga pariatur quos distinctio sapiente quia soluta, quae suscipit. Nemo saepe placeat vitae?
        </div>
        <GetQuote  />
      </div>
      <div id="contactTarget">
        <Contact />
      </div>
    </div>
  )
}