import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import HandySignup from "./pages/handysignUp";
import Nav from "./components/Navbar";
import { AuthContext } from './utils/auth-context';
// import Searchbar from './components/Searchbar';
// import Books from "./pages/Books";
// import Nav from "./components/Nav";
function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [handymanId, setHandymanId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    setHandymanId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setHandymanId(null);
  }, []);

  return (
    <div>
      <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        handymanId: handymanId,
        login: login,
        logout: logout
      }}
    >
        <Router>
       {/* < SignUp /> */}
         <Nav/>
         {/* <Searchbar/> */}
         <Route exact path="/signup" component={SignUp} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/handysignUp" component={HandySignup} />
        </Router>
        </AuthContext.Provider>
    </div>
  );
}
export default App;