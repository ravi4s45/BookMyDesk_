import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm Meeting Details Data" />
            <List>
              <ListItem>
                <ListItemText primary="Date and Time" secondary={DateAndTime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Floor Number" secondary={FloorNo} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={Location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Name of the Firm" secondary={NameOfOrg} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Purpose" secondary={Purpose} />
              </ListItem>
              <ListItem>
                <ListItemText primary="MeetingAgenda" secondary={MeetingAgenda} />
              </ListItem>
              <ListItem>
                <ListItemText primary="ResourcesAvailable" secondary={ResourcesAvailable} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Requirements" secondary={Requirements} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Edit</Button>

            <Button
              color="error"
              variant="contained"
              onClick={this.back}
            >Delete</Button>

            <Button
              color="error"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Check In </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
