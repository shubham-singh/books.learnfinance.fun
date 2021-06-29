import { createContext, useContext, useState } from "react";

export const LocalisationContext = createContext();

export const LocalisationContextProvider = (props) => {
  const [language, setLanguage] = useState("en");
  return (
    <LocalisationContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LocalisationContext.Provider>
  );
};

export const useLocalisation = () => useContext(LocalisationContext);
