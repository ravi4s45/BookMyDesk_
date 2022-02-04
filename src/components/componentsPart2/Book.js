import React, {Component} from 'react'
import './cssPart2/main.css'

class Book extends Component{
    render(){
        return(
            <div className='Bookdesk'>
                <h3 style={{alignContent:"center"}}>Book</h3>    
                <p style={{alignContent:"center"}}>Choose option</p>
                <button onClick={()=>console.log("Choose Desk")} class="button">Desk</button>
<button onClick={()=>console.log("Choose Room")} class="button button2">Meeting Room</button>   </div>
        )}}
        export default Book;

            