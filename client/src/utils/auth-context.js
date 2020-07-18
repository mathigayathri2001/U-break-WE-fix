import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  handymanId: null,
  token: null,
  location: null,
  slist: [],
  ulogin: () => {},
  hlogin: () => {},
  logout: () => {},
  setloc: () => {},
  setslist: () => {},
});