export const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OR_REMOVE_WISHLIST":
      if (state.wishlist.some((item) => item._id === action.payload._id)) {
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (product) => product._id !== action.payload._id
          )
        };
      } else {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      }

    default:
      return state;
  }
};
