import { useCart } from "./CartContext";
import ChangeQuantity from "./ChangeQuantity";
import { useWishlist } from "../Wishlist/WishlistContext";
import { useSnackbar } from "../Snackbar/SnackbarContext";

const isItemInCart = (cartArr, product) => {
  return cartArr.some((item) => item._id === product._id);
};

const AddToCart = ({ product, wishlistView, text }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { snackbarDispatch } = useSnackbar();

  const inCart = isItemInCart(cart, product);

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
      <button
        className="btn btn-classic shadow w-full"
        onClick={() => {
          if (wishlistView) {
            cartDispatch({ type: "ADD_TO_CART", payload: product });
            wishlistDispatch({
              type: "ADD_OR_REMOVE_WISHLIST",
              payload: product
            });
            snackbarDispatch({
              type: "SHOW_SNACKBAR",
              payload: "Moved to Cart"
            });
          } else {
            cartDispatch({ type: "ADD_TO_CART", payload: product });
            snackbarDispatch({
              type: "SHOW_SNACKBAR",
              payload: "Added to Cart"
            });
          }
        }}
      >
        {text}
      </button>
    );
  }
};

export default AddToCart;
