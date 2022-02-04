import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const DeskDetails = (props) => {
  const continu = e => {
    e.preventDefault();
    props.nextStep();
  };
  const Refresh = ()=>{
    window.location.reload(false);
  }
 
   
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Meeting Details" />
            <h3 style={{alignContent:"center"}}>Desk No:2</h3>    
                <p style={{alignContent:"center"}}>Wednesday, May 26, 2021</p>
                
                <Button
              color="primary"
              variant="contained"
              onClick={continu}
            >Confirm</Button>
        <button onClick={Refresh} class="button button2">Cancel</button>
            
            
            </Dialog>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }


export default DeskDetails;