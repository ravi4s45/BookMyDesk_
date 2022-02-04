import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword";
import EventBus from "./common/EventBus";
import BookingDesk from "./components/componentsPart3/BookingDesk"
import BookingRoomdetails from "./components/componentsPart3/BookingMeetingRoom"
import Editprofile from "./components/componentsPart2/Editprofile";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [Edit,setEdit] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
     if(user){
      setCurrentUser(user.data);
     }
     else{
     setCurrentUser("");
     }
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  const handleEditProfile = () =>{
    setEdit(true);
  }
  return (
    <div >
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          BookMyDesk
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>


          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.designation}
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/EditProfile"} className="nav-link">
              <a  style={{width:'10%',height:'10%'}}><span onClick={handleEditProfile} className="fa fa-fw fa-user fa-1x" ></span></a>
        
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/SetNewPassword" component={SetNewPassword} />
          <Route path="/BookDesk" component={BookingDesk} />
          <Route path="/BookMeetingRoom" component={BookingRoomdetails} />
        </Switch>
      </div>
      
      {Edit?<Editprofile/>:null}
    </div>
  );
};

export default App;
