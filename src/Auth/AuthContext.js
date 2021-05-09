import { createContext, useContext, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
