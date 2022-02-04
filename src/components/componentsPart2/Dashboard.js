import React, {Component} from 'react'
import './cssPart2/main.css'


class Dashboard extends Component{
    render(){
        return(
            <div className="home">  
            
            {/* <h1 className="header-h1"><a href="#profile"onClick={()=>console.log("Open Drawer")}><i className="fa fa-fw fa-user fa-1x" ></i></a>BookMyDesk</h1> */}
            {/* <nav className="navbar">
            <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
            <a href="#profile"><i className="fa fa-fw fa-user" ></i>Profile</a>
 
            </nav> */}
            <p><input type="date" id="start" min="20xx-01-01" max="20xx-12-31"></input></p>
            <button onClick={()=>console.log("Choose Desk")} class="button">Desk</button>
            <button onClick={()=>console.log("Choose Room")} class="button button2">Meeting Room</button>
           
        </div>)}}
export default Dashboard;
