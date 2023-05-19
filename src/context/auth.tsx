import { User, onAuthStateChanged } from "firebase/auth";
import React, { FC, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

interface AuthContextTypes {
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextTypes>({
  user: null,
  isLoading: false,
});

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setisLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
