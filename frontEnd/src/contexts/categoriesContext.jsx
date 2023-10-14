import { createContext, useState, useContext } from "react";

/**
 *  This context is used to store the categories retrieved from  *  the database. It is set in the Navigation component and used *  in the FlavorsCategory component to prevent redundant API   *  calls.
 */

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState(null);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
        {children}
        </CategoriesContext.Provider>
    );
}

/* This function is used to ensure the context is used within the CategoriesProvider. */

export const useCategories = () => {
    const context = useContext(CategoriesContext);
    if (context === undefined) {
      throw new Error("useCategories must be used within a CategoriesProvider");
    }
    return context;
  };