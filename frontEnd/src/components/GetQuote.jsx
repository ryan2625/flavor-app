import React, { useState, useReducer } from 'react';
import formReducer from '../reducer/formReducer';

/**
 * GetQuote Component
 *
 * This component represents a form used for getting a quote. It appears on the main page, the
 * categoryFlavors page, and the category page. This component saves a user's name, email, capability, message, and
 * if they want to receive email alerts. It then sends this data to the backend to be saved in a database at the route
 * /api/quote with a POST request.
 */

export const GetQuote = () => {

  // This is the initial state of the form data. This is used as the initial state for the formReducer.

  const initialState = {
    name: '',
    email: '',
    capability: '',
    message: '',
    updates: false,
  };

  // See: Reducer in frontEnd/src/reducer/formReducer.jsx

  const [formData, dispatch] = useReducer(formReducer, initialState);

  /*
  *If the user successfully sends their data to the server, this state will change and a small message will appear
  *letting the user know
  */

  const [success, setSuccess] = useState(false);

  /**
   * 
   * This function handles the submit button on the form. It checks to make sure all required fields are filled out and
   * then sends the data to the backend to be saved in a database at the route /api/quote with a POST request.
   */

  const handleSubmit = async (e) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.capability ||
      !formData.message
    ) {
      e.preventDefault();
      alert("Please fill out all required fields");
      return;
    }
    e.preventDefault();
    try {
      const { name, email, capability, message, updates } = formData;
      const quote = { name, email, capability, message, updates };
      const response = await fetch("https://mern-flavor-app.onrender.com/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
      });
      dispatch({ type: "CLEAR_FORM" });
      if (response.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    dispatch({ 
      type: "UPDATE_FORM", 
      identity: e.target.name || "",  
      value: e.target.value || ""
    });
  };

  const handleDropdownChange = (e) => {
    const index = e.target.options[e.target.selectedIndex];
    dispatch({ type: "UPDATE_DROPDOWN", index: index.value });
  };

  const handleCheckboxChange = () => {
    dispatch({ type: "UPDATE_CHECKBOX" });
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
          onChange={handleDropdownChange}
          aria-label="select-capability-menu" 
        >
          <option value={""} aria-label="select-capability" disabled>
            Select a capability
          </option>
          <option value="Design" aria-label="select-design">Design</option>
          <option value="Production" aria-label="select-productions">Production</option>
          <option value="Certification" aria-label="select-certifications">Certification</option>
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
          aria-label="checkbox-for-updates"
        />
        <button className="formButton">Get a Quote</button>
        {success && (
          <p style={{ marginTop: "2rem" }}>Thank you for your submission!</p>
        )}
      </form>
    </div>
  );
};
