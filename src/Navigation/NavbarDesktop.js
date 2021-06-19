import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Wishlist/WishlistContext";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Auth/AuthContext";

const NavbarDesktop = () => {
  const { wishlist } = useWishlist();
  const { items } = useCart();
  const { user, authDispatch } = useAuth();
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
      <div className="site-nav-left">
        {userHandler()}
        <li>
          <Link to="/wishlist">
            <div>
              Wishlist
              <span className="txt-badge txt-badge-secondary">
                {wishlist.length}
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div>
              Cart
              <span className="txt-badge txt-badge-secondary">{items}</span>
            </div>
          </Link>
        </li>
        <li className="pointer" onClick={logoutHandler}>
          {user.loggedIn ? "Logout" : null}
        </li>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
