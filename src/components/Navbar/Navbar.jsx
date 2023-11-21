import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar