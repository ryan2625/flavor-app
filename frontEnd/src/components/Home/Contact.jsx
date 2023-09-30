import React from 'react'
import { useState } from 'react'
import "../../styles/contact.css"

export const Contact = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    setContactData({
      name: "",
      email: "",
      capability: "",
      message: ""
    })
    console.log("clicked");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div className="contactContainer">
        <div className="contactForm">
          <form className="contactFormContainer">
            <input 
            type="text" 
            className="formInput" 
            placeholder="Name"
            name='name'
            value={contactData.name}
            onChange={handleInputChange}/>
            <input 
            type="email" 
            className="formInput" 
            id="contactInput"
            name='email'
            placeholder="Email"
            value={contactData.email}
            onChange={handleInputChange}/>
            <textarea 
            className="formTextarea" 
            placeholder="Message"
            name='message'
            value={contactData.message}
            onChange={handleInputChange}>
            </textarea>
            <button type="submit" className="contactButton">SUBMIT</button>
          </form>
        </div>
        <div className="contactMessage">
            <h1 className="contactUs">
                CONTACT US
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium expedita modi, facere inventore voluptate cumque quis amet. </p>
        </div>
    </div>
  )
}

