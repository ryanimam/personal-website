import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>       
            <nav id='navbar'>
                <div id='navItems'>
                    <div id='navName'>Ryan Imam</div>
                    <ul id="navLinks">
                        <li><a href="">Home</a></li>
                        <li><a href="about.asp">About</a></li>
                        <li><a href="projects.asp">Projects</a></li>
                        <li><a href="projects.asp">Resume</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;