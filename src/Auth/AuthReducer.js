const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        token: localStorage.setItem("auth_learnfinance", action.payload)
      };

    case "LOGOUT":
      return {
        loggedIn: false,
        token: localStorage.removeItem("auth_learnfinance")
      };

    default:
      return state;
  }
};

export default AuthReducer;
