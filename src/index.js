import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ProductContextProvider } from "./Product/ProductContext";
import { CartContextProvider } from "./Cart/CartContext";
import { WishlistContextProvider } from "./Wishlist/WishlistContext";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarContextProvider } from "./Snackbar/SnackbarContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <SnackbarContextProvider>
            <Router>
              <App />
            </Router>
          </SnackbarContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </StrictMode>,
  rootElement
);
