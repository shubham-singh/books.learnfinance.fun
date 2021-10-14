export const CartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { book: action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.book._id !== action.payload._id
        ),
      };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.book._id === action.payload.book._id) {
            return { ...product, quantity: action.payload.quantity + 1 };
          }
          return { ...product };
        }),
      };

    case "DECREMENT":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.book._id !== action.payload.book._id
          ),
        };
      }
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.book._id === action.payload.book._id) {
            return { ...product, quantity: action.payload.quantity - 1 };
          }
          return { ...product };
        }),
      };

    default:
      return state;
  }
};
