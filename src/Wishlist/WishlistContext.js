import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "./WishlistReducer";
import { useSnackbar } from "../Snackbar/SnackbarContext";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishlist, dispatch] = useReducer(WishlistReducer, {
    wishlist: []
  });

  return (
    <WishlistContext.Provider
      value={{ wishlist: wishlist.wishlist, wishlistDispatch: dispatch }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export function useWishlist() {
  return useContext(WishlistContext);
}
