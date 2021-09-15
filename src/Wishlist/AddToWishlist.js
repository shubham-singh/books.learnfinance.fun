import { useCart } from "../Cart/CartContext";
import { useWishlist } from "./WishlistContext";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import { ReactComponent as WishlistIcon } from "../assets/icons/WishlistIcon.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { addOrRemoveFromWishlist } from "../utils/serverRequest";

const AddToWishlist = ({ product, cartView }) => {
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const { user } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const isItemInWishlist = (wishlistArr, product) => {
    return wishlistArr.some((wishlist) => wishlist._id === product._id);
  };

  const isWishlisted = isItemInWishlist(wishlist, product);

  const handleClick = () => {
    if (!user.loggedIn) {
      return navigate("/login");
    }
    addOrRemoveFromWishlist(
      product,
      cartView,
      cartDispatch,
      wishlistDispatch,
      snackbarDispatch
    );
  };

  return (
    <div className="card-dismiss shadow" onClick={handleClick}>
      <WishlistIcon
        style={isWishlisted ? { color: "#dc3545" } : { color: "white" }}
      />
    </div>
  );
};

export default AddToWishlist;
