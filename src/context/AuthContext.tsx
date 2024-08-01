// src/AuthProvider.js
import { auth } from "@/lib/firebase/config";
import { User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{ currentUser: User | null }>({
  currentUser: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useUserContext = () => useContext(AuthContext);
