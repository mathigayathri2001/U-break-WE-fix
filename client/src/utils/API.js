//Imports
import axios from 'axios'

const urlParameters = data => {
  return "?" + Object.keys(data).map(key => key + '=' + data[key]).join('&');
}

const urlParameters1 = data => {
  return "?" + Object.keys(data).map(key => key + '=' + data[key]);
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
  // Gets the user with the given id
  getHandymans: function(query,userData) {
    console.log('client api handyman')
    console.log(query)
    //console.log(userData)
  return axios.get("/api/handyman" + urlParameters(query),{params: {service: userData}});
  },
  // // Deletes the user with the given id
  // deleteHandyman: function (id) {
  //   return axios.delete('/api/handyman/' + id)
  // },
  // Saves a user to the database
  saveHandyman: function (handymanData) {
    return axios.post('/api/handyman/signup', handymanData)
  },

  getHandymanById: function (id) {
    console.log('gethandybanmyid')
    console.log(id)
    return axios.get('/api/handyman/' + id)
  },
  //login handyman
  handymanLogin: function (handymanData) {
    return axios.post('/api/handyman/login', handymanData)
  },

  getService: function () {
    return axios.get('/api/service/')
  },
  // // Saves an requested handmany into the database
saveserviceRequest: function(servicerequestData) {
  console.log('clientside api')
  console.log(servicerequestData)
  return axios.post("/api/servicerequest/add", servicerequestData);
},

getuserview:function(query) {
  console.log('client api query')
  console.log(query)
  console.log(urlParameters1(query))
  //console.log(userData)
return axios.get("/api/servicerequest" + urlParameters1(query));
}


}
