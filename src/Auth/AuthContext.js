import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, dispatch] = useReducer(AuthReducer, {
    token: JSON.parse(localStorage.getItem("auth_learnfinance")),
    firstName: "",
    loggedIn: (function () {
      return localStorage.getItem("auth_learnfinance") ? true : false;
    })()
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        authDispatch: dispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
