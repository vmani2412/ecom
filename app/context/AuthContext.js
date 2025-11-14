"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);


  // 🧠 Keep user logged in on page refresh
  useEffect(() => {
    const storedAccess = localStorage.getItem("access_token");

    if (storedAccess ) {
      setAccessToken(storedAccess);
      // Ideally fetch user profile here
      setUser({ username: "ExistingUser" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, setUser}} >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy usage
export function useAuth() {
  return useContext(AuthContext);
}
