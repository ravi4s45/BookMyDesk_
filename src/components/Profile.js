import React ,{useState} from "react";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import FinalCheckIn from './componentsPart4/FinalCheckIn'
import { Switch, Route, Link } from "react-router-dom";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [show,setShow] = useState(false);
  const handleShow = () =>{
    setShow(true);
  }
  return (
    <div>
    <div className="container" style = {{marginTop:'100px'}}>
     
      <div className="card mb-3" style={{ width: '100%' }}>
          <div className="row no-gutters">
              <div className="col-md-4">
                 
              <header className="jumbotron">
      <h3 style={{marginLeft:'8%'}}>Book Your</h3> 
      {/* <p><input type="date" id="start" min="20xx-01-01" max="20xx-12-31"></input></p> */}
     <Link to={"/BookDesk"}><button type="button" className="btn btn-dark"  onClick={()=>console.log("Choose Desk")}>Desk</button>
     </Link> {'  '} {'  '}
     <Link to={"/BookMeetingRoom"}>
      <button type="button" className="btn btn-dark"  onClick={()=>console.log("Choose Meeting Room")}>Meeting</button>
      </Link>
      </header>
                  
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title">BookMyDesk</h5>
                      <p className="card-text">
                          We provide tools to check meeting rooms, desks & other spaces availability, employee can check these availabilities and book accordingly.
                      </p>
                      <p className="card-text">
                          All meeting rooms listed on a page gathered across your offices, wherein employees can book them while sitting in anywhere.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
    <div className="container" style = {{marginTop:'50px'}}>
    <ul style={{display:'flex',flexDirection:'column' ,justifyContent:'space-between'}}>
    <h3 style={{textAlign: 'center',marginBottom:'50px'}}>My Reservations</h3>
           
            <button type='button' className="btn btn-dark" onClick={handleShow}>9:30am to 6:00pm Desk No:1 Floor No:2</button>
             <br/>
            <button type='button' className="btn btn-dark" onClick={handleShow}>9:30am to 6:00pm Desk No:2 Floor No:2</button>
            <br/>
            <button type='button' className="btn btn-dark" onClick={handleShow}>9:30am to 6:00pm Desk No:3 Floor No:2</button>
            <br/>
            <button type='button' className="btn btn-dark" onClick={handleShow}>9:30am to 6:00pm Desk No:4 Floor No:2</button>
            
    </ul>     
    </div>
    {show?<FinalCheckIn/>:null}
    </div>
  );
};

export default Profile;
