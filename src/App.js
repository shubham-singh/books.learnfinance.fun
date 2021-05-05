import "./styles.css";
// import setUpServer from "./api/mock.server";

import NavLayout from "./Navigation/NavLayout";
import ProductList from "./Product/ProductList";
import WishlistLayout from "./Wishlist/WishlistLayout";
import CartLayout from "./Cart/CartLayout";

import { Routes, Route } from "react-router-dom";
import Snackbar from "./Snackbar/Snackbar";
import ProductView from "./Product/ProductView";

// setUpServer();

export default function App() {
  return (
    <div className="App">
      <NavLayout />
      <Snackbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/book/:id" element={<ProductView />} />
        <Route path="/cart" element={<CartLayout />} />
        <Route path="/wishlist" element={<WishlistLayout />} />
      </Routes>
    </div>
  );
}
