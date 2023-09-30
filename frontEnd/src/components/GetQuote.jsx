import React from 'react'
import { useState } from 'react'

export const GetQuote = () => {

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
        <option value={formData.capability} disabled>Select a capability</option>
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
  )
}