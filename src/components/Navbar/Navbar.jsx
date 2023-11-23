import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Menu'>Menu</NavLink>
            <NavLink to='/Reservation'>Reservation</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </nav>
    )
}

export default Navbar