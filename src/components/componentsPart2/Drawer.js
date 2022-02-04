import React, {Component} from 'react'

class Drawer extends Component{
  render(){
      return(
    <div className="Drawer">
    <p>XYZ</p>
    <p>xyz@deloitte.com</p>
    <button type='button' class='button'onClick={()=>console.log("Logout")}>Log Out<i className="fa fa-fw fa-sign-out"></i></button>
    <button type='button' class='button'onClick={()=>console.log("Delete")}>Delete Account<i className="fa fa-fw fa-trash"></i></button>
  </div>
)}}
export default Drawer;