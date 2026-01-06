import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (email, pass) => {
    if (email == "sathish@gmail.com" && pass == "1234") {
      setIsLoggedIn(true);
      return true;
    } else setIsLoggedIn(false);
    return false;
  };

  const logout =()=>
  {
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value= {{login}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
