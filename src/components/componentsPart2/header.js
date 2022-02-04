import React, { Component } from 'react'

import  './css/main.css'

class Header extends Component {
    render() {
        return (
            <div id="home">   
                <h1 className="header-h1">Edit Profile</h1>
                <a href='#arrow_back'><i className='fa fa-fw fa-arrow-left fa-3xy'></i></a>
            </div>
        )
    }
}

export default Header;
