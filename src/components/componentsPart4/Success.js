import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Link } from "react-router-dom";
const Success = () => {
    const [show,setShow] = useState(true);
   const handleShow = () =>{
     setShow(false);
   }
    return (
      <div>
      {show?(
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Booking</h1>
            <Link to={"/profile"} className="nav-link">
              <button onClick={handleShow} className="btn btn-dark">Click Here</button> 
            </Link>
           
          </Dialog>
        </>
      </MuiThemeProvider>
      ):null
      }
      </div>
    );
  
}

export default Success;
