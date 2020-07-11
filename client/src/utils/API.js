//Imports
import axios from "axios";

//front end routes for user 
export default {
  // Gets all user
  getUser: function() {
    return axios.get("/api/user/");
  },
  // Gets the user with the given id
  getusers: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  // login user
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  //logout user
  logout: function() {
    return axios.post("/api/user/logout");
  },
  // Gets all handymen
  getHandyman: function() {
    return axios.get("/api/handyman/");
  },
  // Gets the user with the given id
  getHandyman: function(id) {
  return axios.get("/api/handyman/" + id);
  },
  // Deletes the user with the given id
  deleteHandyman: function(id) {
  return axios.delete("/api/handyman/" + id);
  },
  // Saves a user to the database
  saveHandyman: function(handymanData) {
  return axios.post("/api/handyman/signup", handymanData);
  },
  //login handyman
  // login: function(handymanData) {
  //   return axios.post("/api/handyman/login", handymanData);
  // },
};