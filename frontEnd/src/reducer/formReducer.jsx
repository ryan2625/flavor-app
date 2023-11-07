// formReducer function manages the state of the form data. See: GetQuote.jsx
// It takes the current 'formData' state and an 'action' object as input.

export default function formReducer(formData, action) {
    // The switch statement checks the 'action.type' to determine which operation to perform.
  
    switch (action.type) {
      // When the 'CLEAR_FORM' action is dispatched, it resets all form fields to their initial values.
      case "CLEAR_FORM": {
        return {
          name: "",
          email: "",
          capability: "",
          message: "",
          updates: false
        };
      }
  
      // The 'UPDATE_FORM' action updates a specific form field based on the 'action.identity' and 'action.value'.
      case "UPDATE_FORM": {
        return {
          ...formData,
          [action.identity]: action.value
        };
      }
  
      // The 'UPDATE_CHECKBOX' action toggles the 'updates' field in the form data.
      case "UPDATE_CHECKBOX": {
        return {
          ...formData,
          updates: !formData.updates
        };
      }
  
      // The 'UPDATE_DROPDOWN' action updates the 'capability' field for a dropdown selection.
      case "UPDATE_DROPDOWN": {
        return {
          ...formData,
          capability: action.index
        };
      }
    }
  }
  