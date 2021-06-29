import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "../Snackbar/SnackbarContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { useAuth } from "../Auth/AuthContext";
import { login } from "../utils/serverRequest";

const Login = () => {
  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const { language } = useLocalisation();

  const navigate = useNavigate();
  const { state } = useLocation();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginInfo, authDispatch, snackbarDispatch);
  };

  const handleGuestLogin = () => {
    login(
      {
        email: "shubham@gmail.com",
        password: "Bitcoin"
      },
      authDispatch,
      snackbarDispatch
    );
    setLoginInfo({
      email: "shubham@gmail.com",
      password: "Bitcoin"
    });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    if (user.loggedIn) {
      if (state !== null) {
        navigate(state.from);
      } else {
        navigate("/");
      }
    }
  });

  return (
    <div className="flex-column-center form-container">
      <form className="flex-c form-credentials shadow" onSubmit={handleLogin}>
        <h1
          className="heading m-null p-s pointer"
          onClick={() => navigate("/")}
        >
          {lang[language].learnFinance}
        </h1>
        <input
          className="m-xs p-s"
          type="email"
          placeholder={lang[language].email}
          name="email"
          value={loginInfo.email}
          onChange={onChangeHandler}
          required
        />
        <input
          className="m-xs p-s"
          type="password"
          placeholder={lang[language].password}
          name="password"
          value={loginInfo.password}
          onChange={onChangeHandler}
          required
        />
        <button className="btn btn-classic shadow mt-l" type="submit">
          {lang[language].login}
        </button>
        <button
          className="btn btn-classic glow mt-l"
          onClick={handleGuestLogin}
        >
          {lang[language].loginAsGuest}
        </button>
      </form>
      <p className="mt-xl pointer" onClick={() => navigate("/signup")}>
        {lang[language].signupText}
      </p>
    </div>
  );
};

export default Login;
