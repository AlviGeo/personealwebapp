import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='bg-color'>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#Lorem">Lorem</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar