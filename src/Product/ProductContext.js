import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(ProductReducer, {
    products: [],
    sortBy: null,
    category: {
      "Options Trading": false,
      "Technical Analysis": false,
      "Value Investing": false
    },
    showInventoryAll: false
  });

  return (
    <ProductContext.Provider
      value={{
        products: products.products,
        sortBy: products.sortBy,
        category: products.category,
        showInventoryAll: products.showInventoryAll,
        productDispatch: dispatch
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}
