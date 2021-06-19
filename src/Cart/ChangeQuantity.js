import { useSnackbar } from "../Snackbar/SnackbarContext";
import { changeQuantity } from "../utils/serverRequest";
import { useCart } from "./CartContext";

const item = (cartArr, product) => {
  return cartArr.find((item) => item.book._id === product._id);
};

const ChangeQuantity = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { snackbarDispatch } = useSnackbar();
  const cartProduct = item(cart, product);

  const handleIncrement = () => {
    changeQuantity(cartProduct, cartProduct.quantity + 1, snackbarDispatch);
    cartDispatch({ type: "INCREMENT", payload: cartProduct });
  };

  const handleDecrement = () => {
    changeQuantity(cartProduct, cartProduct.quantity - 1, snackbarDispatch);
    cartDispatch({ type: "DECREMENT", payload: cartProduct });
  };

  return (
    <div className="change-quantity">
      <button className="btn btn-classic shadow" onClick={handleDecrement}>
        -
      </button>
      <h2>{cartProduct.quantity}</h2>
      <button className="btn btn-classic shadow" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
