import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(email, password) {
    return axios.post(`${burl}/user/signup`, {email, password}, { headers: headers });
  },
  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  },
  getProduct: function() {
    return axios.get(`${burl}/product/getAllproduct`);
  },
  addProduct: function(name, description, quantity) {
    return axios.post(
      `${burl}/product/addproduct`,
      {
        name,
        description,
        quantity
      },
      {
        headers: headers
      }
    );
  }
};