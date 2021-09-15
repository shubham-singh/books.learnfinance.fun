import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderContextProvider = (props) => {
  const [loader, setLoader] = useState(null);

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
