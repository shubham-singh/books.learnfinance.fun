import Product from "../Product/Product";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { checkout } from "../utils/serverRequest";
import { useSnackbar } from "../Snackbar/SnackbarContext";

const CartMobile = () => {
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
      <div className="products">
        <h2 className="m-m">{lang[language].cart}</h2>
        <div className="cart-products">
          {cart.map(({ book, quantity }) => {
            return (
              <>
                <Product key={book._id} product={book} cartView={true} />
                <hr className="w-full" />
              </>
            );
          })}
        </div>
        <div className="empty-space"></div>
        <div className="stick-b large" onClick={() => checkout(snackbarDispatch, cartDispatch, navigate)}>
          <span>{lang[language].checkout}</span>
          <span>&#8377; {total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
};

export default CartMobile;
