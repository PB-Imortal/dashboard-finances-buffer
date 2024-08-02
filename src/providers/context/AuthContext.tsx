import { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  userId: string;
  setUserId: (userId: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userId: "",
  setUserId: () => {},
  setIsLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userId, setUserId, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
