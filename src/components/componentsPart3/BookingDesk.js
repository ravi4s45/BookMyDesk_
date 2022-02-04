import React, {useState } from 'react'
import "./BookingDesk.css"
import Button from "./CustomButtonComponent.js"
import FinalBookingDesk from '../componentsPart4/FinalBookingDesk'
import { getCurrentDate } from './Calen.js'

const Bookingdetails = () => {
    const [show,setShow] = useState(false);
    const handleShow = () =>{
      setShow(true);
    }

    return (
        <div className="container">

            <h1 className="heading"> Desk </h1>

            <div className="headstyle">
               

                <input type="date" id="bookingdate" name="booking" defaultValue={getCurrentDate('-')}/>
                
            </div>

            <br></br>

            <div style={{  display: 'flex', justifyContent: "space-around" }}>

                <div >
                   <div className="head">
                  
                        <label for="slot">Slot:</label>
                        <select name="slot" id="slot">
                            <option value="morning">Morning</option>
                            <option value="evening">Evening</option>
                            <option value="fullday">FullDay</option>
                            
                        </select>

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
                <h4>Select a desk </h4>
            </div>

            <div className="headstyle">
            <Button
                   
                    backgroundColor="black"
                color="white"
                height="50px"
                onClick={handleShow}
                radius="10%"
                width="80%"
                children="Desk No 1"
                
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
                children="Desk No 2"
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
                children="Desk No 3"
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
                children="Desk No 4"
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
                children="Desk No 5"
                />
                </div>

                {show?<FinalBookingDesk/>:null}
            </div>
)
}
export default Bookingdetails