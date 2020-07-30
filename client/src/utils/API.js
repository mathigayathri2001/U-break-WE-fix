//Imports
import axios from 'axios'

const urlParameters = data => {
  return (
    '?' +
    Object.keys(data)
      .map(key => key + '=' + data[key])
      .join('&')
  )
}

//front end routes for user
export default {
  // Gets all user
  getUser: function () {
    return axios.get('/api/user/')
  },
  // Gets the user with the given id
  getUserById: function (id) {
    return axios.get('/api/user/' + id)
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete('/api/user/' + id)
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post('/api/user/signup', userData)
  },
  // login user
  userLogin: function (userData) {
    return axios.post('/api/user/login', userData)
  },
  //logout user
  logout: function () {
    return axios.post('/api/user/logout')
  },
  // Gets all handymen
  getHandyman: function () {
    return axios.get('/api/handyman/')
  },
  // Gets handyman data with the given id
  getHandymans: function (query, userData) {
    console.log(query)
    //console.log(userData)
    return axios.get('/api/handyman' + urlParameters(query), {
      params: { service: userData }
    })
  },
  // Saves a user to the database
  saveHandyman: function (handymanData) {
    return axios.post('/api/handyman/signup', handymanData)
  },

  //get handyman data
  getHandymanById: function (query) {
    console.log(query)
    return axios.get('/api/handyman/' + query)
  },
  //login handyman
  handymanLogin: function (handymanData) {
    return axios.post('/api/handyman/login', handymanData)
  },

  //fetches all services provided by this application
  getService: function () {
    return axios.get('/api/service/')
  },
  // // Saves an requested handyman into the database
  saveserviceRequest: function (servicerequestData) {
    console.log(servicerequestData)
    return axios.post('/api/servicerequest/add', servicerequestData)
  },

  // fetches all service requests for a user
  getuserview: function (query) {
    console.log(query)
    return axios.get('/api/servicerequest' + urlParameters(query))
  },

  // fetches all service requests for a handyman
  gethandyview: function (query) {
    console.log(query)
    return axios.get('/api/servicerequest' + urlParameters(query))
  },

  //updates the status of service request from handyman
  setReqStatus: function (statusData) {
    console.log(statusData)
    return axios.post('/api/servicerequest/update',statusData)
  }
}
