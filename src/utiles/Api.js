import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const burl = "http://localhost:8080";

const api = {
  login: function (email, password) {
    return axios.post(
      `${burl}/user/login`,
      { email, password },
      { headers: headers }
    );
  },
  signup: function (send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },
  isAuth: function () {
    return localStorage.getItem("token") !== null;
  },
  logout: function () {
    localStorage.clear();
  },
};

export default api;
