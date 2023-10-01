import React from 'react'
import { useState } from 'react'

export const GetQuote = () => {

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    capability: "",
    message: "",
    updates: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const { name, email, capability, message, updates } = formData;
      const quote = { name, email, capability, message, updates };
      const response = await fetch('http://localhost:4000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quote),
      });
      setFormData({
        name: "",
        email: "",
        capability: "",
        message: "",
        updates: false
      });
      if (response.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (e.target.type === 'select-one') {
          const selectedOption = e.target.options[e.target.selectedIndex];
          setFormData({
            ...formData,
            [name]: selectedOption.value,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      };

      const handleCheckboxChange = () => {
        // Toggle the 'updates' property when the checkbox is clicked
        setFormData({
          ...formData,
          updates: !formData.updates, // Toggle the value (true to false or false to true)
        });
      };

  return (
    <div className="getQuote">
    <form className="formContainer" onSubmit={handleSubmit}>
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
      <select 
        className="formDropdown"
        name="capability"
        value={formData.capability}
        onChange={handleInputChange}
      >
        <option value={""} disabled>Select a capability</option>
        <option value="Design">Design</option>
        <option value="Production">Production</option>
        <option value="Certification">Certification</option>
      </select>
      <textarea 
        className="formTextarea" 
        placeholder="Message"
        name='message'
        value={formData.message}
        onChange={handleInputChange}>
      </textarea>
      <label htmlFor="formCheckbox" style={{ marginRight: "10px"}}>Would you like to receive email updates?</label>
      <input 
        type="checkbox"  
        name="formCheckbox"
        checked={formData.updates}
        onChange={handleCheckboxChange}/>
      <button className="formButton">Get a Quote</button>
      {success && <p style={{ marginTop: '2rem' }}>Thank you for your submission!</p>}
    </form>
    </div>
  )
}