import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login'
import HandySignup from './pages/handysignUp'
import Nav from './components/Navbar'
import { AuthContext } from './utils/auth-context'
import Handylogin from './components/Handylogin'
import Userlogin from './components/Userlogin'
import HandySearch from './pages/handysearch'
import Home from './pages/homepage'
import Order from './pages/serviceorder'

function App () {
  const [token, setToken] = useState(false)
  const [userId, setUserId] = useState(false)
  const [handymanId, setHandymanId] = useState(false)

  const login = useCallback((uid, token) => {
    setToken(token)
    setUserId(uid)
    setHandymanId(uid)
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setHandymanId(null)
  }, [])

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
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/handysignUp' component={HandySignup} />
          <Route exact path='/handylogin' component={Handylogin} />
          <Route exact path='/userlogin' component={Userlogin} />
          <Route exact path='/handysearch' component={HandySearch} />
          <Route exact path='/serviceorder' component={Order} />
        </Router>
      </AuthContext.Provider>
    </div>
  )
}
export default App
