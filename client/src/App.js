import React, { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login'
import HandySignup from './pages/handysignUp'
import { AuthContext } from './utils/auth-context'
import Handylogin from './components/Handylogin'
import Userlogin from './components/Userlogin'
import HandySearch from './pages/handysearch'
import Home from './pages/homepage'
import ServiceRequest from './pages/servicerequest'
import ViewUserRequest from './pages/viewUserRequest'
import ViewHandyRequest from './pages/viewHandyRequest'
import Footer from './components/Footer'
import "./App.css"

//Main function which renders all the components making up the application
function App () {
  //Hook definitions to handle setting of auth context data
  const [token, setToken] = useState(false)
  const [userId, setUserId] = useState()
  const [handymanId, setHandymanId] = useState(false)
  const [servicehid, setShId] = useState(false)
  const [location, setLocation] = useState();
  const [slist, setSlist] = useState([])

  // callback used to store userid and generated token(returned by jwt backend)
  // in auth context after user signup 
  const ulogin = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: uid, token: token })
    );
  }, [])

  //any updates to the login info would trigger context update and local storage update through
  //useEffect
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token) {
      ulogin(storedData.userId, storedData.token);
    }
  }, [ulogin]);

  // callback used to store handymanid and generated token(returned by jwt backend)
  // in auth context after handyman signup
  const hlogin = useCallback((uid, token) => {
    setToken(token);
    setHandymanId(uid);
    localStorage.setItem(
      'handymanData',
      JSON.stringify({ handymanId: uid, token: token })
    );
  }, [])

  //any updates to the login info would trigger context update and local storage update through
  //useEffect
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('handymanData'));
    if (storedData && storedData.token) {
      hlogin(storedData.userId, storedData.token);
    }
  }, [hlogin]);

  //callback used to clear auth context data of user after he logs out
  const ulogout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setLocation(null);
    setSlist(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('userlocation');
  }, [])

  //callback used to clear auth context data of handyman after he logs out
  const hlogout = useCallback(() => {
    setToken(null);
    setHandymanId(null);
    localStorage.removeItem('handymanData');   
  }, [])

  //callback used to set location field in auth context
  const setloc = useCallback((location) => {
    setLocation(location);
    localStorage.setItem(
      'userlocation',
      JSON.stringify({ location: location })
    );
  }, [])

  //capture location state updates immediately through useEffect by triggering setloc
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userlocation'));
    if (storedData && storedData.location) {
      setloc(storedData.location);
    }
  }, [setloc]);

  //callback used to set service lists selected by user in auth context
  const setslist = useCallback((slist) => {
    setSlist(slist);
  }, [])

  //callback used to set handymanid field from service request in auth context
  const setshid = useCallback((servicehid) => {
    setShId(servicehid);
  }, [])

  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          handymanId: handymanId,
          servicehid: servicehid,
          location: location,
          slist : slist,
          ulogin: ulogin,
          hlogin: hlogin,
          ulogout: ulogout,
          hlogout: hlogout,
          setloc: setloc,
          setslist : setslist,
          setshid: setshid,
        }}
      >
        <Router>
          <div style={{marginBottom:"90px"}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/handysignUp' component={HandySignup} />
          <Route exact path='/handylogin' component={Handylogin} />
          <Route exact path='/userlogin' component={Userlogin} />
          <Route exact path='/handysearch' component={HandySearch} />
          <Route exact path='/servicerequest' component={ServiceRequest} />
          <Route exact path='/viewrequest' component={ViewUserRequest} />
          <Route exact path='/viewhandyrequest' component={ViewHandyRequest} />
          </Switch>
          </div>
          <Footer/>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}
export default App
