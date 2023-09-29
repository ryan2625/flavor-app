import React from 'react'
import { useState } from 'react'
import "../styles/home.css"
import { HomeCarousel } from './HomeCarousel'
import { Footer } from './footerFiles/Footer'
import { Contact } from './Contact'

export const Home = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    capability: "",
    message: ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormData({
      name: "",
      email: "",
      capability: "",
      message: ""
    })
    console.log("clicked");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        <div className="getQuote">
        <form className="formContainer">
          <h1 className="formHeader">Get a Quote</h1>
          <input 
          type="text" 
          className="formInput" 
          placeholder="Name"
          name='name'
          value={formData.name}
          onChange={handleInputChange}/>
          <input 
          type="email" 
          className="formInput" 
          name='email'
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}/>
          <select className="formDropdown">
            <option value={formData.capability} disabled selected>Select a capability</option>
            <option value="Option 1">Design</option>
            <option value="Option 2">Production</option>
            <option value="Option 3">Certification</option>
          </select>
          <textarea 
          className="formTextarea" 
          placeholder="Message"
          name='message'
          value={formData.message}
          onChange={handleInputChange}>
          </textarea>
          <label htmlFor="formCheckbox">Would you like to receive email updates?</label>
          <input type="checkbox" id="formCheckbox" name="formCheckbox"/>
          <button type="submit" className="formButton">Get a Quote</button>
        </form>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home