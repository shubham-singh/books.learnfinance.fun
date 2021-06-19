const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        firstName: action.payload.firstName,
        token: localStorage.setItem(
          "auth_learnfinance",
          JSON.stringify(action.payload.token)
        )
      };

    case "LOGOUT":
      return {
        loggedIn: false,
        token: localStorage.removeItem("auth_learnfinance")
      };

    case "USER_INFO":
      return {
        ...state,
        firstName: action.payload.firstName
      };

    default:
      return state;
  }
};

export default AuthReducer;
