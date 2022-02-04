import React, { useState } from 'react'
import "./BookingDesk.css"
import Button from "./CustomButtonComponent.js"
import FinalBookingMeeting from '../componentsPart4/FinalBookingMeeting'
import { getCurrentDate } from './Calen.js'


const BookingRoomdetails = () => {
    const [show,setShow] = useState(false);
    const handleShow = () =>{
      setShow(true);
    }

    return (
        <div className="container">

            <h1 className="heading"> Meeting Room </h1>

            <div className="headstyle">


                <input type="date" id="bookingdate" name="booking" defaultValue={getCurrentDate('-')} />

            </div>

            <br></br>

            <div style={{ display: 'flex', justifyContent: "space-around" }}>

                <div >
                    <div className="head">

                        <label for="appt">Start time</label>

                        <input type="time" id="appt" name="appt"
                             required />

                        <label for="appt">End time</label>

                        <input type="time" id="appt" name="appt"
                            required />

                        <br></br>

                        <label for="Floor No">Floor No:</label>
                        <select name="floor No" id="floor no">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>

                        </select>

                    </div>
                </div>


            </div>

            <div className="headstyle">
                <h4>Select a room </h4>
            </div>

            <div className="headstyle">
                <Button

                    backgroundColor="black"
                    color="white"
                    height="50px"
                    onClick={handleShow}
                    radius="10%"
                    width="80%"
                    children="Room No 1"

                />
            </div>



            <div className="headstyle" >
                <Button

                    backgroundColor="black"
                    color="white"
                    height="50px"
                    onClick={handleShow}
                    radius="10%"
                    width="80%"
                    children="Room No 2"
                />
            </div>


            <div className="headstyle" >
                <Button

                    backgroundColor="black"
                    color="white"
                    height="50px"
                    onClick={handleShow}
                    radius="10%"
                    width="80%"
                    children="Room No 3"
                />
            </div>

            <div className="headstyle">
                <Button

                    backgroundColor="black"
                    color="white"
                    height="50px"
                    onClick={handleShow}
                    radius="10%"
                    width="80%"
                    children="Room No 4"
                />
            </div>


            <div className="headstyle">
                <Button

                    backgroundColor="black"
                    color="white"
                    height="50px"
                    onClick={handleShow}
                    radius="10%"
                    width="80%"
                    children="Room No 5"
                />
            </div>
            {show?<FinalBookingMeeting/>:null}
            </div>
        
    )
}
export default BookingRoomdetails