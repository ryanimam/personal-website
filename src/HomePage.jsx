import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='description'>
            <div id='profilePhoto'></div>
            Hey, I'm
            <div id='HomePageName'>Ryan Imam</div>
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