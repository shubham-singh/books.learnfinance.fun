export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, inCart: true, quantity: 1 }]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload._id)
      };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, quantity: action.payload.quantity + 1 };
          }
          return { ...product };
        })
      };

    case "DECREMENT":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product._id !== action.payload._id
          )
        };
      }
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, quantity: action.payload.quantity - 1 };
          }
          return { ...product };
        })
      };

    default:
      return state;
  }
};
