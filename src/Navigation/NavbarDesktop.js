import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Wishlist/WishlistContext";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Auth/AuthContext";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import { ReactComponent as CartIcon } from "../assets/icons/CartIcon.svg";
import { ReactComponent as WishlistNavIcon } from "../assets/icons/WishlistNavIcon.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogoutIcon.svg";

const NavbarDesktop = () => {
  const { wishlist } = useWishlist();
  const { items } = useCart();
  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const userHandler = () => {
    if (user.loggedIn) {
      return <li>Hi, {user.firstName}</li>;
    } else {
      return (
        <li className="pointer" onClick={() => navigate("/login")}>
          Login
        </li>
      );
    }
  };

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged out"
    });
    navigate("/");
  };

  return (
    <nav className="nav nav-classic pt-xs pb-xs">
      <div>
        <h1 className="site-nav-left">
          <Link to="/">
            <h1 className="heading">Learn Finance</h1>
          </Link>
        </h1>
      </div>
      <div className="flex-row-center site-nav-left">
        {userHandler()}
        <li>
          <Link to="/wishlist">
            <div className="flex-row-center">
              <WishlistNavIcon />
              <span className="txt-badge txt-badge-secondary">
                {wishlist.length}
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="flex-row-center">
              <CartIcon />
              <span className="txt-badge txt-badge-secondary">{items}</span>
            </div>
          </Link>
        </li>
        <li className="pointer" onClick={logoutHandler}>
          {user.loggedIn ? <LogoutIcon /> : null}
        </li>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
