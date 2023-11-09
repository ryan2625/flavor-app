// formReducer function manages the state of the form data. See: GetQuote.jsx
// It takes the current 'formData' state and an 'action' object as input.

export default function formReducer(formData, action) {
  
    switch (action.type) {
      case "CLEAR_FORM": {
        return {
          name: "",
          email: "",
          capability: "",
          message: "",
          updates: false
        };
      }
  
      case "UPDATE_FORM": {
        return {
          ...formData,
          [action.identity]: action.value
        };
      }
  
      case "UPDATE_CHECKBOX": {
        return {
          ...formData,
          updates: !formData.updates
        };
      }

      case "UPDATE_DROPDOWN": {
        return {
          ...formData,
          capability: action.index
        };
      }
    }
  }
  