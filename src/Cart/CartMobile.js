import Product from "../Product/Product";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartMobile = () => {
  const { cart, total, items } = useCart();

  if (items === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">Your cart is empty</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="m-m">Cart</h2>
        <div className="cart-products">
          {cart.map((product) => {
            return (
              <>
                <Product key={product._id} product={product} cartView={true} />
                <hr className="w-full" />
              </>
            );
          })}
        </div>
        <div className="empty-space"></div>
        <div className="stick-b large">
          <span>Checkout</span>
          <span>&#8377; {total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
};

export default CartMobile;
