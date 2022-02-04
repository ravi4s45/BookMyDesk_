import axios from "axios";
import genUsername from "unique-username-generator";
//import connection from "../common/db"
const API_URL = "https://localhost:44368/Register/";

const register = (usernameReg,designationReg, emailReg, passwordReg) => {
  const useridreg = genUsername.generateFromEmail(
    emailReg,
    5
  );
    return axios.post(API_URL , {
          UserId:useridreg,
          Name: usernameReg,
          Designation:designationReg,
          Password: passwordReg,
          Email:emailReg     
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
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      console.log(response);
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};



export default {
  register,
  login,
  logout,
    getCurrentUser
};
