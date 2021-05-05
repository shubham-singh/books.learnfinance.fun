import { useCart } from "./CartContext";

const item = (cartArr, product) => {
  return cartArr.find((item) => item._id === product._id);
};

const ChangeQuantity = ({ product }) => {
  const { cart, cartDispatch } = useCart();

  const cartProduct = item(cart, product);

  return (
    <div className="change-quantity">
      <button
        className="btn btn-classic shadow"
        onClick={() => {
          cartDispatch({ type: "DECREMENT", payload: cartProduct });
        }}
      >
        -
      </button>
      <h2>{cartProduct.quantity}</h2>
      <button
        className="btn btn-classic shadow"
        onClick={() =>
          cartDispatch({ type: "INCREMENT", payload: cartProduct })
        }
      >
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
