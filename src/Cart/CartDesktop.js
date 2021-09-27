import ProductHorizontal from "../Product/ProductHorizontal";
import { useCart } from "./CartContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { Link, useNavigate } from "react-router-dom";
import { checkout } from "../utils/serverRequest";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import React from "react";

const CartDesktop = () => {
  const { cart, total, items, cartDispatch } = useCart();
  const { language } = useLocalisation();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  if (items === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">{lang[language].emptyCart}</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            {lang[language].goShopping}
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart-desktop">
        <div className="cart-products">
          {cart.map(({ book, quantity }) => {
            return (
              <React.Fragment key={book._id}>
                <ProductHorizontal
                  product={book}
                  cartView={true}
                />
                <hr className="w-full" />
              </React.Fragment>
            );
          })}
        </div>
        <div className="cart-summary m-xl shadow">
          <h1 className="large m-xl">{lang[language].summary}</h1>
          <div className="cart-list">
            {cart.map((product) => {
              return (
                <span key={product._id} className="flex-r justify-b m-m">
                  <span>
                    {product.book.title.length > 35
                      ? product.book.title.slice(0, 35) + "..."
                      : product.book.title}
                  </span>
                  <span>x {product.quantity}</span>
                </span>
              );
            })}
          </div>
          <h2 className="m-m">
            {lang[language].total}: &#8377; {total.toLocaleString()}
          </h2>
          <button className="btn btn-classic shadow" onClick={() => checkout(snackbarDispatch, cartDispatch, navigate)}>

              {lang[language].checkout}
          </button>
        </div>
      </div>
    );
  }
};

export default CartDesktop;
