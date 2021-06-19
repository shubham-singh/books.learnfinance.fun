import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { login } from "../utils/serverRequest";
import { useSnackbar } from "../Snackbar/SnackbarContext";

const Login = () => {
  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();

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
    if (user.loggedIn) {
      if (state?.from === null) {
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
          Learn Finance
        </h1>
        <input
          className="m-xs p-s"
          type="email"
          placeholder="Email"
          name="email"
          value={loginInfo.email}
          onChange={onChangeHandler}
          required
        />
        <input
          className="m-xs p-s"
          type="password"
          placeholder="Password"
          name="password"
          value={loginInfo.password}
          onChange={onChangeHandler}
          required
        />
        <button className="btn btn-classic shadow mt-l" type="submit">
          Login
        </button>
        <button
          className="btn btn-classic glow mt-l"
          onClick={handleGuestLogin}
        >
          Login with Guest account
        </button>
      </form>
      <p className="mt-xl pointer" onClick={() => navigate("/signup")}>
        Don't have an account? Signup now!
      </p>
    </div>
  );
};

export default Login;
