import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../assets/icons/MenuIcon.svg";
import { ReactComponent as LoginIcon } from "../assets/icons/LoginIcon.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogoutIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import { useAuth } from "../Auth/AuthContext";
import { useSnackbar } from "../Snackbar/SnackbarContext";

const NavbarMobile = () => {
  const [navOpen, setNavOpen] = useState("no");

  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged out"
    });
    navigate("/");
  };

  const userHandler = () => {
    if (user.loggedIn) {
      return (
        <div className="popup-heading">
          <div>Hi, {user.firstName}</div>
          <div>
            <LogoutIcon onClick={logoutHandler} fill="black" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="popup-heading" onClick={() => navigate("/login")}>
          <LoginIcon />
          <CloseIcon />
        </div>
      );
    }
  };

  if (navOpen === "yes") {
    return (
      <div className="popup hide-d">
        <div className="popup-empty" onClick={() => setNavOpen("no")}></div>
        <div
          className="popup-content popup-half bold large"
          onClick={() => setNavOpen("no")}
        >
          {userHandler()}
          <Link to="/books">Books</Link>
          <Link to="/wishlist">
            <div className="flex-row-center">Wishlist</div>
          </Link>
          <Link to="/cart">
            <div className="flex-row-center">Cart</div>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => setNavOpen("yes")}
          className="btn btn-floating secondary shadow p-null"
        >
          <MenuIcon />
        </button>
      </div>
    );
  }
};

export default NavbarMobile;
