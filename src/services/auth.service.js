import axios from "axios";
import { Auth } from "two-step-auth";
//import connection from "../common/db"
const API_URL = "http://localhost:3001/";

const register = (usernameReg, emailReg, passwordReg) => {
    return axios.post(API_URL + "register", {
        username: usernameReg,
        email:emailReg,
        password: passwordReg,
    }).then((response) => {
    console.log(response);
});
    
    //connection.query(AddQuery, (err) => {
    //    if(err) return err
    //    else return "success"
    //})
    
};

const login = (email,password) => {
  return axios
    .post(API_URL + "login", {
        email,
        password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};



async function OTPVerification(emailId) {
    
  
   const result = await Auth(emailId, "BookMyDesk");
    //console.log(res);
    //console.log(res.mail);
    console.log(result.OTP);
    //console.log(res.success);
}

export default {
  register,
  login,
  logout,
    getCurrentUser,
    OTPVerification
};
