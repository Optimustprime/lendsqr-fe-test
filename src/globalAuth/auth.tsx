import React, { createContext } from "react";

export interface IAuth {
  email: string;
  password: string;
}

export type AuthContextType = {
  user: IAuth | null;
  isLoggedIn: boolean;
  loading: boolean;
  getUser: () => IAuth | void;
};

type Props = {
  children?: React.ReactNode;
  state?: IAuth | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<IAuth | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const getUser = () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ loading, isLoggedIn, user, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default UserProvider;
