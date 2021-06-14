import { useState } from "react";
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
    console.log(loginInfo);
    e.preventDefault();
    login(loginInfo, authDispatch, snackbarDispatch);
    if (state?.from === null) {
      navigate(state.from);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex-row-center">
      <form className="flex-c" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={loginInfo.email}
          onChange={onChangeHandler}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={loginInfo.password}
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Login</button>
      </form>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default Login;
