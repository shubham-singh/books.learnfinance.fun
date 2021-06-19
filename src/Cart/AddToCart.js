import { useCart } from "./CartContext";
import ChangeQuantity from "./ChangeQuantity";
import { useWishlist } from "../Wishlist/WishlistContext";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import { addToCart } from "../utils/serverRequest";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const isItemInCart = (cartArr, product) => {
  return cartArr.some(({ book }) => book._id === product._id);
};

const AddToCart = ({ product, wishlistView }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { snackbarDispatch } = useSnackbar();
  const { user } = useAuth();
  const navigate = useNavigate();

  const inCart = isItemInCart(cart, product);

  const handleClick = () => {
    if (!user.loggedIn) {
      return navigate("/login");
    }
    addToCart(
      product,
      wishlistView,
      cartDispatch,
      wishlistDispatch,
      snackbarDispatch
    );
  };

  if (inCart) {
    return <ChangeQuantity product={product} />;
  } else if (!product.inStock) {
    return (
      <button
        disabled
        className="btn btn-classic btn-disabled secondary shadow w-full"
      >
        Out of Stock
      </button>
    );
  } else {
    return (
      <button className="btn btn-classic shadow w-full" onClick={handleClick}>
        Add To Cart
      </button>
    );
  }
};

export default AddToCart;
