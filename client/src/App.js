import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignUp from "./pages/signUp";
import Nav from "./components/Navbar"
// import Books from "./pages/Books";
// import Nav from "./components/Nav";
function App() {
  return (
    <div>
        <Router>
       {/* < SignUp /> */}
         <Nav/>
         <Route exact path="/signup" component={SignUp} />
        </Router>
    </div>
  );
}
export default App;