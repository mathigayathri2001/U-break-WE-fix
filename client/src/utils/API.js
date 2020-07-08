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
    return axios.post("/api/user/", userData);
  },
  // login user
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  //logout user
  logout: function() {
    return axios.post("/api/user/logout");
  }
};