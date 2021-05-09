import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Login = () => {
  // const { auth } = useAuth();

  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = () => {
    setIsUserLoggedIn((isUserLoggedIn) => !isUserLoggedIn);
    navigate(state.from);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
