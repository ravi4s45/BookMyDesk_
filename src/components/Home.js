import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import Booking from './Booking.png'
const Home = () => {
  

  return (
      <div className="card mb-3" style={{ width: '100%' }}>
          <div className="row no-gutters">
              <div className="col-md-4">
                 
                      <img src={Booking} style={{width:'100%',height:'100%'}}/>
                  
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
                      <p className="card-text">
                          Due to Covid it is required to maintain the social distance.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Home;
