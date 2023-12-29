import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='description'>
            <div id='profilePhoto'></div>
            Hey, I'm
            <h1>Ryan Imam</h1>
            <div id="logoLinks">
                <div id='githubLogo'>
                    <a href="http://www.github.com/ryanimam" className="fill-div"/>
                </div>
                <div id='linkedInLogo'>
                    <a href="http://www.linkedin.com/in/ryanimam" className="fill-div"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;