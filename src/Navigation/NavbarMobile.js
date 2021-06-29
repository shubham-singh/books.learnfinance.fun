import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import { ReactComponent as MenuIcon } from "../assets/icons/MenuIcon.svg";
import { ReactComponent as LoginIcon } from "../assets/icons/LoginIcon.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogoutIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";

const NavbarMobile = () => {
  const [navOpen, setNavOpen] = useState("no");

  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const { language, setLanguage } = useLocalisation();
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
          <div>
            {lang[language].greeting} {user.firstName}
          </div>
          <div>
            <LogoutIcon onClick={logoutHandler} fill="black" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="popup-heading">
          <LoginIcon onClick={() => navigate("/login")} />
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
          <Link to="/books">{lang[language].books}</Link>
          <Link to="/wishlist">
            <div className="flex-row-center">{lang[language].wishlist}</div>
          </Link>
          <Link to="/cart">
            <div className="flex-row-center">{lang[language].cart}</div>
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
