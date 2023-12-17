import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <header>       
            <nav id='navbar'>
                <div id='navItems'>
                    <div id='navName'>
                        <h1>
                            Ryan Imam
                        </h1>
                    </div>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="about.asp">About</a></li>
                    <li><a href="projects.asp">Projects</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;