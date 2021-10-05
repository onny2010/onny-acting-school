import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/acting-school-lettering-logo-design-260nw-1574424346.webp';

import './MenuBar.css'

const MenuBar = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <ul>
                        <li><NavLink className="nav-li" to='/home'>Home</NavLink></li>
                        <li><NavLink className="nav-li" to='/courses'>Courses</NavLink></li>
                        <li><NavLink className="nav-li" to='/services'>Services</NavLink></li>
                        <li><NavLink className="nav-li" to='/contact'>Contuct us</NavLink></li>
                        <li><NavLink className="nav-li" to='/about'>About Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MenuBar;