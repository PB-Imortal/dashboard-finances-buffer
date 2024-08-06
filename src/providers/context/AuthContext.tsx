import { createContext, ReactNode, useContext, useState } from "react";

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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};

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
