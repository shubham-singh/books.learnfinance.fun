export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...action.payload] };

    case "ADDED_TO_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, inCart: true };
          }
          return { ...product };
        })
      };

    case "REMOVED_FROM_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, inCart: false };
          }
          return { ...product };
        })
      };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };

    case "REMOVE_SORT":
      return {
        ...state,
        sortBy: null
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        showInventoryAll: !state.showInventoryAll
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload]
        }
      };

    case "RESET_FILTER":
      return {
        ...state,
        showInventoryAll: false,
        sortBy: null,
        category: {
          "Options Trading": false,
          "Technical Analysis": false,
          "Value Investing": false
        }
      };

    default:
      return state;
  }
};
