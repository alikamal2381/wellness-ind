import React, {useState} from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

//import './Navbar.css';
//import $ from 'jquery';

function Navbar() {

    const [nav, setnav]= useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a htmlfor='#' className='logo'>
                {/* <img src={logo} alt='' /> */}
                Wellness Industries
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                {/* <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Presentation</a></li>
                <li><a href='#'>Video</a></li>
                <li><a href='#'>Slide Show</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Contact</a></li> */}

                <li>
                  <NavLink className="active1" to="/" exact>Home</NavLink>
                </li>

                <li>
                  <NavLink to="/about" exact>About</NavLink>
                </li>
                <li>
                  <NavLink to="/product" exact>Products</NavLink>
                </li>
                <li>
                  <NavLink to="/presentation" exact>Presentation</NavLink>
                </li>
                <li>
                  <NavLink to="/video" exact>Video</NavLink>
                </li>
                <li>
                  <NavLink to="/slideshow" exact>Slide Show</NavLink>
                </li>
                <li>
                  <NavLink to="/team" exact>Team</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" exact>Contact</NavLink>
                </li>




















            </ul>
        </nav>
    )
}

export default Navbar;