import { createContext } from 'react';

//Context that is used to store data accessible from the top level by relevant components 
//requiring this data to process thier internal states
export const AuthContext = createContext({
  isLoggedIn: false, // flag to hold user logged in or not
  userId: null,      // userid returned after signup
  handymanId: null,  //handymanid returned after signup
  servicehid: null,  //service id returned after creating a new service request
  token: null,       // received token from jwt backend 
  location: null,    //location info during handyman search
  slist: [],         //list of services selected by user
  ulogin: () => {},
  hlogin: () => {},
  ulogout: () => {},
  hlogout: () => {},
  setloc: () => {},
  setslist: () => {},
  setshid: () => {},
});