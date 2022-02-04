import React, { Component } from 'react';
import DeskDetails from './DeskDetails';
import Confirm from './Confirm';
import Success from './Success';


export class FinalBookingDesk extends Component {
  state = {
    step: 1,
    
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements} = this.state;
    const values =  { DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements }

    switch (step) {
      case 1:
        return (
          <DeskDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      
      case 2:
        return <Success />;
      default:
        (console.log('This is a Meeting Booking Manager with React.'))
    }
  }
}

export default FinalBookingDesk;