import axios from "axios";

export const getData = async (url, productDispatch, trimNames, setLoader) => {
  setLoader("show");
  try {
    const response = await axios.get(url);
    const data = trimNames(response.data.products);
    productDispatch({ type: "SET_PRODUCTS", payload: data });
    setLoader(null);
  } catch (error) {
    console.log("Something went wrong", error, error.message);
    setLoader("error");
  }
};
