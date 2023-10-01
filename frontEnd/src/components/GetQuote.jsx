import React, { useState } from 'react';

/**
 * GetQuote Component
 *
 * This component represents a form used for getting a quote. It appears on the main page, the
 * categoryFlavors page, and the category page. This component saves a users name, email, capability, message, and
 * if they want to receive email alerts. It then sends this data to the backend to be saved in a database at the route
 * /api/quote with a POST request.
 * 
 */

export const GetQuote = () => {

  /*
  *If the user successfully sends their data to the server, this state will change and a small message will appear
  *letting the user know
  */
 
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    capability: '',
    message: '',
    updates: false,
  });

  /**
   * 
   * This function handles the submit button on the form. It checks to make sure all required fields are filled out and
   * then sends the data to the backend to be saved in a database at the route /api/quote with a POST request.
   * 
   */

  const handleSubmit = async (e) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.capability ||
      !formData.message
    ) {
      alert("Please fill out all required fields");
      return;
    }
    e.preventDefault();
    try {
      const { name, email, capability, message, updates } = formData;
      const quote = { name, email, capability, message, updates };
      const response = await fetch("http://localhost:4000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
      });
      setFormData({
        name: "",
        email: "",
        capability: "",
        message: "",
        updates: false,
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
    if (e.target.type === "select-one") {
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
    }
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      updates: !formData.updates, 
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
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="formInput"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <select
          className="formDropdown"
          name="capability"
          value={formData.capability}
          onChange={handleInputChange}
        >
          <option value={""} disabled>
            Select a capability
          </option>
          <option value="Design">Design</option>
          <option value="Production">Production</option>
          <option value="Certification">Certification</option>
        </select>
        <textarea
          className="formTextarea"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="formCheckbox" style={{ marginRight: "10px" }}>
          Would you like to receive email updates?
        </label>
        <input
          type="checkbox"
          name="formCheckbox"
          checked={formData.updates}
          onChange={handleCheckboxChange}
        />
        <button className="formButton">Get a Quote</button>
        {success && (
          <p style={{ marginTop: "2rem" }}>Thank you for your submission!</p>
        )}
      </form>
    </div>
  );
};
