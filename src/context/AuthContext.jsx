import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/api.service";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const defaultAuthState = {
  isAuthenticated: false,
  token: null,
  user: null, 
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(defaultAuthState); 
 
  const login= (token)=>{
      if(token){
        localStorage.setItem('token',token)
        setAuthData({
          ...authData,
        isAuthenticated:true,
        token,
        })
      }
  }

  const clearAuthData = () => {
    localStorage.removeItem("token");
    setAuthData(defaultAuthState);
  };

  const getLoggedInUser=async()=>{
    try {
      const res= await getUser()
    setAuthData({
      ...authData,
      isAuthenticated:true,
      user:res.data.user
    })
    } catch (error) {
      if(error.status=400){
clearAuthData()
      }
    }
    
  }
 

  return (
    <AuthContext.Provider value={{ authData,login, clearAuthData,getLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};
