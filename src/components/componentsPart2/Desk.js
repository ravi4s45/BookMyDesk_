import React, {Component} from 'react'
import './cssPart2/main.css'
import AuthService from "../services/auth.service";
import FinalCheckIn from "../componentsPart4/FinalCheckIn"
const Desk = () =>{
    const [show,setShow] = useState(false);
    const handleShow = () =>{
      setShow(true);
    }
        return(
            <div className='h2'>
            <h2>My Reservations</h2>
            <button type='button' class='button'onClick={handleShow}>9:30am to 6:00pm Desk No:1 Floor No:2</button>
            <button type='button' class='button'onClick={handleShow}>9:30am to 6:00pm Desk No:2 Floor No:2</button>
            <button type='button' class='button'onClick={handleShow}>9:30am to 6:00pm Desk No:3 Floor No:2</button>
            <button type='button' class='button'onClick={handleShow}>9:30am to 6:00pm Desk No:4 Floor No:2</button>
            </div>
            {show?<FinalCheckIn/>:null}
        )
    
 
}
export default Desk;