import axios from "axios";
import { LOGIN } from "./APIurl";

export const getBooks = async (url, productDispatch, trimNames, setLoader) => {
  setLoader("show");
  try {
    const response = await axios.get(url);
    const data = trimNames(response.data.books);
    productDispatch({ type: "SET_PRODUCTS", payload: data });
    setLoader(null);
  } catch (error) {
    console.log("Something went wrong", error, error.message);
    setLoader("error");
  }
};

export const login = async (loginInfo, authDispatch, snackbarDispatch) => {
  snackbarDispatch({
    type: "SHOW_SNACKBAR",
    payload: "Logging In"
  });
  try {
    const response = await axios.post(LOGIN, loginInfo);
    console.log(response);
    if (response.success) {
      localStorage.setItem("auth_learnfinance", JSON.stringify(response.token));
    }
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged In"
    });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.error
    });
  }
};
