import { createContext, useContext, useReducer } from "react";

import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    cart: [],

    total: function () {
      return this.cart.reduce((accumulator, initial) => {
        return accumulator + initial.price * initial.quantity;
      }, 0);
    },

    items: function () {
      return this.cart.reduce((accumulator, initial) => {
        return accumulator + initial.quantity;
      }, 0);
    }
  });

  return (
    <CartContext.Provider
      value={{
        cart: cart.cart,
        total: cart.total(),
        items: cart.items(),
        cartDispatch: dispatch
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
