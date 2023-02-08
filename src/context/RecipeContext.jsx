import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [term, setTerm] = useState(null);
  return (
    <RecipeContext.Provider value={{ term, setTerm }}>
      {children}
    </RecipeContext.Provider>
  );
};
