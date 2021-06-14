import { createContext, useContext, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, dispatch] = useReducer(AuthReducer, {
    loggedIn: function () {
      return this.token ? true : false;
    },
    token: localStorage.getItem("auth_learnfinance")
  });
  // const [user, setUser] = useState({
  //   loggedIn: false,
  //   token: localStorage.getItem("auth_learnfinance")
  // });

  return (
    <AuthContext.Provider value={{ user, authDispatch: dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
