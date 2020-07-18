import React, { useState, useCallback } from 'react'
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
  const [location, setLocation] = useState();
  const [slist, setSlist] = useState([])

  const ulogin = useCallback((uid, token) => {
    setToken(token)
    setUserId(uid)
  }, [])

  const hlogin = useCallback((uid, token) => {
    setToken(token)
    setHandymanId(uid)
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setHandymanId(null)
  }, [])

  const setloc = useCallback((location) => {
    setLocation(location)
  }, [])

  const setslist = useCallback((slist) => {
    setSlist(slist)
  }, [])

  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          handymanId: handymanId,
          location: location,
          slist : slist,
          ulogin: ulogin,
          hlogin: hlogin,
          logout: logout,
          setloc: setloc,
          setslist : setslist,
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
