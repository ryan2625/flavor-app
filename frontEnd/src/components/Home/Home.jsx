import React from 'react'
import "../../styles/home.css"
import { HomeCarousel } from './HomeCarousel'
import { Contact } from './Contact'
import { GetQuote } from '../GetQuote'

export const Home = () => {

  return (
    <div>
      <HomeCarousel />
      <div className="homeContainer">
        <div className="companyMessage">
          <h2>
            Design. Manufacture. Deliver.
          </h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rem minima, dolores quaerat mollitia eligendi, soluta optio quidem temporibus reiciendis tempore modi odio pariatur deleniti adipisci. Quisquam harum aut accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusamus harum natus aut cum earum et, placeat nesciunt similique molestiae cumque modi provident consequuntur minus saepe, quas quaerat. Quae, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem vel esse asperiores nemo voluptatum expedita, iure fuga pariatur quos distinctio sapiente quia soluta, quae suscipit. Nemo saepe placeat vitae?
        </div>
        <GetQuote />
      </div>
      <Contact />
    </div>
  )
}

export default Home