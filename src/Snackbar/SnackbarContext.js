import { createContext, useContext, useReducer } from "react";
import SnackbarReducer from "./SnackbarReducer";

const SnackbarContext = createContext();

export const SnackbarContextProvider = (props) => {
  const [snackbar, dispatch] = useReducer(SnackbarReducer, {
    visible: false,
    message: ""
  });

  return (
    <SnackbarContext.Provider
      value={{ snackbar: snackbar, snackbarDispatch: dispatch }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
