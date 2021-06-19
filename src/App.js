import "./styles.css";

import { Routes, Route, useLocation } from "react-router-dom";

import NavLayout from "./Navigation/NavLayout";
import ProductList from "./Product/ProductList";
import WishlistLayout from "./Wishlist/WishlistLayout";
import CartLayout from "./Cart/CartLayout";
import Snackbar from "./Snackbar/Snackbar";
import ProductView from "./Product/ProductView";
import PrivateRoute from "./Auth/PrivateRoute";
import Login from "./Login/Login";
import Signup from "./Login/Signup";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      {["/login", "/signup"].includes(location.pathname) ? null : <NavLayout />}
      <Snackbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/book/:id" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/cart" element={<CartLayout />} />
        <PrivateRoute path="/wishlist" element={<WishlistLayout />} />
      </Routes>
    </div>
  );
}
