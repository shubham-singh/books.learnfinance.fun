import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useCart } from "../Cart/CartContext";
import { setupAuthHeaderForServiceCalls } from "../utils/function";
import { getCart, getUser, getWishlist } from "../utils/serverRequest";
import { WishlistReducer } from "./WishlistReducer";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishlist, dispatch] = useReducer(WishlistReducer, {
    wishlist: []
  });

  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    if (user.loggedIn) {
      setupAuthHeaderForServiceCalls();
      getCart(cartDispatch);
      getWishlist(dispatch);
      getUser(authDispatch);
    } else {
      cartDispatch({
        type: "SET_CART",
        payload: []
      });
      dispatch({
        type: "SET_WISHLIST",
        payload: []
      });
    }
  }, [user.loggedIn]);

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
