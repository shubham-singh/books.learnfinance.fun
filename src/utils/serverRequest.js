import axios from "axios";
import {
  LOGIN,
  ADD_TO_CART,
  ADD_OR_REMOVE_WISHLIST,
  GET_CART,
  GET_BOOKS,
  GET_WISHLIST,
  CHANGE_QUANTITY,
  SIGNUP,
  GET_USER,
  ORDER,
} from "./apiRoutes";
import { deleteAuthToken, loadScript } from "./function";

export const getBooks = async (productDispatch, trimNames, setLoader) => {
  setLoader("show");
  try {
    const response = await axios.get(GET_BOOKS);
    const data = trimNames(response.data.books);
    productDispatch({ type: "SET_PRODUCTS", payload: data });
    setLoader(null);
  } catch (error) {
    console.log("Something went wrong", error, error.message);
    setLoader("error");
  }
};

export const getUser = async (authDispatch) => {
  try {
    const user = await axios.get(GET_USER);
    authDispatch({
      type: "USER_INFO",
      payload: { firstName: user.data.user.firstName },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async (cartDispatch) => {
  try {
    const cart = await axios.get(GET_CART);
    cartDispatch({
      type: "SET_CART",
      payload: cart.data.cart.books,
    });
  } catch (error) {
    if (error.response.data.error === "jwt expired") {
      deleteAuthToken();
    }
    console.log(error);
  }
};

export const getWishlist = async (wishlistDispatch) => {
  try {
    const wishlist = await axios.get(GET_WISHLIST);
    wishlistDispatch({
      type: "SET_WISHLIST",
      payload: wishlist.data.wishlist.books,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (loginInfo, authDispatch, snackbarDispatch) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Logging In",
    });
    const response = await axios.post(LOGIN, loginInfo);
    if (response.data.success) {
      authDispatch({
        type: "LOGIN",
        payload: {
          firstName: response.data.user.firstName,
          token: response.data.token,
        },
      });
    }
    if (response.status === 400) {
      throw new Error("Login Failed");
    }
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged In",
    });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error,
    });
  }
};

export const logout = (authDispatch) => {
  authDispatch({
    type: "LOGOUT",
  });
};

export const signup = async (signupInfo, authDispatch, snackbarDispatch) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Creating your account",
    });
    const response = await axios.post(SIGNUP, signupInfo);
    if (response.data.success) {
      authDispatch({
        type: "LOGIN",
        payload: {
          firstName: response.data.user.firstName,
          token: response.data.token,
        },
      });
    }
    if (response.status === 400) {
      throw new Error("Signup Failed");
    }
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Signed Up",
    });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error,
    });
  }
};

export const addToCart = async (
  product,
  wishlistView,
  cartDispatch,
  wishlistDispatch,
  snackbarDispatch
) => {
  try {
    if (wishlistView) {
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Moving to Cart",
      });
      const wishlist = await axios.post(ADD_OR_REMOVE_WISHLIST, {
        book: product._id,
      });
      const cart = await axios.post(ADD_TO_CART, { book: product._id });
      if (wishlist.data.success && cart.data.success) {
        cartDispatch({ type: "ADD_TO_CART", payload: product });
        wishlistDispatch({
          type: "ADD_OR_REMOVE_WISHLIST",
          payload: product,
        });
        snackbarDispatch({
          type: "SHOW_SNACKBAR",
          payload: "Moved to Cart",
        });
      }
      if (!wishlist.data.success || !cart.data.success) {
        throw new Error("Couldn't Move to Cart");
      }
    } else {
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Adding to Cart",
      });
      const response = await axios.post(ADD_TO_CART, { book: product._id });
      if (response.data.success) {
        cartDispatch({ type: "ADD_TO_CART", payload: product });
        snackbarDispatch({
          type: "SHOW_SNACKBAR",
          payload: "Added to Cart",
        });
      }
      if (!response.data.success) {
        throw new Error("Could not Add to Cart");
      }
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error,
    });
  }
};

export const changeQuantity = async (
  cartProduct,
  quantity,
  snackbarDispatch
) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Updating Quantity",
    });
    const response = await axios.post(CHANGE_QUANTITY, {
      book: cartProduct.book._id,
      quantity: quantity,
    });
    if (response.data.success) {
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Quantity Updated",
      });
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error,
    });
  }
};

export const addOrRemoveFromWishlist = async (
  product,
  cartView,
  cartDispatch,
  wishlistDispatch,
  snackbarDispatch
) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Updating Wishlist",
    });
    if (cartView) {
      const cartResponse = await axios.post(CHANGE_QUANTITY, {
        book: product._id,
        quantity: 0,
      });
      if (cartResponse.data.success) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
      }
    }
    const response = await axios.post(ADD_OR_REMOVE_WISHLIST, {
      book: product._id,
    });
    if (response.data.success) {
      wishlistDispatch({
        type: "ADD_OR_REMOVE_WISHLIST",
        payload: product,
      });
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Wishlist Updated",
      });
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error,
    });
  }
};

export const checkout = async (snackbarDispatch) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Connecting to Razorpay..."
    })
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      return;
    }
    const response = await axios.post(ORDER);
    if (!response.data.success) {
      console.log(response);
      throw new Error("Cannot checkout right now");
    }
    const options = {
      key: process.env["RAZORPAY_KEY_ID"],
      amount: response.data.order.amount,
      currency: response.data.order.currency,
      name: "Learn Finance",
      description: "Happy reading :)",
      image: "https://res.cloudinary.com/shubhamsingh/image/upload/v1632476108/dh4nkahoafkmmvpu07cp.png",
      order_id: response.data.order.razorpay_order_id,
      callback_url: "https://books.learnfinance.fun",
      prefill: {
        name: response.data.name,
        email: response.data.email,
        contact: "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.log(error);
  }
};
