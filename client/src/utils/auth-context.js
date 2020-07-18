import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  handymanId: null,
  servicehid: null,
  token: null,
  location: null,
  slist: [],
  ulogin: () => {},
  hlogin: () => {},
  ulogout: () => {},
  hlogout: () => {},
  setloc: () => {},
  setslist: () => {},
  setshid: () => {},
});