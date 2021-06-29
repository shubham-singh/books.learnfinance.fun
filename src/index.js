import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ProductContextProvider } from "./Product/ProductContext";
import { CartContextProvider } from "./Cart/CartContext";
import { WishlistContextProvider } from "./Wishlist/WishlistContext";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarContextProvider } from "./Snackbar/SnackbarContext";
import { AuthContextProvider } from "./Auth/AuthContext";
import { LoaderContextProvider } from "./Loader/LoaderContext";
import { LocalisationContextProvider } from "./Localisation/LocalisationContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <LoaderContextProvider>
                <SnackbarContextProvider>
                  <Router>
                    <App />
                  </Router>
                </SnackbarContextProvider>
              </LoaderContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </LocalisationContextProvider>
  </StrictMode>,
  rootElement
);
