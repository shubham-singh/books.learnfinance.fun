const SnackbarReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_SNACKBAR":
      return { visible: false, message: "" };
    case "SHOW_SNACKBAR":
      return { visible: true, message: action.payload };
    case "ADD_TO_CART_SNACKBAR":
      return { visible: true, message: "Added to Cart" };
    case "REMOVE_FROM_CART_SNACKBAR":
      return { visible: true, message: "Removed from Cart" };
    case "ADD_TO_WISHLIST_SNACKBAR":
      return { visible: true, message: "Added to Wishlist" };
    case "REMOVE_FROM_WISHLIST_SNACKBAR":
      return { visible: true, message: "Removed from Wishlist" };
    default:
      return state;
  }
};

export default SnackbarReducer;
