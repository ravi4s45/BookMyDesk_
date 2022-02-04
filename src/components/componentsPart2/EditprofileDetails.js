import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Draw from './Drawer';



export class EditprofileDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Meeting Details" />
           <Draw/>
                
                <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm</Button>
        <button onClick={()=>console.log("Choose Room")} class="button button2">Cancel</button>
            
            
            </Dialog>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default EditprofileDetails;