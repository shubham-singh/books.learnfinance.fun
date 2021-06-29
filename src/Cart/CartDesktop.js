import ProductHorizontal from "../Product/ProductHorizontal";
import { useCart } from "./CartContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { Link } from "react-router-dom";

const CartDesktop = () => {
  const { cart, total, items } = useCart();
  const { language } = useLocalisation();

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
              <>
                <ProductHorizontal
                  key={book._id}
                  product={book}
                  cartView={true}
                />
                <hr className="w-full" />
              </>
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
          <button className="btn btn-classic shadow">
            {lang[language].checkout}
          </button>
        </div>
      </div>
    );
  }
};

export default CartDesktop;
