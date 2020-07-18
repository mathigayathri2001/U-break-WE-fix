import React, { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login'
import HandySignup from './pages/handysignUp'
import { AuthContext } from './utils/auth-context'
import Handylogin from './components/Handylogin'
import Userlogin from './components/Userlogin'
import HandySearch from './pages/handysearch'
import Home from './pages/homepage'
import ServiceRequest from './pages/servicerequest'

function App () {
  const [token, setToken] = useState(false)
  const [userId, setUserId] = useState()
  const [handymanId, setHandymanId] = useState(false)
  const [servicehid, setShId] = useState(false)
  const [location, setLocation] = useState();
  const [slist, setSlist] = useState([])

  const ulogin = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: uid, token: token })
    );
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token) {
      ulogin(storedData.userId, storedData.token);
    }
  }, [ulogin]);

  const hlogin = useCallback((uid, token) => {
    setToken(token);
    setHandymanId(uid);
    localStorage.setItem(
      'handymanData',
      JSON.stringify({ handymanId: uid, token: token })
    );
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('handymanData'));
    if (storedData && storedData.token) {
      hlogin(storedData.userId, storedData.token);
    }
  }, [hlogin]);

  const ulogout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setLocation(null);
    setSlist(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('userlocation');
  }, [])

  const hlogout = useCallback(() => {
    setToken(null);
    setHandymanId(null);
    localStorage.removeItem('handymanData');   
  }, [])

  const setloc = useCallback((location) => {
    setLocation(location);
    localStorage.setItem(
      'userlocation',
      JSON.stringify({ location: location })
    );
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userlocation'));
    if (storedData && storedData.location) {
      setloc(storedData.location);
    }
  }, [setloc]);

  const setslist = useCallback((slist) => {
    setSlist(slist);
  }, [])

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
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/handysignUp' component={HandySignup} />
          <Route exact path='/handylogin' component={Handylogin} />
          <Route exact path='/userlogin' component={Userlogin} />
          <Route exact path='/handysearch' component={HandySearch} />
          <Route exact path='/servicerequest' component={ServiceRequest} />
        </Router>
      </AuthContext.Provider>
    </div>
  )
}
export default App
