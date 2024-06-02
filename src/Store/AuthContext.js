import React, { createContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  let logoutTimer;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    setLogoutTimer();
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    clearTimeout(logoutTimer);
  }, [logoutTimer]);

  const setLogoutTimer = useCallback(() => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      logoutHandler();
      alert("You have been logged out due to inactivity.");
    }, 5 * 60 * 10000); // 5 minutes
  }, [logoutHandler, logoutTimer]);

  useEffect(() => {
    if (token) {
      setLogoutTimer();
    }
  }, [token, setLogoutTimer]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
