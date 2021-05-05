import ProductHorizontal from "../Product/ProductHorizontal";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartDesktop = () => {
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
      <div className="cart-desktop">
        <div className="cart-products">
          {cart.map((product) => {
            return (
              <>
                <ProductHorizontal
                  key={product._id}
                  product={product}
                  cartView={true}
                />
                <hr className="w-full" />
              </>
            );
          })}
        </div>
        <div className="cart-summary m-xl">
          <h1 className="large m-xl">Summary</h1>
          <div class="cart-list">
            {cart.map((item) => {
              return (
                <p className="flex-r justify-b m-l">
                  <span>{item.title}</span>
                  <span>x {item.quantity}</span>
                </p>
              );
            })}
          </div>
          <h2 className="m-m">Total: &#8377; {total.toLocaleString()}</h2>
          <button className="btn btn-classic shadow">Checkout</button>
        </div>
      </div>
    );
  }
};

export default CartDesktop;
