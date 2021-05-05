import { Link } from "react-router-dom";
import { useWishlist } from "../Wishlist/WishlistContext";
import { useCart } from "../Cart/CartContext";

const NavbarDesktop = () => {
  const { wishlist } = useWishlist();
  const { items } = useCart();

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
      </div>
    </nav>
  );
};

export default NavbarDesktop;
